'use strict';

const cliCommit = require('..');
const assert = require('assert').strict;

assert.strictEqual(cliCommit(), 'Hello from cliCommit');
console.info('cliCommit tests passed');
