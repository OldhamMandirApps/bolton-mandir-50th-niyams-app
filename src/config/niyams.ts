export enum Niyam {
  ShantiPaath = 'Shanti Paath',
  JanmangalNamavali = 'Janmangal Namavali',
  JanmangalStotram = 'Janmangal Stotram',
  OradaNaPads = 'Orada na Pads',
}

const supportedNiyams = ['orada-na-pads'];

export function isSupportedNiyam(niyamId: string | undefined): boolean {
  if (niyamId) {
    return supportedNiyams.includes(niyamId);
  } else {
    return false;
  }
}
