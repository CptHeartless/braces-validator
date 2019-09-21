const Utils = require('./utils');

const { allSeq } = require('./allSeq');

/**
 * Returns longest validity sequence of braces from provided string.
 * Valid braces - {}, [], ().
 *
 * @example
 * // returns '(([]{()}))'
 * longestSeq('(]((])(([]{()}))](()[]{}((')
 *
 * @param {string} sequence - Any sequence of braces.
 * @returns {string} - Longest valid sequence of braces, or empty string.
 */
const longestSeq = sequence => Utils.getLongestString(allSeq(sequence));

module.exports = { longestSeq };
