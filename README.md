[![Build Status](https://travis-ci.com/CptHeartless/braces-validator.svg?branch=master)](https://travis-ci.com/CptHeartless/braces-validator)

## Table of contents

- [Getting started](#getting-started)
- [Running from command line](#running-from-command-line)
- [Using as git node module](#using-as-git-node-module)
- [License](#lincese)

---

## Getting Started

Install braces-validator using `yarn`:

```bash
yarn add git+ssh://git@github.com/CptHeartless/braces-validator.git#v1.0.3
```

Or `npm`

```bash
npm install git+ssh://git@github.com/CptHeartless/braces-validator.git#v1.0.3
```

## Running from command line

You can use braces-validator directly from the CLI (if it's globally available in your `PATH`, e.g. by `yarn global add <repo>#<version>` or `npm install <repo>#<version> --global`) with a variety of useful options.

Use following command to see the list of available commands and options.

```bash
braces-validator help
```

## Using as git node module

```javascript
const { allSeq, longestSeq, sanitize } = require('braces-validator');

// Removes all not allowed chars from the provided string.
sanitize('{}()[]<>\r\n'); // '{}()[]'

// Returns array of validity sequences of braces on that
// each open brace har their own close, from the provided string.
// It will return an empty array if sequences have not been founded.
allSeq(']]()[[[](){}}}}}'); // ['()', '[](){}']
allSeq('[[['); // []

// Returns longest validity sequence of braces from provided string.
// It will return an empty string if that is not found any valid sequence.
longestSeq(']]()[[[](){}}}}}'); // '[](){}'
```

## Lincese

braces-validator is [`MIT Licensed`](https://github.com/CptHeartless/braces-validator/blob/master/LICENSE)
