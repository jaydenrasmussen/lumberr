'use strict';
const test = require('ava');
const log = require('../');

test('Imports as an object', t => t.is(typeof log, 'object'));
test('Has the correct functions available', t => {
    t.is(typeof log.error, 'function');
    t.is(typeof log.success, 'function');
    t.is(typeof log.info, 'function');
    t.is(typeof log.warn, 'function');
});
test('Has a level attached to it', t => t.is(typeof log.level, 'string'));
test('Has a function called options', t => t.is(typeof log.options, 'function'));
