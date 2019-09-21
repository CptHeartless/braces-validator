const Utils = require('./utils');

/**
 *  Pop braces from the provided stack, and returns an array of their indexes.
 *
 * @param {Utils.Stack<Array<string, number>>} stack -
 * @returns {Array<number>}
 */
const popIndexesFromStack = stack => {
  const result = [];

  while (stack.peek()) {
    result.push(stack.pop()[1]);
  }

  return result;
};

/**
 * Returns array of validity sequences of braces on that
 * each open brace har their own close, from provided string.
 * It will return an empty array if sequences have not been founded.
 * Valid braces - {}, [], ().
 *
 * @example
 * // returns ['(([]{()}))', '()[]{}']
 * allSeq('(]((])(([]{()}))](()[]{}((')
 *
 * @throws Will throw an error if the provided argument is not a string.
 * @param {string} sequence - Text with any sequence of braces.
 * @returns {Array<string>} - Array of validity sequences of braces.
 */
const allSeq = sequence => {
  if (typeof sequence !== 'string')
    throw new Error(`Expected string instead of ${typeof sequence}`);
  const stack = new Utils.Stack();
  const tags = Array.from(sequence);
  const holes = [];

  for (const [index, tag] of tags.entries()) {
    if (Utils.isOpen(tag)) {
      stack.push([tag, index]);
    } else if (Utils.isClose(tag) && Utils.isOneFamily(!stack.empty() && stack.peek()[0], tag)) {
      stack.pop();
    } else {
      holes.push(...popIndexesFromStack(stack), index);
    }
  }

  return Utils.splitStringAtIndexes(sequence, [...holes, ...popIndexesFromStack(stack)]).filter(
    s => s.length > 1,
  );
};

module.exports = { allSeq, popIndexesFromStack };
