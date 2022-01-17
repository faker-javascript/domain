import {expectType} from 'tsd';
import domain from './index.js';

expectType<string>(domain());
expectType<string>(domain({tld: 'com'}));
