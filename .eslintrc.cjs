module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  plugins: ['@html-eslint'],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn', // console 사용시 warning이 나타납니다.
    'linebreak-style': 'off', // crlf, lf 상관없도록 변경합니다.
    semi: ['error', 'never'], // semicolon 제거합니다.
    'no-underscore-dangle': ['warn', { allowAfterThis: true }], // this._bar()는 가능하고 그 외는 warning이 나타납니다.
  },
}
