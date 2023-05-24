export interface Niyam {
  id: string;
  label: string;
  timeBased: boolean;
}

export const niyams: Niyam[] = [
  {
    id: 'HariSmruti',
    label: 'Harismruti Recitals',
    timeBased: false,
  },
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
    label: 'Reading shastras/leelas (age 5+) (hours)',
    timeBased: true,
  },
  {
    id: 'Dhun',
    label: 'Dhun (family niyam) (hours)',
    timeBased: true,
  },
];
