export interface NiyamData {
  name: string;
  progress: number;
  target: number;
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    gradient: true;
  }
}

export type Nullable<T> = T | null;
export type Optional<T> = T | null | undefined;
