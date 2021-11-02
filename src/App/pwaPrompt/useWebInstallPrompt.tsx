import { useEffect, useState } from 'react';
import useShouldShowPrompt from './useShouldShowPrompt';
import { BeforeInstallPromptEvent } from '../types';

const webInstallPromptedAt = 'webInstallPromptedAt';

function useWebInstallPrompt(): [BeforeInstallPromptEvent | null, () => void, () => void] {
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt] = useShouldShowPrompt(webInstallPromptedAt);

  useEffect(() => {
    function beforeInstallPromptHandler(event: BeforeInstallPromptEvent) {
      event.preventDefault();

      if (userShouldBePromptedToInstall) {
        setInstallPromptEvent(event);
      }
    }

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
  }, [userShouldBePromptedToInstall]);

  const handleInstallDeclined = () => {
    handleUserSeeingInstallPrompt();
    setInstallPromptEvent(null);
  };

  function handleInstallAccepted() {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      installPromptEvent.userChoice.then((choice) => {
        if (choice.outcome !== 'accepted') {
          handleUserSeeingInstallPrompt();
        }
        setInstallPromptEvent(null);
      });
    }
  }

  return [installPromptEvent, handleInstallDeclined, handleInstallAccepted];
}

export default useWebInstallPrompt;
