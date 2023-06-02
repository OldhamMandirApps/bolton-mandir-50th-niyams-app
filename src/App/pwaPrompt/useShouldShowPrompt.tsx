import { useState } from 'react';

function getInstallPromptLastSeenAt(promptName: string): string | null {
  return localStorage.getItem(promptName);
}

function setInstallPromptSeenToday(promptName: string): void {
  const today = new Date().toISOString();
  localStorage.setItem(promptName, today);
}

function differenceInDays(a: Date, b: Date) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.abs((utc2 - utc1) / _MS_PER_DAY);
}

function shouldUserBePromptedToInstall(promptName: string, daysToWaitBeforePromptingAgain: number): boolean {
  const installPromptLastSeenAt = getInstallPromptLastSeenAt(promptName);
  if (!installPromptLastSeenAt) {
    return true;
  } else {
    const today = new Date();
    const daysSinceLastPrompt = differenceInDays(today, new Date(installPromptLastSeenAt));
    return isNaN(daysSinceLastPrompt) || daysSinceLastPrompt > daysToWaitBeforePromptingAgain;
  }
}

function useShouldShowPrompt(promptName: string, daysToWaitBeforePromptingAgain = 30): [boolean, () => void] {
  const [userShouldBePromptedToInstall, setUserShouldBePromptedToInstall] = useState(
    shouldUserBePromptedToInstall(promptName, daysToWaitBeforePromptingAgain),
  );

  const handleUserSeeingInstallPrompt = () => {
    setUserShouldBePromptedToInstall(false);
    setInstallPromptSeenToday(promptName);
  };

  return [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt];
}

export default useShouldShowPrompt;
