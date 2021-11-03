import useShouldShowPrompt from './useShouldShowPrompt';

const iosInstallPromptedAt = 'iosInstallPromptedAt';

function isIOS(): boolean {
  if (navigator.standalone) {
    return false;
  }

  const ua = window.navigator.userAgent;
  const isIPad = !!ua.match(/iPad/i);
  const isIPhone = !!ua.match(/iPhone/i);
  return isIPad || isIPhone;
}

function useIosInstallPrompt(): [boolean, () => void] {
  const [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt] = useShouldShowPrompt(iosInstallPromptedAt);

  return [isIOS() && userShouldBePromptedToInstall, handleUserSeeingInstallPrompt];
}

export default useIosInstallPrompt;
