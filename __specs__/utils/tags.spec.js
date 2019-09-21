const Utils = require('../../src/utils');

describe('Tags', () => {
  test('isOpen()', () => {
    expect(Utils.isOpen('[')).toBe(true);
    expect(Utils.isOpen('{')).toBe(true);
    expect(Utils.isOpen('(')).toBe(true);
    expect(Utils.isOpen('')).toBe(false);
    expect(Utils.isOpen('<')).toBe(false);
    expect(Utils.isOpen(']')).toBe(false);
    expect(Utils.isOpen('}')).toBe(false);
    expect(Utils.isOpen(')')).toBe(false);
    expect(Utils.isOpen(null)).toBe(false);
  });

  test('isClose()', () => {
    expect(Utils.isClose(']')).toBe(true);
    expect(Utils.isClose('}')).toBe(true);
    expect(Utils.isClose(')')).toBe(true);
    expect(Utils.isClose('(')).toBe(false);
    expect(Utils.isClose('[')).toBe(false);
    expect(Utils.isClose('{')).toBe(false);
    expect(Utils.isClose('>')).toBe(false);
    expect(Utils.isClose(null)).toBe(false);
  });

  test('isOneFamily()', () => {
    expect(Utils.isOneFamily('{', '}')).toBe(true);
    expect(Utils.isOneFamily('[', ']')).toBe(true);
    expect(Utils.isOneFamily('}', '{')).toBe(true);
    expect(Utils.isOneFamily(']', '[')).toBe(true);
    expect(Utils.isOneFamily('<', '>')).toBe(false);
  });

  test('sanitize()', () => {
    expect(Utils.sanitize('a{1<}.[&\n]\r(!#)>')).toBe('{}[]()');
    expect(Utils.sanitize(undefined)).toBe('');
  });
});
