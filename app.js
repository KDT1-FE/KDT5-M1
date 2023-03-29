const doodle = document.querySelector(".doodle");
const logIn = document.querySelector(".logIn")
const appsButton = document.querySelector('.apps-button');
const appsDropdown = document.querySelector('.apps-dropdown');
const drop = document.querySelector(".option-item");
const dropdownContent = document.querySelector(".dropdown-content");

doodle.addEventListener("click", function () {
    window.location.href = "https://www.google.com/doodles";
});

logIn.addEventListener("click", function () {
    window.location.href = "https://accounts.google.com/";
});

appsButton.addEventListener('click', () => {
  if (appsDropdown.style.display === 'block') {
    appsDropdown.style.display = 'none';
  } else {
    appsDropdown.style.display = 'block';
  }
});

drop.addEventListener("click", function() {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});

const change = document.querySelector("#change");
const body = document.querySelector("body");
const footer = document.querySelector("footer")
const header = document.querySelector("header")

change.addEventListener("click", function () {
    if(change.value === "어두운 테마: 사용 안함") {
        body.classList.add("body-night");
        footer.classList.add("footer-night")
        header.classList.add("header-night");
        change.value = "어두운 테마: 사용";
    } else {
        body.classList.remove("body-night");
        footer.classList.remove("footer-night");
        header.classList.remove("header-night");
        change.value = "어두운 테마: 사용 안함";
    }
});