import { Linter } from 'eslint-linter-browserify';

import * as bpConfig from 'eslint-config-airbnb-base/rules/best-practices';
import * as es6Config from 'eslint-config-airbnb-base/rules/es6';
import * as styleConfig from 'eslint-config-airbnb-base/rules/style';
import * as errorsConfig from 'eslint-config-airbnb-base/rules/errors';
import * as strictConfig from 'eslint-config-airbnb-base/rules/strict';
import * as varConfig from 'eslint-config-airbnb-base/rules/variables';

export const linter = new Linter();

const rules = {
  ...bpConfig.rules,
  ...es6Config.rules,
  ...styleConfig.rules,
  ...errorsConfig.rules,
  ...strictConfig.rules,
  ...varConfig.rules,
};

export const config = {
  rules,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
};
