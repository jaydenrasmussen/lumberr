'use strict';
const test = require('ava');
const l = require('../');
test('library imports with level of console', t => t.is(l.level, 'console'));
test('error prints, no matter the type', t => {
    l.error('string');
    l.error({ prop1: 'object' });
    l.error(['array']);
    t.pass();
});
test('info prints, no matter the type', t => {
    l.info('string');
    l.info({ prop1: 'object' });
    l.info(['array']);
    t.pass();
});
test('warn prints, no matter the type', t => {
    l.warn('string');
    l.warn({ prop1: 'object' });
    l.warn(['array']);
    t.pass();
});
test('success prints, no matter the type', t => {
    l.success('string');
    l.success({ prop1: 'object' });
    l.success(['array']);
    t.pass();
});
