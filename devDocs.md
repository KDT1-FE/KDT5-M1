# Setting & Linting

## eslint settings

`eslint --init`으로 eslint를 세팅하였고
추가적으로 `html-eslint`패키지를 사용하였습니다.

[@html-eslint getting started](https://yeonjuan.github.io/html-eslint/docs/getting-started/)와 `/package.json`, `/.eslintrc.cjs`를 참고해주세요!

## Prettier setting

.scss를 제외한 나머지는 prettier를 사용할 수 없도록 막아뒀습니다.

pretter세팅은 `/.pretterrc`, `/.prettierignore`를 참고해주세요!

## Bundler setting (Parcel & SCSS)

번들러는 `parcel`
CSS 전처리 도구는 `SCSS`를 사용했습니다.

`npm install --save-dev parcel @parcel/transformer-sass`

## Bundler setting (Webpack & SCSS)

parcel대신 webpack으로 번들링을 도전하다가 구조가 마음에 안들어서 포기했습니다.

공부 더 해서 다시 도전해보겠습니다..

관련 내용은 다음에 업데이트하겠습니다 (2023/03/31)

```json
{
  "devDependencies": {
    "html-webpack-plugin": "^5.5.0", // html을 bundling할때 사용합니다.
    "node-sass": "^8.0.0",
    "css-loader": "^6.7.3",
    "sass-loader": "^13.2.2",
    "style-loader": "^3.3.2",
    "webpack": "^5.76.3",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.13.1" // dev 서버를 열 떄 사용합니다.
  }
}
```

## Additional settings

vscode를 사용중이시면 .vscode/settings.json에 아래 내용을 추가해주세요.

```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript", // ...
    "html" // Add "html" to enable linting `.html` files.
  ]
}
```

# Style

스타일은 `/src/scss/_config.scss`에 선언되어 있고 아래 내용을 참고했습니다.

## Font

```css
/* 중후한 헤딩 */
.font-serif {
  font-family: Chronicle Text G1 Roman, ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
}
/* 고딕한 내용 */
.font-sans {
  font-family: Halis GR Regular, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica
      Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
/* body 폰트 */
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica
      Neue, sans-serif;
}
```

## Color

```css
/* main background (color-cream) */
    main {
      background-color: rgb(253, 251, 247);
    }
/* footer background & font black (font-black) */
    footer {
      backgound-color: rgb(51, 51, 51)
    }
/* blue bottle color (color-bluebottle) */
    .bluebottle {
      rgb(0, 169, 224)
    }
/* highlight background color (color-begie) */
    .main {
      background-color : rgb(249, 246, 240)
    }
```
