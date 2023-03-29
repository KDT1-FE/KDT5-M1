# 👀 자신이 원하는 사이트 레이아웃 클론

원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.  
평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.  
과제 수행 및 리뷰 기간은 별도 공지를 참고하세요!

## 과제 수행 및 제출 방법

1. 현재 저장소를 로컬에 클론(Clone)합니다.
1. 자신의 본명으로 브랜치를 생성합니다.(구분 가능하도록 본명을 꼭 파스칼케이스로 표시하세요, `git branch KDT0_ParkYoungWoong`)
1. 자신의 본명 브랜치에서 과제를 수행합니다.
1. 과제 수행이 완료되면, 자신의 본명 브랜치를 원격 저장소에 푸시(Push)합니다.(`main` 브랜치에 푸시하지 않도록 꼭 주의하세요, `git push origin KDT0_ParkYoungWoong`)
1. 저장소에서 `main` 브랜치를 대상으로 Pull Request 생성하면, 과제 제출이 완료됩니다!(E.g, `main` <== `KDT0_ParkYoungWoong`)

- `main` 혹은 다른 사람의 브랜치로 절대 병합하지 않도록 주의하세요!
- Pull Request에서 보이는 설명을 다른 사람들이 이해하기 쉽도록 꼼꼼하게 작성하세요!
- Pull Request에서 과제 제출 후 절대 병합(Merge)하지 않도록 주의하세요!
- 과제 수행 및 제출 과정에서 문제가 발생한 경우, 바로 담당 멘토나 강사에서 얘기하세요!

## 필수 요구사항

- [ ] 과제에 대한 설명을 포함한 `README.md` 파일을 제공하세요!
- [ ] 과제 결과와 비교할 수 있는 실제 사이트(페이지)의 주소를 명시하세요!
- [ ] 과정에서 사용한 프로젝트 폴더/파일이 모두 포함돼야 합니다, 일부 파일만 제출하지 마세요!
- [ ] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

## 선택 요구사항

- [ ] `<header>`, `<section>` 등 시멘틱 태그를 최대한 활용해보세요.
- [ ] 실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.
- [ ] 부분적으로 BEM 방법론을 도입해보세요.
- [ ] JS가 필요한 부분은 되도록 생략하되 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [ ] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)
- [ ] SCSS 등의 CSS 전처리도구를 도입해보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.

## 손쉬운 이미지 추출 방법

사이트 클론에 필요한 이미지를 좀 더 쉽게 추출하기 위해서 Chrome 확장 프로그램인 [Image Downloader](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj?hl=ko)를 사용하세요.

1. 원하는 사이트 접속
1. Image Downloader 확장 프로그램 실행
1. 다운로드 원하는 이미지 선택
1. 서브 폴더 이름(Save to subfolder) 명시
1. 다운로드!
   </br></br>

# todo

- 올바른 치료를 진행합니다. 섹션
- 공지 이벤트(swiper)
- SNS
- Footer
- floatings
  </br></br>

# 수정사항

- 검색input요소 외부 클릭시 닫히기.
- 검색 input요소가 active한 경우 header의 bgc가 흰색으로 유지
  </br></br>

# 원본페이지와 차이점

- favicon 추가
- google font에 'NanumSquareNeo' 없어서 'Nanum Gothic'사용
- search 기능x, form태그 사용하지 않고 input으로만 구성
- 원래 홈페이지에서는 동영상이 header로 인해 밀려나 아랫부분이 잘림. 16:9의 영상을 온전히 보여주기 위해 header의 배경화면을 transparent로 수정. 마우스 hover 시, 스크롤 내릴시 배경화면 #fff으로 변화
  </br></br>

# 질문

- video ratio
