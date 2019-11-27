module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  plugins: ['import'],
  rules: {
    camelcase: 0,
    'func-names': 0,
    'no-plusplus': 0,
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'import/extensions': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],

    /* 'expression' or 'declaration'
    Choose your own or delete to disable */
    'func-style': ['error', 'expression'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
