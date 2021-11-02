import BhaktachintamaniVachanamrut from './custom-pages/BhaktachintamaniVachanamrut';

interface CustomPages {
  [key: string]: JSX.Element;
}

const customPages: CustomPages = {
  'bhaktachintamani-vachanamrut': <BhaktachintamaniVachanamrut />,
};

export function isCustomPage(niyamId: string | undefined): boolean {
  return niyamId ? Object.keys(customPages).includes(niyamId) : false;
}

export function getCustomPage(niyamId: string | undefined): JSX.Element | null {
  if (!niyamId) {
    return null;
  }

  if (!isCustomPage(niyamId)) {
    return null;
  } else {
    return customPages[niyamId];
  }
}
