export enum Niyam {
  ShantiPaath = 'Shanti Paath',
  JanmangalNamavaliStotram = 'Janmangal Namavali and Stotram',
  OradaNaPads = 'Orada na Pads',
}

export type NiyamOption = typeof supportedNiyams[number];
export const supportedNiyams = ['orada-na-pads', 'janmangal-namavali-stotram', 'shanti-paath'] as const;

export function isSupportedNiyam(niyamId: NiyamOption | undefined): boolean {
  if (niyamId) {
    return supportedNiyams.includes(niyamId);
  } else {
    return false;
  }
}
