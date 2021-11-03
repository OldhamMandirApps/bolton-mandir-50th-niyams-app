import { differenceInDays, formatISO } from 'date-fns';
import { useState } from 'react';

function getInstallPromptLastSeenAt(promptName: string): string | null {
  return localStorage.getItem(promptName);
}

function setInstallPromptSeenToday(promptName: string): void {
  const today = formatISO(new Date());
  localStorage.setItem(promptName, today);
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
