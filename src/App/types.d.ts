import { NiyamOption } from '../config/niyams';

interface RouteParams {
  niyamId?: NiyamOption;
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface Navigator {
    standalone: boolean;
  }
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}
