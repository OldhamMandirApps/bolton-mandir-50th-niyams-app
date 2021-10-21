import 'react-i18next';
import { resources } from './index';

declare module 'react-i18next' {
  type Resources = typeof resources.en;
}

interface NiyamConfig {
  name: string;
  tabs: Tab[];
}
