const appsButton = document.querySelector('.apps-button');
const appsDropdown = document.querySelector('.apps-dropdown');
const drop = document.querySelector(".option-item");
const dropdownContent = document.querySelector(".dropdown-content");

appsButton.addEventListener('click', () => {
  if (appsDropdown.style.display === 'block') {
    appsDropdown.style.display = 'none';
  } else {
    appsDropdown.style.display = 'block';
  }
});

document.addEventListener("click", function (e) {
  if (!appsButton.contains(e.target)) {
    appsDropdown.style.display = 'none';
  }
})

drop.addEventListener("click", function() {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});

document.addEventListener("click", function (e) {
  if (!drop.contains(e.target)) {
    dropdownContent.style.display = 'none';
  }
});

const dark= document.querySelector(".dark-mode");

const body = document.querySelector("body");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const sun = document.querySelector(".sun");

dark.addEventListener("click", function () {
  const change = document.querySelector("#change");
    if(change.value === "어두운 테마: 사용 안함") {
        body.classList.add("body-night");
        footer.classList.add("footer-night")
        header.classList.add("header-night");
        change.value = "어두운 테마: 사용";
        document.querySelector('.material-icons.sun').textContent = 'dark_mode';
    } else {
        body.classList.remove("body-night");
        footer.classList.remove("footer-night");
        header.classList.remove("header-night");
        change.value = "어두운 테마: 사용 안함";
        document.querySelector('.material-icons.sun').textContent = 'light_mode';
    }
});
