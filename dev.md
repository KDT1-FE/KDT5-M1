# wepback settings

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

# eslint settings

## html linting
html-eslint를 사용했습니다.

[@html-eslint getting started](https://yeonjuan.github.io/html-eslint/docs/getting-started/)를 참고해주세요!

## javascript linting

eslint --init으로 airbnb 설정을 따랐습니다.
자세한 설정은 ./eslintrc.cjs 파일을 참고해주세요.

```bash
npx eslint --init
```

## scss

```
npm --save-dev install sass-loader node-sass
```

## additional settings

vscode를 사용중이라면 .vscode/settings.json에 아래 내용을 추가해주세요.
```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript", // ...
    "html" // Add "html" to enable linting `.html` files.
  ]
}
```

## prettier setting

prettier를 사용할 수 없도록 막아뒀습니다.
.prettierignore를 참고해주세요.


## font

```css
/* 중후한 헤딩 */
.font-serif {
    font-family: Chronicle Text G1 Roman,ui-serif,Georgia,Cambria,Times New Roman,Times,serif;
}
/* 고딕한 내용 */
.font-sans {
    font-family: Halis GR Regular,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
/* body 폰트 */
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
```

## color 
```css
/* main background */
    main {
      background-color: rgb(253, 251, 247);
    }
/* footer background */
    footer {
      backgound-color: rgb(51, 51, 51)
    }
/* blue bottle color */
    .bluebottle {
      rgb(0, 169, 224)
    }
```