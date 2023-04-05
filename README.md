# Kakao 웹페이지 클론코딩

### 제작기간 - 3월 27일 ~ 4월 6일
### 사용 기술
1. HTML
2. SCSS(Node-SASS)
3. Vanila-JS (라이브러리 사용 X)

### 주의사항
1. git에 node_modules 파일이 없음 (혹시 원본 프로젝트를 SCSS로 작업 시 npm install 혹은 yarn install 명령어 입력해야 함.)

### 개발 사항
1. PC 레이아웃 적용(반응형이 아니라서 뷰포트 줄어들 시 레이아웃 깨질 수 있음 -> 추후 개선 예정)

2. 스크롤 시 상단 메뉴가 자연스럽게 올라가며 없어지는 기능 구현

3. 컨텐츠 영역 왼쪽 배너도 스크롤 시 자연스럽게 따라와서 특정 구간에서 붙음(밑으로 내려올 시 부자연스럽게 특정 구간에 붙는 버그 발생! => 이 부분도 역시 개선해야 함)

4. 상단 메뉴 클릭시 서브메뉴 나타나는 기능 구현

5. 실제 홈페이지로 갈 수 있게 모달창에 링크 구현

6. 실제 홈페이지와 최대한 유사하게 만드려고 스타일링은 원본 코드 참조

7. 자바스크립트의 경우에는 모두 직접 구현

### 개선 사항
1. 반응형 레이아웃 적용
2. 자바스크립트에서 로직이 겹치는 함수 리팩토링 필요 (header.js 참고)
3. SCSS 코드가 지저분해서 겹치는 속성 리팩토링 필요
4. 기타 실제 홈페이지와 똑같은 기능 추가 필요