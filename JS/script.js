//ClickEvent
const list = document.querySelectorAll(
  '.link-section > .material-symbols-outlined'
);

function activeClicked() {
  list.forEach((item) => item.classList.remove('noHover'));
  list.forEach((item) => item.classList.remove('clicked'));
  this.classList.add('noHover');
  this.classList.add('clicked');
}
list.forEach((item) => item.addEventListener('click', activeClicked));

//PageLoad Focus
window.addEventListener('pageshow', () => {
  list[0].classList.add('noHover');
  list[0].classList.add('clicked');
});
