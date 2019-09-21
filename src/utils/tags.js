const TAGS = {
  '[': ']',
  '{': '}',
  '(': ')',
};

/**
 * Determines that the provided char is the open tag.
 *
 * @param {string} tag - Char.
 */
const isOpen = tag => Object.keys(TAGS).includes(tag);

/**
 * Determines that the provided char is the close tag.
 *
 * @param {string} tag - Char.
 */
const isClose = tag => Object.values(TAGS).includes(tag);

/**
 * Determines that the provided chars from the one family of tags.
 *
 * @param {string} tagA - Char.
 * @param {string} tagB - Char.
 */
const isOneFamily = (tagA, tagB) => TAGS[tagA] === tagB || TAGS[tagB] === tagA;

/**
 * Remove all chars from the provided string that do not belong to open or close tags.
 *
 * @param {string} string - String to sanitize.
 * @returns {string} - Sanitized string.
 */
const sanitize = (string = '') => string.replace(/[^{}[\]()]/g, () => '');

module.exports = {
  isOpen,
  isClose,
  isOneFamily,
  sanitize,
};
