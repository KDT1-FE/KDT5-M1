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
      rules: {
        '@html-eslint/indent': ['error', 2],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest', // ecma 최신 버전을 사용합니다.
    sourceType: 'module', // module (import, export) 방식을 사용합니다.
  },
  rules: {
    'no-console': 'warn', // console 사용시 warning이 나타납니다.
    'linebreak-style': 'off', // crlf, lf 상관없도록 변경합니다.
    semi: ['error', 'never'], // semicolon 제거합니다.
    'no-underscore-dangle': ['warn', { allowAfterThis: true }], // this._bar()는 가능하고 그 외는 warning이 나타납니다.
    'max-len': ['warn', { code: 120, tabWidth: 2 }],
    'spaced-comment': 'off', // 주석 스타일 강제 취소 (html, css 파일에서 주석을 달면 에러가 남, 주석을 알아서 이쁘게 쓸 것!)
    'no-param-reassign': 'off',
    'import/extensions': 'warn',
  },
}
