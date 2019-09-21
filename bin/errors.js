const red = text => `\x1b[31m${text}\x1b[0m`;

class CliException {
  constructor(name, message) {
    this.name = red(`Error❗️\n\r${name}`);
    this.message = red(message);
  }
}

const MISSED_INPUT = new CliException(
  'Missed input value',
  'Expected the sequence of braces that have been passed at "--input" or "-i" arguments',
);

const LOW_LENGTH_INPUT = new CliException(
  'Low length of sequence',
  'Expected more then 1 character at passed input',
);

const INVALID_CMD = new CliException(
  'Unexpected command',
  'Use "braces-validator help" to see list of the commands.',
);

const UNKNOWN_ERR = new CliException(
  'Unknown error!',
  'Use braces-validator [command] --debug to log error.',
);

module.exports = {
  CliException,
  MISSED_INPUT,
  LOW_LENGTH_INPUT,
  INVALID_CMD,
  UNKNOWN_ERR,
};
