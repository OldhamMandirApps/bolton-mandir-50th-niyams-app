import validate from './validate';

describe('validate progress form inputs', () => {
  test.each([
    { niyam: null, progress: null },
    { niyam: null, progress: 0 },
    { niyam: null, progress: 1 },
    { niyam: { id: '', label: '' }, progress: 0 },
  ])('should return false', ({ niyam, progress }) => {
    expect(validate(niyam, null, progress)).toBe(false);
  });

  test('should return true', () => {
    expect(validate({ id: '', label: '' }, null, 1)).toBe(true);
  });
});
