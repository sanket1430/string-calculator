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

test('Handles newlines as delimiters', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('Handles custom delimiters', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('Throws an exception for negative numbers', () => {
  expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed: -2,-4');
});
