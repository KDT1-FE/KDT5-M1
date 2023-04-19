# FE_이정환 1차 과제

- html, css에서 배운 내용을 중점으로 클론 코딩 시작

- 새로 써본 요소 : vdieo, select, table

## html 구조
```
<!DOCTYPE html>

<!--웹브라우저 언어 설정 -->
<html lang="ko">

<head>
  <!--웹브라우저 인코딩 -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--타이틀 제목 -->
  <title>test_LINE Plus Corporation | 홈</title>

  <!-- 타이틀 옆 아이콘 favorites icon을 줄여서 favicon이라고 불림
  <link rel="shortcut icon" href="./favicon.ico" /> 아이콘 파일시 링크 설정 코딩
  <link rel="cut icon" href="./favicon.png" /> png 파일시 링크 설정 코딩.
  ico파일과 png파일의 차이 ico파일은 여러 사이즈의 아이콘을 넣어두고 활용이 가능하지만 
    png 파일은 그것이 불가능 하기 때문에 각 필요한 사이즈를 모두 선언해줘야한다
    <link rel="icon" href="favicon-16.png" sizes="16x16">
    <link rel="icon" href="favicon-32.png" sizes="32x32">
    <link rel="icon" href="favicon-48.png" sizes="48x48">
    <link rel="icon" href="favicon-64.png" sizes="64x64">
    <link rel="icon" href="favicon-128.png" sizes="128x128">  
  png 파일 설정시 위와 같이 사이즈 별로 적용해줘야함. -->
  <link rel="shortcut icon" href="favicon_192.png" />

  <!--오픈 그래프 : 웹페이지가 소셜 미디어(페이스북, 카카오톡 등)로 공유될 떄 우선적으로 활용되는 정보를 지정 -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="LINE Plus Corporation" />
  <meta property="og:title" content="LINE Plus Corporation" />
  <meta property="og:description" content="모바일 플랫폼 LINE 개발 및 글로벌 사업 거점으로, 사용자의 일상을 지원하는 다양한 클로벌 서비스를 제공하고 있습니다." />
  <meta property="og:image" content="line_icon_200v3.png" />
  <meta property="og:url" content="https://linepluscorp.com/" />

  <!--css속성 초기화 reset.css cdn 다운-->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!--구글 폰트 다운 fonts.google.com -->
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">

  <!--구글 멀터리얼 아이콘 사용 가능하게 해주는 코딩 -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

  <!--GSAP(The GreenSock Animation Platform)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다. 
    ScrollToPlugin은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
    integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ=="
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"
    integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q=="
    crossorigin="anonymous"></script>

  <!--css 폴더 연걸 -->
  <link rel="stylesheet" href="./css/main.css" />



</head>

<body>
  <!--header -->
  <header>
    <div class="inner">
      <ul class="main-menu">
        <li class="item">
          <a href="/" class="logo">
            <img src="./images/logo_h1_v2.png" alt="Line">
          </a>
        </li>
        <li class="item">
          <div class="item__name">회사소개</div>
          <div class="item__contents">
            <div class="contents__menu">
              <ul class="inner">
                <li>
                  <h4>회사소개</h4>
                </li>
                <li>
                  <h4>LINE's Philosophy</h4>
                  <p>LINE STYLE</p>
                  <p>LINE CODe</p>
                </li>
                <li>
                  <h4>LINE그룹 행동 규범</h4>
                </li>
                <li>
                  <h4>공고</h4>
                </li>
                <li>
                  <h4>Contact</h4>
                </li>
                <li>
                  <h4>LINE로고 사용 가이드</h4>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="item__name">사업</div>
          <div class="item__contents">
            <div class="contents__menu">
              <ul class="inner">
                <li>
                  <h4>서비스</h4>
                </li>
                <li>
                  <h4>캐릭터 사업</h4>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="item__name">홍보</div>
          <div class="item__contents">
            <div class="contents__menu">
              <ul class ="inner">
                <li>
                  <h4>Global News</h4>
                </li>
                <li>
                  <h4>기사 및 보도자료</h4>
                </li>
                <li>
                  <h4>Blog & SNS</h4>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="item__name">채용</div>
          <div class="item__contents">
            <div class="contents__menu"></div>
          </div>
        </li>
        <div class="language">
          <select class="languageMenu">languageMenu
            <option value="한국어">한국어</option>
            <option value="English">English</option>
            <option value="日本語">日本語</option>
            <option value="中文(繁體)">中文(繁體)</option>
            <option value="中文(简体)">中文(简体)</option>
            <option value="ภาษาไทย">ภาษาไทย</option>
          </select>
          <div class="mdSiteMap">SITEMAP</div>

        </div>
      </ul>
    </div>
  </header>

  <!-- container -->
  <section>
    <div class="container">
      <div class="Lycontainer">
        <div class="article__top">
          <section class="content01">
            <video src="https://vos.line-scdn.net/linecorp/LINE_CTD_SITE_FINAL_U10MB.mp4" class="mvClip" muted autoplay
              loop></video>
            <div class="mvTextBox">
              <p class="mvText">CLOSING THE DISTANCE</p>
              <a href="/" class="mvLinkSub">
                <p class = "mvLinkSubTxt">LINE's Philosophy</p>
              </a>
            </div>
          </section>
          <section class="content02">
            <div class="Md01Inner">
              <div class="MdCMN03Header">
                <h2 class="MdCMN03Tt1">NEWS ROOM</h2>
                <a href="javascriptvoid(0)" class="more">more</a>
              </div>
              <div class="Md02NewsList">
                <table class = Md02NewsListTb>
                  <tr>
                    <th>
                      <a href="https://linepluscorp.com/pr/news/ko/2023/4520" class="md02Item">
                        <h3 class="md02Tt1">라인 넥스트, 블록체인 기반 ‘도시 월렛(DOSI Wallet)’ 및 ‘라인 비트맥스 월렛(LINE BITMAX Wallet)’ 통합…전 세계
                          360만명 유저 확보</h3>
                        <span class="md03Item">2023.03.07 ALL</span>
                      </a>
                    </th>
                    <th>
                      <a href="https://linepluscorp.com/pr/news/ko/2023/4515" class="md02Item">
                        <h3 class="md02Tt1">라인스튜디오, 모바일 게임 ‘여신강림: 매치3 퍼즐’ 국내에 이어 일본, 대만, 태국에서 글로벌 사전예약 오픈</h3>
                        <span class="md03Item">2023.03.03 ALL</span>
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <a href="https://linepluscorp.com/pr/news/ko/2023/4520" class="md02Item">
                        <h3 class="md02Tt1">라인 넥스트, 블록체인 기반 ‘도시 월렛(DOSI Wallet)’ 및 ‘라인 비트맥스 월렛(LINE BITMAX Wallet)’ 통합…전 세계
                          360만명 유저 확보</h3>
                        <span class="md03Item">2023.03.07 ALL</span>
                      </a>
                    </th>
                    <th>
                      <a href="https://linepluscorp.com/pr/news/ko/2023/4515" class="md02Item">
                        <h3 class="md02Tt1">라인스튜디오, 모바일 게임 ‘여신강림: 매치3 퍼즐’ 국내에 이어 일본, 대만, 태국에서 글로벌 사전예약 오픈</h3>
                        <span class="md03Item">2023.03.03 ALL</span>
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <a href="https://linepluscorp.com/pr/news/ko/2023/4520" class="md02Item">
                        <h3 class="md02Tt1">라인 넥스트, 블록체인 기반 ‘도시 월렛(DOSI Wallet)’ 및 ‘라인 비트맥스 월렛(LINE BITMAX Wallet)’ 통합…전 세계
                          360만명 유저 확보</h3>
                        <span class="md03Item">2023.03.07 ALL</span>
                      </a>
                    </th>
                    <th>
                      <a href="https://linepluscorp.com/pr/news/ko/2023/4515" class="md02Item">
                        <h3 class="md02Tt1">라인스튜디오, 모바일 게임 ‘여신강림: 매치3 퍼즐’ 국내에 이어 일본, 대만, 태국에서 글로벌 사전예약 오픈</h3>
                        <span class="md03Item">2023.03.03 ALL</span>
                      </a>
                    </th>
                  </tr>
               </table>
              </div>
            </div>
          </section>
          <section class="content03">
            <div class="content03Inner">
              <div class="Md04InfoList">
                <a href="https://partners.line.me/view/ko/main" class="md04Item">
                  <h3 class="md04Tt1">비즈니스 제휴 문의</h3>
                  <p class="md04txt">LINE은 사용자들의 커뮤니케이션을 더욱 즐겁게 만들어줄 파트너 기업을 모집합니다.</p>
                </a>
                <a href="https://partners.line.me/view/ko/main" class="md04Item">
                  <h3 class="md04Tt1">기술정보</h3>
                  <p class="md04txt">LINE의 개발자들은 다양한 서비스를 개발하며, 기술적 도전을 매일 경험하고 있습니다.</p>
                </a>
                <a href="https://partners.line.me/view/ko/main" class="md04Item">
                  <h3 class="md04Tt1">채용공고</h3>
                  <p class="md04txt">전 세계 인재들과 함께 내 커리어를 level up하고 싶다면 지금 LINE에 조인하세요!</p>
                </a>
                <a href="https://partners.line.me/view/ko/main" class="md04Item">
                  <h3 class="md04Tt1">캐릭터 사업</h3>
                  <p class="md04txt">메신저 속 LINE FRIENDS의 다양한 제품들은 물론, 특별한 경험도 선사합니다.</p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    
    <!-- footer -->
    <footer class="footer">
      <div class="MdFootNav">
        <p>@LINE Corporation</p>
        <ul class="bottomLink">
          <li><a href="javascript:void(0)">개인정보처리방침</a></li>
          <li><a href="javascript:void(0)">LINE Partners</a></li>
          <li><a href="javascript:void(0)">Contact</a></li>
        </ul>
        <div class="site">
          <!--select 태그로 family site 만들기 -->
          <select class="siteMove" onchange="javascript: window.open(value, '_blank');">selectSite
            <option value="selectSite">selectSite</option>
            <option value="http://www.naver.com">Naver</option>
            <option value="http://www.google.com">Google</option>
            <option value="https://github.com/">GitHube</option>
            <option value="https://www.notion.so/ko-kr/product">Notion</option>
          </select>
        </div>
      </div>
    </footer>
</body>

</html>

```



