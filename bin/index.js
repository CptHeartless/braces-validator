#!/usr/bin/env node
/* eslint-disable no-console */

const options = require('minimist')(process.argv.slice(2), {
  alias: {
    isSanitize: ['sanitize', 's'],
    isDebug: ['debug', 'd'],
  },
  default: {
    isSanitize: false,
    isDebug: false,
  },
  boolean: ['isSanitize', 'isDebug'],
});

const { allSeq, longestSeq, sanitize } = require('../src');

const Errors = require('./errors');

const help = () => {
  console.log(
    `Usage: braces-validator [command] [options]
    
    Displays help information.

    Commands:
        - all-seq <string>       find all validity sequences of braces from the provided string.
        - longest-seq <string>   find longest validity sequence of braces from the provided string.
        - help

    Options:
        --sanitize, -s           remove all non-bracer character from the string.
        --debug, -d
    `,
  );
};

const commands = {
  'all-seq': ({ _: [, seq], isSanitize }) => {
    if (typeof seq !== 'string') throw Errors.MISSED_INPUT;
    if (seq.length < 2) throw Errors.LOW_LENGTH_INPUT;

    console.log(allSeq(isSanitize ? sanitize(seq) : seq).join(' - '));
  },
  'longest-seq': ({ _: [, seq], isSanitize }) => {
    if (typeof seq !== 'string') throw Errors.MISSED_INPUT;
    if (seq.length < 2) throw Errors.LOW_LENGTH_INPUT;

    const result = longestSeq(isSanitize ? sanitize(seq) : seq);

    console.log(result.length > 2 ? result : 'Not found any valid sequences');
  },
  help,
};

const run = () => {
  const {
    _: [command],
  } = options;
  if (!{}.hasOwnProperty.call(commands, command)) {
    throw Errors.INVALID_CMD;
  }
  commands[command].call(null, options);
};

try {
  run();
} catch (e) {
  const isKnownError = e instanceof Errors.CliException;
  const { name, message } = isKnownError ? e : Errors.UNKNOWN_ERR;
  console.log(name);
  console.log(message);

  if (!isKnownError && options.isDebug) {
    console.trace(e);
  }
}
