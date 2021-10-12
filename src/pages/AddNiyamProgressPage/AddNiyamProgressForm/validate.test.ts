import { Niyam } from '../../../config/niyams';
import validate from './validate';

describe('validate', () => {
  test.each([
    { niyam: null, progress: null },
    { niyam: null, progress: 0 },
    { niyam: null, progress: 1 },
    { niyam: Niyam.JanmangalNamavali, progress: 0 },
  ])('should return false', ({ niyam, progress }) => {
    expect(validate(niyam, progress)).toBe(false);
  });

  test('should return true', () => {
    expect(validate(Niyam.JanmangalStotram, 1)).toBe(true);
  });
});
