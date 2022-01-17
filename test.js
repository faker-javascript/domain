import test from 'ava';
import domain from './index.js';

test('domain return type to be string', t => {
    t.is(typeof domain(), 'string');
});

test('domain with tld com contains tld com', t => {
    t.true(domain({tld: 'com'}).includes('.com'));
});
