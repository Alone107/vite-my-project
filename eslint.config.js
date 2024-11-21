import globals from 'globals';
import pluginJs from '@eslint/js';
import { rules } from 'eslint-plugin-prettier';

module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: { 'prettier/prettier': 'error' },
};

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
