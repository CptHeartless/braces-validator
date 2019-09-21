const { allSeq } = require('../../src');

describe('allSeq()', () => {
  test('valid sequence', () => {
    expect(allSeq('(()[[]{}[]]())')).toEqual(['(()[[]{}[]]())']);
  });

  test('only open braces', () => {
    expect(allSeq('({[')).toEqual([]);
  });

  test('only close braces', () => {
    expect(allSeq('[{(')).toEqual([]);
  });

  test('starting with close braces', () => {
    expect(allSeq(']})[(){}]')).toEqual(['[(){}]']);
  });

  test('starting with extra open braces', () => {
    expect(allSeq('({(([]{})')).toEqual(['([]{})']);
  });

  test('ending with open braces', () => {
    expect(allSeq('(()[{}])({[')).toEqual(['(()[{}])']);
  });

  test('ending with extra close braces', () => {
    expect(allSeq('(()){{[([])]}}}}}]})}')).toEqual(['(()){{[([])]}}']);
  });

  test('starting with mixing open and close non-valid sequence', () => {
    expect(allSeq('(({(})]])[[[[{()[]}')).toEqual(['{()[]}']);
  });

  test('ending with mixing open and close non-valid sequence', () => {
    expect(allSeq('{()[]}(({(})]]((([[[)')).toEqual(['{()[]}']);
  });

  test('non-valid sequence inside of the sequence', () => {
    expect(allSeq('()][)[})}[()')).toEqual(['()', '()']);
  });

  test('mixing #1', () => {
    expect(allSeq('[[})([][{])({[]()})[[[[[}})))()[]]{()')).toEqual([
      '[]',
      '({[]()})',
      '()[]',
      '()',
    ]);
    expect(allSeq(')({]][)()))}}[[[[[)})(][{()]{[][()}[[')).toEqual(['()', '()', '[]', '()']);
  });

  test('mixing #2', () => {
    expect(allSeq('((<[]>)]|[]||]]{][]][]([])(>()<><}][]')).toEqual([
      '[]',
      '[]',
      '[]',
      '[]([])',
      '()',
      '[]',
    ]);
    expect(allSeq('][]}<><)(>()][(][]][]{]]||][|])>][<((')).toEqual(['[]', '()', '[]', '[]']);
  });

  it('should throw an error on types that are not a string', () => {
    expect(() => allSeq(null)).toThrow('Expected string instead of object');
    expect(() => allSeq(undefined)).toThrow('Expected string instead of undefined');
    expect(() => allSeq({})).toThrow('Expected string instead of object');
    expect(() => allSeq([])).toThrow('Expected string instead of object');
    expect(() => allSeq(42)).toThrow('Expected string instead of number');
    expect(() => allSeq(true)).toThrow('Expected string instead of boolean');
  });
});
