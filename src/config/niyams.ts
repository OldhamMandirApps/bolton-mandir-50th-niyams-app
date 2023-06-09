export interface Niyam {
  id: string;
  label: string;
  timeBased: boolean;
}

export const niyams: Niyam[] = [
  {
    id: 'Dandvats',
    label: 'Dandvat / Panchang Pranam',
    timeBased: false,
  },
  {
    id: 'Pradikshana',
    label: 'Pradikshana',
    timeBased: false,
  },
  {
    id: 'Mala',
    label: 'Mala',
    timeBased: false,
  },
  {
    id: 'Janmangal',
    label: 'Janmangal Paat',
    timeBased: false,
  },
  {
    id: 'ReadingShastras',
    label: 'Reading shastras/leelas (hours)',
    timeBased: true,
  },
];
