
## 🌸KuKKa Web Page Clone Coding🌸 

## 배포 주소
-> 

## 원본 주소 
-> 

## 📌 유의사항 
-> 모든 디바이스의 최적화 되어있지 않습니다.


## 📜 프로젝트 소개
-> 


## 시작 가이드
### Requirements
For building and running the application you need:

- [Npm 9.2.0](https://www.npmjs.com/package/npm/v/9.2.0)


### Installation
``` bash
$ git clone git@github.com:hahahaday12/KDT5-M1.git
$ cd KDT0_KimHaEun
```

#### Frontend
```
$ cd KDT0_KimHaEun
$ npm install 
$ npm run start
```

---

## Stacks 🐈

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)


---
## 화면 구성 📺
| 메인 페이지  | 
| :-------------------------------------------: |
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/229595133-88099b01-e193-4c9a-a4f9-6cea660fc19c.png">| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/229595533-e157dbf9-6ca1-4e07-9b87-34a54effbccf.png">|
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/229596036-eac4b579-9244-4164-b114-05c0f69c7515.png">| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/229596510-4d6c4c4d-b9d9-44a0-8502-84e3b1518b0b.png">| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/229596751-8da5acbd-c802-40b7-bd6a-4e65684607af.png">| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/229597115-b8bbb480-8058-453e-9f7b-2bc7323dac59.png">|
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/229597479-5873cc82-86b4-4dfb-b6b3-a991399bbe01.png">|
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/229597699-898ae0fd-04f2-4245-906d-4e331ce911f5.png">|
---
## 🎈선택 요구사항🎈

- [ ] `<header>`, `<section>` 등 시멘틱 태그를 최대한 활용해보세요.
- [ ] 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.
- [ ] 부분적으로 BEM 방법론을 도입해보세요.
- [ ] JS가 필요한 부분은 되도록 생략하되 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [ ] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)
- [ ] SCSS 등의 CSS 전처리도구를 도입해보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.

---

## ✨ 요구사항 활용 ✨

### ⭐️ 1) `<header>`, `<section>` 등 시멘틱 태그를 최대한 활용해보세요.

<img width="437" alt="image" src="https://user-images.githubusercontent.com/101441685/229598172-e785b36e-bf73-4e38-abd4-7a71d68f2089.png">

-> 메인 페이지에 최상단에 있는 category 부분을 header 의 구역으로 잡았습니다. <br/>
-> 메인페이지 스크롤이 내려 가면서 바뀌는 색의 영역, 내용의 영역을 각각의 section 으로 잡았습니다. 따라,  총 7개의 section 구역으로 나누었습니다. 

### ⭐️ 2) 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.


<img width="437" alt="image" src="https://user-images.githubusercontent.com/101441685/229599788-00155963-33f0-4f0b-ba40-17862788954e.png">
-> header 와 main menu 등 수평정렬이 필요한 부분에서 flex 를 사용하였습니다. 

<img width="282" alt="image" src="https://user-images.githubusercontent.com/101441685/229601109-a7bbc2c6-8092-49ff-bdf5-4650fa9d1a41.png">
->  각각의 칸안에 있는 사진의 경우 grid 를 사용하였습니다. 

### ⭐️ 3) 부분적으로 BEM 방법론을 도입해보세요.

#### BEM 방법론 

**Block (블록)**
-> block(블록)은 페이지 전체 Element(요소)를 의미하거나 하위 Element(요소)를 감싸는 컨테이너를 의미한다. 블록끼리는 상호작용할 수 있지만, 우선순위나 계층이 없다.

**Element (요소)**
-> 블록의 하위 요소이다. 모든 요소는 상위 블록과 연결된다.

**Modifier (수정자)**
 -> Naming
수정자의 이름은 문자, 숫자, 대시(-) 및 밑줄(_)로 구성될 수 있다.
블럭이름--수정자이름 혹은 요소이름--수정자이름 형태로 작성한다.
수정자의 이름이 길거나 공백이 있다면 하나의 대시를 사용한다. 블럭이름--border-black



### ⭐️ 4) JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)


### ⭐️ 5) SCSS 등의 CSS 전처리도구를 도입해보세요.



### ⭐️ 6) SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.

---


##  🎇 느낀점 

-> 

-------