## css구조
```
/* common */
body {
  font-size: 14px;
  font-size: .875rem;
  line-height: 1.4;
  background-color: #fff;
}
 
img {
  display : block;
}

a {
  text-decoration: none;
  color:rgb(25, 25, 25);
}

.inner {
  margin: 0 auto;
}

table {
  text-align: left;
  text-overflow: hidden;
  table-layout: fixed;
}

table th {
  height: 100px;
}

/* header */
header {
  width: 100%;
  position: fixed;
  z-index: 1;
  /* background-color: blue; */
  background-color: rgba(255,255,255,095);
}

header .inner {
  margin: 0 auto;
  left: 0;
  right: 0;
}

header .inner .main-menu {
  display: flex;
  position: relative;
  z-index: 1;
  width: 1200px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
}

header .inner .main-menu .item {

}

header .inner .main-menu .item a.logo img {
  margin:0 70px;
  width: 70px;
  height: 25px;
  top: 0;
  left: 0;
  right: 0;
  cursor: pointer;
}

header .inner .main-menu .item .item__name {
  display: block;
  padding: 20px 25px;
  cursor: pointer;
  font-size: 18px;
  line-height: 44px;
  font-weight: 400;
  font-family: nbgweb, NanumGothic, 나눔고딕, "Malgun Gothic", 맑은고딕, "Apple SD Gothic Neo", Meiryo, Dotum, 돋움, sans-serif;
 }

 header .inner .main-menu .item:hover .item__name {
  color: #06C755;
 }

 header .inner .main-menu .item .item__contents {
  width: 100%;
  left: 0;
  right: 0;
  position: fixed;
  display: none;
 }

/* 3번째 아이템 메뉴에 호버했을시 화면 호출 */
 header .inner .main-menu .item:hover:nth-child(-n+4) .item__contents {
  background-color: rgba(255,255,255,.7);
  height: 200px;
  width: 100%;
  top: 80px;
  display: block;
 }

 header .inner .main-menu .item .item__contents .content__menu {
  
 }

 header .inner .main-menu .item .item__contents .contents__menu > ul {
  display: flex;
  width: 1200px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
 }

 header .inner .main-menu .item .item__contents .contents__menu > ul > li {
 width: 200px;
 }

 header .inner .main-menu .item .item__contents .contents__menu > ul > li h4 {
  padding: 3px 0 12px 0;
  font-size: 18px;
  color: #111;
 }

 header .inner .main-menu .item .item__contents .contents__menu > ul > li h4:hover {
  color: green;
  cursor: pointer;
 }

 header .inner .main-menu .item .item__contents .contents__menu > ul > li p {
  padding: 5px 0;
  font-size: 15px;
  color: #999;
}

 header .inner .main-menu .item .item__contents .contents__menu > ul > li p:hover {
  color: green;
  cursor: pointer;
 }

 header .inner .main-menu .language .languageMenu {
  color: rgb(173,173,173);
  display: block;
  cursor: pointer;
  right: 0;
  float: right;
  position: absolute;
 }

 header .inner .main-menu .mdSiteMap {
  color: rgb(173,173,173);
  display: block;
  cursor: pointer;
  right: 50px;
  float: right;
  position: absolute;
 }

 header .inner .main-menu .language {

 }

 header .inner .main-menu .language .languageMenu {
  width: 110px;
  height: 40px;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  background-color: rgba(255,255,255,095);
  font-size: 17px;
  text-align: center;
  position: absolute;
  margin: auto 0;
  right: 0;
  bottom: 20px;
 }

 header .inner .main-menu .mdSiteMap {
  display: block;
  cursor : pointer;
  right: 150px;
  font-size: 17px;
  bottom: 25px;
 }

 /* container */
 .container {
  
}

 .container .Lycontainer {

 }

 .container .Lycontainer .article__top {

 }

 .container .Lycontainer .article__top .content01 {
  position: relative;

 }


 .container .Lycontainer .article__top .content01 video.mvClip {
  margin: auto;
  position: absolute;
  width: 100%;
  height: 620px;
  top: 80px;
  left: 0;
  right: 0;
  object-fit: cover;
 }

 .container .Lycontainer .article__top .content01 .mvTextBox {

 }

 .container .Lycontainer .article__top .content01 .mvTextBox .mvText {
  position: absolute;
  width: 100%;
  top: 330px;
  text-align: center;
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  font-family: "LINESeedSans","Helvetica Neue",Helvetica,Arial,"NanumGothic","Malgun Gothic",sans-serif;
}

 .container .Lycontainer .article__top .content01 .mvTextBox .mvLinkSub {
  position: absolute;
  width: 100%;
  width: 214px;
  height: 45px;
  margin: auto;
  left: 0;
  right: 0;
  top: 430px;
  border: 1px solid #fff;
  border-radius: 22px;

 }

 .container .Lycontainer .article__top .content01 .mvTextBox .mvLinkSub .mvLinkSubTxt {
  font-size: 1.125rem;
  text-align: center;
  color: #fff;
  line-height: 43px;
 }

 .container .Lycontainer .article__top .content02 {
  display: block;
  padding: 80px;
  top: 700px;
  left: 0;
  right: 0;
  position: relative;
  height: 400px;
 }

 .container .Lycontainer .article__top .content02 .Md01Inner{
  width: 1000px;
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
 }

 .container .Lycontainer .article__top .content02 .Md01Inner .MdCMN03Header {
  
 }

 .container .Lycontainer .article__top .content02 .Md01Inner .MdCMN03Header .MdCMN03Tt1 {
  display: block;
  height: 80px;
  font-weight: 400px;
  font-size: 36px;
  text-align: left;
  color: rgb(25, 25, 25);
  align-items: center;
 }

 .container .Lycontainer .article__top .content02 .Md01Inner .MdCMN03Header > a.more {
  bottom: 18px;
  color: rgb(119, 119, 119);
  cursor: pointer;
  font-size: 14px;
  right: 0;
  position: absolute;
  
 }
 
 .container .Lycontainer .article__top .content02 .Md01Inner .Md02NewsList {

 }

 .container .Lycontainer .article__top .content02 .Md01Inner .Md02NewsList .Md02NewsListTb {
  width: 100%;
  position: absolute;

 }

 .container .Lycontainer .article__top .content02 .Md01Inner .Md02NewsList .Md02NewsListTb a {
  text-decoration: none;
 }

 .container .Lycontainer .article__top .content02 .Md01Inner .Md02NewsList .Md02NewsListTb .md02Tt1 {
  font-size: 16px;
  color:rgb(25, 25, 25);
 }

 .container .Lycontainer .article__top .content02 .Md01Inner .Md02NewsList .Md02NewsListTb .md03Item { 
  font-size: 15px;
  color: #06C755;
  margin: 0;
  bottom: 0;
 }

 .container .Lycontainer .article__top .content03 {
  position: relative;
  top: 700px;
  left: 0;
  right: 0;
 }

 .container .Lycontainer .article__top .content03 .content03Inner {
  position: absolute;
  width: 100%;
 }

 .container .Lycontainer .article__top .content03 .content03Inner .Md04InfoList {
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  width: 1300px;
 }

 .container .Lycontainer .article__top .content03 .content03Inner .Md04InfoList .md04Item {
  display: block;
  margin: calc(60 / 1120 * 100%);
  vertical-align: top;
  text-decoration: none;
 }

 .container .Lycontainer .article__top .content03 .content03Inner .Md04InfoList .md04Item .md04Tt1{
  cursor: pointer;
  font-size: 18px;
  margin-top: 0;
  top: 0;
  margin: calc(60 / 1120 * 100%);
  color: #111;
 }

 .container .Lycontainer .article__top .content03 .content03Inner .Md04InfoList .md04Item .md04txt {
  cursor: pointer;
  margin-top: 0;
  top: 0;
  margin: calc(60 / 1120 * 100%);
  color: #777;
}

/* footer */

footer {
  position: relative;
  top: 1200px;
  width: 100%;
  height: 80px;
}

footer .MdFootNav {
  width: 1200px;
  display: flex;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
}

footer .MdFootNav p {
  padding-left: 30px;
}

footer .MdFootNav .bottomLink {
  display: flex;
  top: 20px;
}

footer .MdFootNav .bottomLink li {

}

footer .MdFootNav .bottomLink li a {
  margin: 0 20px;
}

footer .MdFootNav .site .siteMove {
  width: 150px;
  height: 40px;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  background-color: rgba(255,255,255,095);
  font-size: 17px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
}
```
