## 실제 사이트 페이지

[SNC동물메디컬센터](http://www.sncamc.co.kr/)
</br></br>

## 결과물

[과제결과물](https://fastcampus-kdt-5-m1-pzws.vercel.app/)
</br></br>

## 원본과의 차이점

| 원본                                                                                                                                                                                                                    | 과제                                                                    | 추가 설명                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| favicon 없음                                                                                                                                                                                                            | favicon 추가                                                            |
| 반응형                                                                                                                                                                                                                  | 반응형 x                                                                |
| 스크롤바 있음                                                                                                                                                                                                           | 스크롤바 없음                                                           |                                                                                                 |
| 폰트 'NanumSquareNeo'                                                                                                                                                                                                   | 폰트 'Nanum Gothic'                                                     | 구글폰트에 없음                                                                                 |
| 다양한 font-weight 사용                                                                                                                                                                                                 | 400과 700으로만 진행                                                    | 구글폰트에 없음                                                                                 |
| header 불투명                                                                                                                                                                                                           | header가 투명하다가 hover, scroll 위치에 따라 불투명하게                | 원래 홈페이지에서는 동영상이 header로 인해 밀려나 영상의 아랫부분이 한 스크린안에 들어오지 않음 |
| section별 높이가 다름                                                                                                                                                                                                   | 섹션별 height가 header 높이를 포함하여 100vh가 되도록                   |
|                                                                                                                                                                                                                         | 메인화면에서 아래로 내려가는 화살표 추가                                | 바로 아래 섹션으로 이동                                                                         |
| a 태그 정상 작동 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | a 태그 대부분 비활성화, 일부 a태그 사용하지 않고 cursor: pointer로 대체 |                                                                                                 |
| floating아이콘 opacity: 1                                                                                                                                                                                               | opacity: 0.3                                                            | 컨텐츠를 너무 가림                                                                              |
| swiper 정상작동                                                                                                                                                                                                         | swiper 진행 x                                                           |                                                                                                 |

- <header>, <section> 등 시멘틱 태그를 최대한 활용.
- BEM, 플렉스박스 최대한 활용
  </br></br>

## 질문

- 검색 input 요소 외부 클릭시 검색 닫힘
