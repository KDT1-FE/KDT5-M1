/* appsDropdown */
const appsButton = document.querySelector('.apps-button');
const appsDropdown = document.querySelector('.apps-dropdown');

appsButton.addEventListener('click', e => {
  e.stopPropagation();
  if(appsDropdown.classList.contains('show')) {
    hide();
  } else {
    show();
  }
});

appsDropdown.addEventListener('click', e => {
  e.stopPropagation();
})

window.addEventListener('click', hide);

function show () {
  appsDropdown.classList.add('show');
};
function hide () {
  appsDropdown.classList.remove('show');
}

/* footer_dropDown */
const drop = document.querySelector('.option-item');
const dropdownContent = document.querySelector('.dropdown-content');

drop.addEventListener('click', e => {
  e.stopPropagation();
  if(dropdownContent.classList.contains('show-item')) {
    footerHide();
  } else {
    footerShow();
  }
});

dropdownContent.addEventListener('click', e => {
  e.stopPropagation();
});

window.addEventListener('click', footerHide);

function footerShow () {
  dropdownContent.classList.add('show-item');
};
function footerHide () {
  dropdownContent.classList.remove('show-item');
};

/* Dark Mode */
const dark= document.querySelector('.dark-mode');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const sun = document.querySelector('.sun');

dark.addEventListener('click', function () {
  const change = document.querySelector('#change');
    if(change.value === '어두운 테마: 사용 안함') {
        add();
        change.value = '어두운 테마: 사용';
        document.querySelector('.material-icons.sun').textContent = 'dark_mode';
    } else {
        remove();
        change.value = '어두운 테마: 사용 안함';
        document.querySelector('.material-icons.sun').textContent = 'light_mode';
    }
});


function add () {
  body.classList.add('body-night');
  footer.classList.add('footer-night')
  header.classList.add('header-night');
};
function remove () {
  body.classList.remove('body-night');
        footer.classList.remove('footer-night');
        header.classList.remove('header-night');
};