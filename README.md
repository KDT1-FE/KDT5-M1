# 💳 뱅크샐러드 클론코딩

### [배포 완료된 클론 사이트](https://banksalad-clonecoding.netlify.app/)

### [실제 Banksalad 사이트](https://www.banksalad.com/)

<br>
<br>

# 📂 파일 구조

```
KDT5-M1
  index.html
  favicon.ico
  README.md
  images
  js
    main.js
  css
    index.css
```

<br>
<br>

# 👓 과제 진행 방식

1. 전체 페이지를 Nav부터 Footer까지 총 9개의 Section으로 구분
2. 구분한 9개의 section을 위에서부터 아래로 작업
3. 과제의 본질에 충실하기 위해 최대한 HTML&CSS로만 작업
4. JS 사용은 Swiper, Button Event에 사용
5. 최종 작업 후 코드 간결화 작업

<br>
<br>

# ❗️ 섹션별 특이사항

## nav

- position: fixed로 상단에 고정
- 두가지 레이아웃으로 구분하여 코드의 중복을 피함

## rankingSection

- SwiperJS로 vertical swiper 구현
- CSS hover와 JS mouseover로 카드 목록 구현, autoplay stop

## bannerSection

- SwiperJS로 horizontal swiper 구현
- button으로 banner 이동 구현

## pickedSection

- button에 따라 JS 배열에 저장해놓은 데이터를 뿌림
- 해당 container 클릭 시 외부 링크로 연결
  <br>
  <br>

# 🔥 셀프 피드백

1. CSS Flex, Grid의 활용을 충분히 못했고, 레거시 코드의 참조가 잦았다.
2. CSS, JS를 Section별 모듈화하지 못하였다.
3. CSS 전처리도구 활용능력이 부족하여 시도에 실패했다.
4. 리팩토링에 충분한 시간을 할당하지 못했다.
