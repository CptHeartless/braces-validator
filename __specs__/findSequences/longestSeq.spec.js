const { getLongestString } = require('../../src/utils');
const { allSeq } = require('../../src/allSeq');

const { longestSeq } = require('../../src');

jest.mock('../../src/utils');
jest.mock('../../src/allSeq');

describe('longestSeq()', () => {
  beforeEach(() => {
    getLongestString.mockReset();
    allSeq.mockReset();
  });

  it('should put provided argument into "allSeq" function, put its results into "getLongestString" and return its result', () => {
    allSeq.mockReturnValue(['item1', 'item2']);
    getLongestString.mockReturnValue('item2');

    expect(longestSeq('some text')).toBe('item2');
    expect(allSeq).toBeCalledWith('some text');
    expect(getLongestString).toBeCalledWith(['item1', 'item2']);
  });
});
