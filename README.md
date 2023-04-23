# 👀 자신이 원하는 사이트 레이아웃 클론

원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.  
평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.  
과제 수행 및 리뷰 기간은 별도 공지를 참고하세요!

## 필수 요구사항

- [x] 과제에 대한 설명을 포함한 `README.md` 파일을 제공하세요!
- [x] 과제 결과와 비교할 수 있는 실제 사이트(페이지)의 주소를 명시하세요!
  - **[BGF복지재단](http://www.bgfwelfare.or.kr/)**
- [x] 과정에서 사용한 프로젝트 폴더/파일이 모두 포함돼야 합니다, 일부 파일만 제출하지 마세요!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.
  - **[배포링크](http://bgfwelfare-geumyeopyoon.netlify.app)**

## 선택 요구사항

- [x] `<header>`, `<section>` 등 시멘틱 태그를 최대한 활용해보세요.
  - `<header>`, `<main>`, `<nav>`, `<footer>` 등 최대한 활용하려고 노력했습니다.
- [x] 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.
  - 실제 사이트에서는 flex를 사용하지 않고 float를 사용하고 있었기 때문에 대부분 flex로 작업하였습니다.
- [x] 부분적으로 BEM 방법론을 도입해보세요.
  - 최대한 도입해보려고 했습니다만 맞게 사용한건지 모르겠습니다..!
- [x] JS가 필요한 부분은 되도록 생략하되 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
  - HTML, SCSS로만 작업하였습니다!
- [ ] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)
- [x] SCSS 등의 CSS 전처리도구를 도입해보세요.
  - 배워본 적 없는 SCSS로 작업하는게 생각보다 까다로웠던 것 같습니다.
- [x] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
  - HTML, CSS를 활용한 과제이기 때문에 소규모/ 토이 프로젝트에 적합한 Parcel를 사용했습니다.  
    bundler 사용이 처음이라 배포과정 중 오류가 계속 발생하여 어려웠습니다..!

## 작업한/ 아쉬운 부분

- 요소들을 float로 작업한 실제 사이트와 다르게 flex로 정렬하고 position(relative, absolute)로 추가배치 했습니다.
- header 파트에 있는 dropdown menu를 작업하면서 시간이 많이 걸렸고, html 구조에 대한 반복연습이 필요할 것 같습니다.
- main 파트 주요사업에 있는 icon에 :hover event가 발생할 때 icon의 레이아웃을 흰색으로 변경하지 못했습니다.
  - (실제 사이트 개발자 도구에서도 확인할 수 없어서 작업하는 방법이 궁금합니다ㅠ\_ㅠ)
- main 파트 하단에 있는 뉴스(나눔스토리), 공지(알림마당) 타이틀에 배치된 더보기 버튼에 마우스를 올렸을 때 설명이 나올 수 있게 title을 추가 했습니다.
  - (실제 사이트는 마우스를 올렸을 때 설명 탭이 나오지 않았기 때문에 title을 추가하면 직관적으로 이해하기 쉬울 것 같습니다!)
- main 파트 하단 우측에 있는 알림마당 두번째 게시글 제목 말줄임을 작업하지 못했습니다.
  - (제목과 날짜인 `<span>`을 float로 작업하면 가능하겠지만 제가 작업한 상태에서 추가적으로 말줄임 효과를 주고 싶습니다!)

## 리팩토링

- `.gitignore`에 dist, .cache 폴더 추가
  - `node_modules`, `dist`, `.cache`
- `<div>` 태그를 semantic tag인 `<section>` 태그로 수정
  - `<header>`>div.inner => section.inner
  - `<main>`>div.container => section.container
- `<section>` 태그를 문맥을 살리기 위해 `<article>` 태그로 수정
  - `<main>`>section.main\_\_notice => article.main\_\_notice
- `main.service__img`에 hover event가 발생할 시 main_icon_hover.png로 변경
  - 개발자도구 > Sources탭 참고
- SCSS의 `@mixin` 기능으로 말줄임표 추가
  - `<main>` .news\_\_contents span.contents\_\_title--ellipsis
