const Utils = require('../../src/utils');

describe('splitStringAtIndexes', () => {
  test('removing char at passed indexes and splitting string around of it', () => {
    expect(Utils.splitStringAtIndexes('some-string', [4])).toEqual(['some', 'string']);
  });

  test('for any indexes', () => {
    expect(Utils.splitStringAtIndexes('ababbabaab', [0, 2, 5, 7, 8])).toEqual([
      'b',
      'bb',
      'b',
      'b',
    ]);
  });

  test('index is the last char at string', () => {
    expect(Utils.splitStringAtIndexes('abcd', [3])).toEqual(['abc', '']);
  });

  test('neighboring indexes', () => {
    expect(Utils.splitStringAtIndexes('aaaa', [0, 1, 2])).toEqual(['a']);
  });

  test('for an empty string', () => {
    expect(Utils.splitStringAtIndexes('', [0, 1, 2])).toEqual([]);
  });

  test('negative indexes', () => {
    expect(Utils.splitStringAtIndexes('', [-1, -2])).toEqual([]);
  });

  test('chars instead of indexes', () => {
    expect(Utils.splitStringAtIndexes('', ['a', 'b', 'c'])).toEqual([]);
  });

  test('null for the first argument', () => {
    expect(() => Utils.splitStringAtIndexes(null, [1, 2])).toThrow(
      'Cannot convert undefined or null to object',
    );
  });

  test('array for the first argument', () => {
    expect(Utils.splitStringAtIndexes(['a', 'b', 'c', 'd', 'o'], [1, 4])).toEqual(['a', 'cd', '']);
  });
});

describe('getLongestString', () => {
  test('on empty array', () => {
    expect(Utils.getLongestString([])).toBe('');
  });

  test('on array of string', () => {
    expect(Utils.getLongestString(['', '1', '123457', '123'])).toBe('123457');
  });
});
