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