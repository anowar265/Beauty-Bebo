let images = [
  "https://www.beautybebo.com/pub/media/ads/homepage_slider.png",
  "https://www.beautybebo.com/pub/media/ads/vega_1.png",
  "https://www.beautybebo.com/pub/media/ads/mamaearth_diwali.png",
];

var parent = document.getElementById("home_slide_show");
function startslideshow() {
  let counter = 0;
  var img = document.createElement("img");
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
console.log(readMoreBtn.textContent);
readMoreBtn.addEventListener("click", function (e) {
  text.classList.toggle("show_more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

function menuToggle() {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}

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
