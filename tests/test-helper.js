import resolver from './helpers/resolver';

import './helpers/acceptance-test-helpers';

import {
  setResolver
} from 'ember-qunit';

import { start } from 'ember-cli-qunit';

setResolver(resolver);
start();
