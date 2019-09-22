/**
 * Split string at provided indexes, and returns an array of strings without items of that indexes.
 *
 * @param {string} string - String for splitting.
 * @param {Array<number>} indexes - The array of indexes that will split the string.
 */
const splitStringAtIndexes = (string, indexes) =>
  Array.from(string).reduce((parts, tag, index) => {
    if (typeof parts[parts.length - 1] === 'undefined') parts.push('');
    if (indexes.includes(index)) {
      if (parts[parts.length - 1].length !== 0) parts.push('');
      return parts;
    }

    // eslint-disable-next-line no-param-reassign
    parts[parts.length - 1] += tag;

    return parts;
  }, []);

/**
 * Finds longest string in the provided array of strings.
 *
 * @param {Array<string>} strings - Array of strings.
 * @returns {string} - Longest string.
 */
const getLongestString = strings =>
  strings.reduce((longest, string) => {
    if (longest.length < string.length) return string;

    return longest;
  }, '');

module.exports = { splitStringAtIndexes, getLongestString };
