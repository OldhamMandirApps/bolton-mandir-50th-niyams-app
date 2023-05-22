export interface Niyam {
  id: string;
  label: string;
  timeBased?: boolean;
}

export const niyams: Niyam[] = [
  {
    id: 'HariSmruti',
    label: 'Harismruti Recitals',
  },
  {
    id: 'Dandvats',
    label: 'Dandvat / Panchang Pranam',
  },
  {
    id: 'Pradikshana',
    label: 'Pradikshana',
  },
  {
    id: 'Mala',
    label: 'Mala',
  },
  {
    id: 'Janmangal',
    label: 'Janmangal Paat',
  },
  {
    id: 'ReadingShastras',
    label: 'Reading shastras/leelas (age 5+) (hours)',
    timeBased: true,
  },
  {
    id: 'Dhun',
    label: 'Dhun (family niyam) (hours)',
    timeBased: true,
  },
];
