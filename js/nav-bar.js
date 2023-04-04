const menuIcon = document.querySelector(".nav__bot .menu--onoff")
const menuDrop = document.querySelector(".nav__bot .menu--dropdown")
const searchIcon = document.querySelector(".nav__bot .search--onoff")
const searchDrop = document.querySelector(".nav__bot .search--dropdown")
const personIcon = document.querySelector(".nav__bot .person--onoff")
const personDrop = document.querySelector(".nav__bot .person--dropdown")

menuIcon.addEventListener("click", function() {
  if (menuDrop.style.display == "none") {
    menuDrop.style.display = "block";
    menuIcon.querySelector(".material-symbols-outlined").innerHTML = "cancel";
    searchDrop.style.display = "none";
    personDrop.style.display = "none";
    searchIcon.querySelector(".material-symbols-outlined").innerHTML = "search";
    personIcon.querySelector(".material-symbols-outlined").innerHTML = "person";
  } else {
    menuDrop.style.display = "none";
    menuIcon.querySelector(".material-symbols-outlined").innerHTML = "menu";
  }
})

searchIcon.addEventListener("click", function() {
  if (searchDrop.style.display == "none") {
    searchDrop.style.display = "block";
    searchIcon.querySelector(".material-symbols-outlined").innerHTML = "cancel";
    menuDrop.style.display = "none";
    personDrop.style.display = "none";
    menuIcon.querySelector(".material-symbols-outlined").innerHTML = "menu"
    personIcon.querySelector(".material-symbols-outlined").innerHTML = "person";
  } else {
    searchDrop.style.display = "none";
    searchIcon.querySelector(".material-symbols-outlined").innerHTML = "search";
  }
})

personIcon.addEventListener("click", function() {
  if (personDrop.style.display == "none") {
    personDrop.style.display = "block";
    personIcon.querySelector(".material-symbols-outlined").innerHTML = "cancel";
    menuDrop.style.display = "none";
    searchDrop.style.display = "none";
    menuIcon.querySelector(".material-symbols-outlined").innerHTML = "menu"
    searchIcon.querySelector(".material-symbols-outlined").innerHTML = "search"
  } else {
    personDrop.style.display = "none";
    personIcon.querySelector(".material-symbols-outlined").innerHTML = "person";
  }
})

const movieTitleHover = document.querySelectorAll(".movie--list")
const movieImage = document.querySelector("#movie-image-changes");

movieTitleHover.forEach(function(span) {
  span.addEventListener("mouseover", function(event) {
    movieImage.src = `./images/${event.target.innerText}.jpg`;
  })
})

const reservBtn = document.querySelector(".search--dropdown .inner > div button:first-child");
const customBtn = document.querySelector(".search--dropdown .inner > div button:last-child");
const searchBtn = document.querySelectorAll(".search--dropdown .inner > div button")

reservBtn.addEventListener("click", function(event) {
  event.target.classList.add("searchbtn--clicked")
  customBtn.classList.remove("searchbtn--clicked")
  if (reservBtn.classList.contains("searchbtn--clicked")) {
    movieImage.src = `./images/스즈메의 문단속.jpg`;
    movieTitleHover[0].innerText = "스즈메의 문단속"
    movieTitleHover[1].innerText = "더 퍼스트 슬램덩크"
    movieTitleHover[2].innerText = "던전 앤 드래곤 도적들의 명예"
    movieTitleHover[3].innerText = "해피 투게더 리마스터링"
    movieTitleHover[4].innerText = "패왕별희 디 오리지널"
  }
})

customBtn.addEventListener("click", function(event) {
  event.target.classList.add("searchbtn--clicked")
  reservBtn.classList.remove("searchbtn--clicked")
  if (customBtn.classList.contains("searchbtn--clicked")) {
    movieImage.src = `./images/아바타 물의 길.jpg`;
    movieTitleHover[0].innerText = "아바타 물의 길"
    movieTitleHover[1].innerText = "레미제라블"
    movieTitleHover[2].innerText = "더 퍼스트 슬램덩크"
    movieTitleHover[3].innerText = "스즈메의 문단속"
    movieTitleHover[4].innerText = "비긴 어게인"
  }
})

