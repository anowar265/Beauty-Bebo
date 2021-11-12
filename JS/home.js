let images = [
  "https://www.beautybebo.com/pub/media/ads/homepage_slider.png",
  "https://www.beautybebo.com/pub/media/ads/vega_1.png",
  "https://www.beautybebo.com/pub/media/ads/mamaearth_diwali.png",
];

let parent = document.getElementById("home_slide_show");
function startslideshow() {
  let counter = 0;
  let img = document.createElement("img");
  img.src = images[counter];
  img.setAttribute("class", "slide_img");
  parent.append(img);
  counter++;

  setInterval(function () {
    parent.innerHTML = "";
    if (counter === images.length) {
      counter = 0;
    }
    var img = document.createElement("img");
    img.src = images[counter];
    img.setAttribute("class", "slide_img");
    parent.append(img);
    counter++;
  }, 2000);
}

startslideshow();

let readMoreBtn = document.querySelector(".read-more-btn");
let text = document.querySelector(".text");
//console.log(readMoreBtn.textContent);
readMoreBtn.addEventListener("click", function (e) {
  text.classList.toggle("show_more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});
let reg = document.getElementById("reg");
let reg_name = reg.innerHTML;
//console.log(reg_name);

if (
  localStorage.getItem("fname") !== null &&
  JSON.parse(localStorage.getItem("fanme") !== "")
) {
  // let reg = document.getElementById("reg");
  reg_name = JSON.parse(localStorage.getItem("fname"));
  reg.innerHTML = reg_name;
}
console.log(reg_name);
if (reg_name == " My Account ") {
  //console.log("here");
  function menuToggle() {
    let toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }
} else {
  //console.log("there");
  function menuToggle() {
    let toggleUpdatedMenu = document.querySelector(".updated_menu");
    toggleUpdatedMenu.classList.toggle("active");
  }
}

// function menuToggle() {
//   const toggleMenu = document.querySelector(".menu");
//   toggleMenu.classList.toggle("active");
// }

function navToggle() {
  const toggleNav = document.querySelector(".navigation_bar");
  toggleNav.classList.toggle("active");
}

function navTogglenot() {
  const toggleNav = document.querySelector(".navigation_bar");
  toggleNav.classList.toggle("active");
}

function navSkinToggle() {
  const toggleNav = document.querySelector(".navigation_bar_skin");
  toggleNav.classList.toggle("active");
}

function navSkinTogglenot() {
  const toggleNav = document.querySelector(".navigation_bar_skin");
  toggleNav.classList.toggle("active");
}
function navHairToggle() {
  const toggleNav = document.querySelector(".navigation_bar_hair");
  toggleNav.classList.toggle("active");
}

function navHairTogglenot() {
  const toggleNav = document.querySelector(".navigation_bar_hair");
  toggleNav.classList.toggle("active");
}

function navPersonalCareToggle() {
  const toggleNav = document.querySelector(".navigation_bar_personal_care");
  toggleNav.classList.toggle("active");
}

function navPersonalCareTogglenot() {
  const toggleNav = document.querySelector(".navigation_bar_personal_care");
  toggleNav.classList.toggle("active");
}

function navMomToggle() {
  const toggleNav = document.querySelector(".navigation_bar_mom");
  toggleNav.classList.toggle("active");
}

function navMomTogglenot() {
  const toggleNav = document.querySelector(".navigation_bar_mom");
  toggleNav.classList.toggle("active");
}

function navAyurvedaToggle() {
  const toggleAyue = document.querySelector(".navigation_bar_Ayueveda");
  toggleAyue.classList.toggle("active");
}

function navAyuevedaTogglenot() {
  const toggleAyue = document.querySelector(".navigation_bar_Ayueveda");
  toggleAyue.classList.toggle("active");
}

function navFragranceToggle() {
  const toggleAyue = document.querySelector(".navigation_bar_fragrance");
  toggleAyue.classList.toggle("active");
}

function navFragranceTogglenot() {
  const toggleAyue = document.querySelector(".navigation_bar_fragrance");
  toggleAyue.classList.toggle("active");
}

let search_btn = document.getElementById("search-btn");
let search = document.getElementById("searchbar");

search_btn.addEventListener("click", function () {
  goto_search_page(search);
});

function goto_search_page(str) {
  localStorage.setItem("search", JSON.stringify(str.value));

  window.location.href = "search_products.html";
}

function signout() {
  //console.log("sign");
  let fname = JSON.parse(localStorage.getItem("fname"));

  fname = " My Account ";

  localStorage.setItem("fname", JSON.stringify(fname));

  window.location.href = "home.html";
}
