const { add } = require('./calculator');

test('Empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('Single number returns the number', () => {
  expect(add('1')).toBe(1);
});

test('Two numbers are summed correctly', () => {
  expect(add('1,5')).toBe(6);
});
