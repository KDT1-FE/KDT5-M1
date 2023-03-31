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
        '@html-eslint/indent': ['error', 2], // HTML indent를 2space로 고정합니다.
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest', // ecma 최신 버전을 사용합니다.
    sourceType: 'module', // module (import, export) 방식을 사용합니다.
  },
  rules: {
    'no-console': 'warn', // console 사용시 warning이 나타납니다. (production할 떄 지워줘야하니까 warn합니다.)
    'linebreak-style': 'off', // crlf, lf 상관없도록 변경합니다. (윈도우, 맥 번갈아서 쓰고 있습니다.)
    semi: ['error', 'never'], // semicolon을 제거합니다.
    'no-underscore-dangle': ['warn', { allowAfterThis: true }], // this._bar()는 가능하고 그 외는 warning이 나타납니다.
    'max-len': ['warn', { code: 120, tabWidth: 2 }],
    'spaced-comment': 'off', // 주석 스타일 강제 취소 (html, css 파일에서 주석을 달면 이 에러가 납니다.)
    'no-param-reassign': 'off', // DOM을 다루다보면 재할당 할 일이 생긴다고 판단했습니다.
    'import/extensions': 'warn', // js파일을 spliting하기 위해 on -> warn으로 변경 하였습니다.
    'prefer-arrow-callback': 'off', // this를 다루게 될 일이 있을 수도 있으니까 off하였습니다.
    'no-await-in-loop': 'warn',
  },
}
