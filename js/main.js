const toggleEl = document.getElementById('toggle');
const headBarEl = document.querySelector('.head-bar');

const formEl = toggleEl.querySelector('form');
const searchBtnEl = toggleEl.querySelector('.search-btn');

const recommandEl = headBarEl.querySelector('.recommand')


let cancelBtnEl;




//검색 아이콘 클릭 했을때
searchBtnEl.addEventListener('click', function handleSearchBtnClick() {

  //버튼 숨기고 검색창 너비 넓힘
  searchBtnEl.style.display = 'none';
  toggleEl.classList.add('isClicked', 'isCentered');
  formEl.classList.remove('search');
  formEl.classList.add('search-sScreen');

  // 취소버튼 만들고 toggle 태그 자식으로 넣을거임
  cancelBtnEl = createCancelButton();
  toggleEl.appendChild(cancelBtnEl);

  // 검색어추천 섹션 나타나게 할거임
    recommandEl.style.display = 'flex';
  setTimeout(() => {
    // 1초 후에 실행될 코드
    recommandEl.classList.add('recommand-transition');
  }, 90);
  

});


//검색어추천섹션만들기


//취소버튼 만들고 취소버튼을 클릭했을때는?
function createCancelButton() {
  const cancelBtnEl = document.createElement('button');
  cancelBtnEl.classList.add('cancelButton', 'btn-appear');
  cancelBtnEl.textContent = '취소';
  cancelBtnEl.addEventListener('click', handleCancelBtnClick);
  return cancelBtnEl;
}

//이렇게 취소버튼 눌렀을때 돌아가고싶음.
function handleCancelBtnClick() {
  //아이콘보이게하고 클래스 원상복구
  searchBtnEl.style.display = 'block';
  toggleEl.classList.remove('isClicked', 'isCentered');
  formEl.classList.remove('search-sScreen');
  formEl.classList.add('search');
  // 캔슬버튼 없앰
  cancelBtnEl.remove();

  recommandEl.classList.remove('recommand-transition');
  recommandEl.style.display = 'none';
}

const mediaQuery = window.matchMedia('(min-width: 992px)');

function handleMediaQueryChange(e) {
  if (e.matches) {
    // 웹 페이지의 너비가 992px 이상일 때 실행할 코드
    searchBtnEl.style.display = 'none';
    
  } else {
    // 웹 페이지의 너비가 992px 미만일 때 실행할 코드
    searchBtnEl.style.display = 'block';
  }
}
mediaQuery.addEventListener('change', handleMediaQueryChange);

// 페이지가 로드될 때 실행
handleMediaQueryChange(mediaQuery);


