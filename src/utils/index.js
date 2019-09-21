const stack = require('./stack');
const tags = require('./tags');
const string = require('./string');

module.exports = { ...stack, ...tags, ...string };
