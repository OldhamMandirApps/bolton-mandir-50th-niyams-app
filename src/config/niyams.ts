export interface Niyam {
  id: string;
  label: string;
  timeBased: boolean;
}

export const niyams: Niyam[] = [
  {
    id: 'VanduPads',
    label: 'Vandu pads recited',
    timeBased: false,
  },
];
