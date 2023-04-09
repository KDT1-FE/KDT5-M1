//  헤더 부분의 메인 메뉴들에 마우스를 오버하는 동안 풀드랍 되게 하는 코드
const menu = document.querySelectorAll('.main_menu a');
const mouseOut = document.querySelector('.main_menu_items_wrap');

menu.forEach((menu) => {
  menu.addEventListener('mouseover', () => { 
  mouseOut.classList.add('active');
  });
});
mouseOut.addEventListener('mouseleave', () => { 
  mouseOut.classList.remove('active');
});



// 마우스 클릭 하면 서브 메뉴바가 열리고 다시 누르면 닫히는 코드
const mainMenu = document.querySelector('.home_main_menu');
const subMenu = document.querySelector('.home_sub_menu');

mainMenu.addEventListener('click', ()=> {
  subMenu.classList.toggle('open');
});


const mainMenu2 = document.querySelector('.home_main_menu2');
const subMenu2 = document.querySelector('.home_sub_menu2');

mainMenu2.addEventListener('click', ()=> {
  subMenu2.classList.toggle('open');
});