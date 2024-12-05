const { add } = require('./calculator');

test('Empty string returns 0', () => {
  expect(add('')).toBe(0);
});
