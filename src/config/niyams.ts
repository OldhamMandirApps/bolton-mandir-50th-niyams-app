export interface Niyam {
  id: string;
  label: string;
  timeBased: boolean;
}

export const defaultSankalpTarget = 2000000;

export const niyams: Niyam[] = [
  {
    id: 'Mahamantra',
    label: 'Swaminarayan Mahamantra Jap',
    timeBased: false,
  },
];
