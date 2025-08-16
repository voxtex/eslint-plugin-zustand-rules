'use strict';

const requireIndex = require('requireindex');
const rules = requireIndex(`${__dirname}/rules`);

const plugin = { rules };

module.exports = {
  rules,
  configs: {
    recommended: {
      plugins: {
        'zustand-rules': plugin,
      },
      rules: {
        'zustand-rules/enforce-slices-when-large-state': 'warn',
        'zustand-rules/use-store-selectors': 'error',
        'zustand-rules/no-state-mutation': 'error',
        'zustand-rules/enforce-use-setstate': 'error',
        'zustand-rules/enforce-state-before-actions': 'error',
      },
    },
  },
};