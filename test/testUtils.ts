import { NiyamData } from '../src/types';

export const NiyamBuilder = (name: string, progress: number, target: number): NiyamData => {
  return {
    name,
    progress,
    target,
  };
};
