const { allSeq } = require('../../src');

describe('allSeq()', () => {
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
});
