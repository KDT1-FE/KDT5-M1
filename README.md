# Bluebottle clone

[제출용 과제](https://main--bluebottle-clone.netlify.app/) 보러가기

[블루 보틀 사이트](https://bluebottlecoffee.com/us/eng) 보러가기

# 구조
```
KDT5-M1
├── dist // 이곳에 번들링한 결과물이 쌓입니다.
├── README.md
├── index.html // 메인화면을 보여주는 HTML파일입니다.
├── public
│   ├── images
│   └── svg
└── src
    ├── header.js
    ├── interior-view.js
    ├── main.js // SCSS, JS의 entry입니다.
    ├── swiper.js
    ├── view.js
    └─── scss // <section>별로 SCSS파일을 분리했습니다.
        ├── _config.scss
        ├── card-category.scss
        ├── footer.scss
        ├── header.scss
        ├── interior-view.scss
        ├── left-categories.scss
        ├── main-view.scss
        ├── main.scss
        ├── our-story.scss
        └── subscription.scss
```
# 라이브러리
- swipersjs
- eslint
- parcel

# 언어
- HTML
- JavaScript
- SCSS

# 상세 설명

- header, section 등 **시멘틱 태그**를 최대한 활용했습니다.
- CSS 전처리도구 **SCSS를 사용**했습니다.
- **Parcel을 사용하여 번들링** 했습니다.
- HTML, CSS로 구현하기 힘들다고 생각한 부분은 JavaScript로 구현했습니다.
- **반응형을 구현하지 않았습니다.** max width가 1278px미만일 경우 원본가 상이한 부분이 생길 수 있습니다.
- **GNB의 모든 기능이 구현되지 않았습니다**. 원본과 동일하게 동작하지 않을 수 있습니다.
- 접근성을 고려해서 wai-aria를 최대한 활용했습니다. (bluebottle 웹사이트에 aria관련 속성이 많았습니다.)
