### [사이트 레이아웃 클론 과제]
---

>제출 일자 : 23년 4월 5일   
작성자 : 김다슬

<br>

### :one: 원본 사이트 
---

### [어프어프](https://earpearp.com/index.html)

![image](/screenshots/earpearp_full.png)

<br>

### :two: 클론 사이트 
---
### [클론](https://beautiful-sunflower-e9dfb0.netlify.app/)

<br>

### :three: 사이트 선정 이유
---
어프어프는 'Object through different angle.' 이라는 슬로건을 목적으로 일상 속 사물을 다른 관점으로 바라볼 때 발생하는 다양한 시각들을 표현하고자 하는 휴대폰 케이스, 디지털 액세서리, 소품 등을 판매하는 브랜드입니다. 

평소에도 해당 브랜드를 좋아하며 사이트를 가끔 방문하는데 늘 사이트 디자인이 예쁘다고 생각했었습니다. 강의를 들으며 배운 것을 활용할 수 있을 것 같았고, 직접 만든다면 이런 느낌의 사이트를 만들어 보고 싶었기 때문에 선정하게 되었습니다. 

<br>

### :four: 구현한 부분
---
1. 상단 메뉴  
-원본 사이트의 display: table 구조를 그대로 사용해 구현했습니다.  
-마우스를 올리면 밑줄이 생기는 유틸 메뉴를 구현했습니다.    
-메뉴에 마우스를 올리면 색상이 바뀌고, 화살표 방향이 바뀌고,
하위 메뉴가 나타나도록 css로 구현했습니다. 
![image](/screenshots/header.png)  

2. 왼쪽 고정된 퀵 메뉴  
-첫 번째 전체 메뉴 버튼을 클릭하면 전체 메뉴가 왼쪽에서 나타나고, 닫기 버튼을 누르면 다시 왼쪽으로 사라지도록 구현했습니다.   
-두 번째 검색 메뉴 버튼을 클릭하면 입력할 수 있는 검색창이 나타나고,  
다시 버튼을 누르면 사라지도록 구현했습니다.
![image](/screenshots/quick_btns_search.png)
![image](/screenshots/total.png)   

3. 슬라이드   
-사이트 중앙의 슬라이드 부분을 swiper.js로 구현했습니다.  
-pagination 부분의 색상과 모양을 원본 사이트와 동일하게 구현했습니다.  
![image](/screenshots/slide.png)    

4. 화면에 고정된 버튼   
-클릭하면 화면의 제일 상단으로 이동할 수 있는 scroll up 버튼을 구현했습니다.  
-화면 우측 하단에 고정된 문의하기 버튼을 구현했습니다.  
![image](/screenshots/fixed.png)  

5. 상품 목록  
-상품 목록을 원본 사이트 레이아웃과 동일하게 구현했습니다.  
![image](/screenshots/product.png)  

6. footer  
-원본 사이트의 display: table 구조를 그대로 사용해 구현했습니다. 
![image](/screenshots/footer.png)

<br>

### :five: 아쉬운 부분
---
1. scss를 처음 해봐서 scss의 장점을 100% 활용하지 못한 것 같아 아쉽습니다.  
-처음이고 똑같은 구조로 만들려다 보니 너무 깊은 중첩을 하게 된 것 같습니다.
-SCSS에서의 BEM 방법론을 도입하려고 했지만 알 수 없는 오류+이해+시간부족으로 일단은 도입하지 않았습니다. 
      <details>
      <summary>시도했던 구조 예시(이후 해볼 예정)</summary>

      ```html
      <nav class="nav">
        <ul class="nav__menu">
          <li class="nav__item">
            <a class="nav__link"></a>
          </li>
          <li class="nav__item nav--active">
            <a class="nav__link"></a>
          </li>
        </ul>
      </nav>
      ```
      ```css
      .nav {
        ...
        &__menu {
          ...
        }
        &__item {
          ...
        }
        &__link {
          ...
        }
        &--active {
          ...
        }
      }
      ```
      </details>    

2. 원본 사이트와 1px 도 흔들리지 않게 똑같이 구현 하기 위해 왜 들어가 있는지 모르겠는 중간중간 들어가 있는 &nbsp 도 어쩔 수 없이 작성하게 되었습니다.  
3. flex와 grid가 익숙하지 않아 우선은 원본 사이트의 처음 접하게 된 display:table 구조로 그대로 구현했는데 flex나 grid 로도 구현해 보면 좋을 것 같습니다.
4. 원본 사이트는 반응형으로 구현되어 비율을 줄이거나 늘이면 설정된 값으로 변하는데 반응형에 대한 이해가 부족해 클론 한 사이트는 고정 너비 1500px 로 구현했습니다.  
5. 원본 사이트의 퀵 메뉴 search 버튼이 `<input type="image">`로 만들어져 있어 똑같은 구조로 만들어봤지만 버튼 이미지가 나타나지 않는 문제가 생겨 다른 방법으로 대체하게 되었습니다.     