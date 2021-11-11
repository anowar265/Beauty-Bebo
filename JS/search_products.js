function menuToggle() {
  let toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}

let parent1 = document.getElementById("show-the-bebo-products");

function showProducts() {
  product_data.forEach(function (product) {
    //console.log(product.name);
    let div = document.createElement("div");
    div.setAttribute("class", "all_bebo_products");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "bebo_products_box");
    let img = document.createElement("img");
    img.src = product.img;
    img.setAttribute("src", product.img);
    let outerImgBox = document.createElement("div");
    outerImgBox.setAttribute("class", "img-outer-box");
    let innerImgBox = document.createElement("div");
    innerImgBox.setAttribute("class", "img-inner-box");

    let product_name = document.createElement("p");
    product_name.setAttribute("class", "bebo_products_name");
    product_name.textContent = product.productName;

    let product_price = document.createElement("p");
    product_price.setAttribute("class", "price_promo ");
    let priceMain = document.createElement("span");
    priceMain.setAttribute("class", "main_price");
    priceMain.textContent = product.mainPrice;

    let priceDiscount = document.createElement("span");
    priceDiscount.setAttribute("class", "discount_price");
    priceDiscount.textContent = product.discountPrice;

    let priceAval = document.createElement("span");
    priceAval.setAttribute("class", "discount_avality");
    priceAval.textContent = product.discountAvality;

    let rating = document.createElement("div");
    rating.setAttribute("class", "rating_wraper rating_upper_margin");
    let inp1 = document.createElement("input");
    inp1.setAttribute("id", "star1");
    inp1.setAttribute("type", "radio");
    let lb1 = document.createElement("label");
    lb1.setAttribute("for", "star1");

    let inp2 = document.createElement("input");
    inp2.setAttribute("id", "star1");
    inp2.setAttribute("type", "radio");
    let lb2 = document.createElement("label");
    lb2.setAttribute("for", "star1");

    let inp3 = document.createElement("input");
    inp3.setAttribute("id", "star1");
    inp3.setAttribute("type", "radio");
    let lb3 = document.createElement("label");
    lb3.setAttribute("for", "star1");

    let inp4 = document.createElement("input");
    inp4.setAttribute("id", "star1");
    inp4.setAttribute("type", "radio");
    let lb4 = document.createElement("label");
    lb4.setAttribute("for", "star1");

    let inp5 = document.createElement("input");
    inp5.setAttribute("id", "star1");
    inp5.setAttribute("type", "radio");
    let lb5 = document.createElement("label");
    lb5.setAttribute("for", "star1");

    rating.append(inp1, lb1, inp2, lb2, inp3, lb3, inp4, lb4, inp5, lb5);

    // let addtoCart_btn = document.createElement("button");
    // addtoCart_btn.innerText = "Add to Cart";

    // addtoCart_btn.onclick = function () {
    //   addtoCart(product);
    // };
    let bebo_btn_order = document.createElement("div");
    bebo_btn_order.setAttribute("class", "btn_order ");
    let bebo_btn = document.createElement("div");
    bebo_btn.setAttribute("class", "btn");
    let bebo_icons = document.createElement("div");
    bebo_icons.setAttribute("class", "icons_favor");

    let addtoCart_btn = document.createElement("button");
    addtoCart_btn.setAttribute("class", "add_to_cart");

    let giftcard = document.createElement("span");
    giftcard.setAttribute("class", "material-icons-outlined");
    giftcard.textContent = "card_giftcard";

    let giftedcard = document.createElement("span");

    giftedcard.textContent = "Add to Cart";

    let bebo_favour = document.createElement("div");
    bebo_favour.setAttribute("class", "favourite new_favourite");
    let fv = document.createElement("span");
    fv.setAttribute("class", "material-icons-outlined add_favourite_img");
    fv.textContent = "favorite";

    let hr = document.createElement("hr");
    hr.setAttribute("class", "product_hr");
    innerImgBox.append(img);
    outerImgBox.append(innerImgBox);
    product_price.append(priceMain, priceDiscount, priceAval);
    addtoCart_btn.append(giftcard, giftedcard);
    bebo_btn.append(addtoCart_btn);
    bebo_favour.append(fv);
    bebo_icons.append(bebo_favour);
    bebo_btn_order.append(bebo_btn, bebo_icons);
    div1.append(
      outerImgBox,
      product_name,
      rating,
      product_price,
      bebo_btn_order,
      hr
    );

    div.append(div1);
    parent1.append(div);

    addtoCart_btn.onclick = function () {
      addtoCart(product);
    };
  });
}
showProducts();

let bebo_products_cart = JSON.parse(localStorage.getItem("bebo_cart")) || [];

function addtoCart(p) {
  for (var i = 0; i < bebo_products_cart.length; i++) {
    if (bebo_products_cart[i].productName === p.productName) {
      var flag = 1;
      console.log("here");
    }
  }
  if (flag == 1) {
    alert("Product already Added");
  } else {
    bebo_products_cart.push(p);
  }
  //products_cart.push(p);
  localStorage.setItem("bebo_cart", JSON.stringify(bebo_products_cart));
  //console.log("products_cart:", products_cart);
}
