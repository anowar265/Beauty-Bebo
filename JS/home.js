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
