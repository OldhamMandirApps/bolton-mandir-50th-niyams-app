import { Niyam } from '../../../config/niyams';
import validate from './validate';

describe('validate progress form inputs', () => {
  test.each([
    { niyam: null, progress: null },
    { niyam: null, progress: 0 },
    { niyam: null, progress: 1 },
    { niyam: Niyam.JanmangalNamavaliStotram, progress: 0 },
  ])('should return false', ({ niyam, progress }) => {
    expect(validate(niyam, progress)).toBe(false);
  });

  test('should return true', () => {
    expect(validate(Niyam.JanmangalNamavaliStotram, 1)).toBe(true);
  });
});
