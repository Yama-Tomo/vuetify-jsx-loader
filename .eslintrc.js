module.exports = {
  root: true,
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    node: true,
    jest: true,
    es6: true
  },
  rules: {
    'prettier/prettier': ['error', {'singleQuote': true, 'semi': false}]
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ]
}
