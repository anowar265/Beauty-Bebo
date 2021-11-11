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

    let hr = document.createElement("hr");
    hr.setAttribute("class", "product_hr");
    innerImgBox.append(img);
    outerImgBox.append(innerImgBox);
    product_price.append(priceMain, priceDiscount, priceAval);
    div1.append(outerImgBox, product_name, rating, product_price, hr);

    div.append(div1);
    parent1.append(div);
  });
}
showProducts();

// if (localStorage.getItem("cart") === null) {
//     localStorage.setItem("cart", JSON.stringify([]));
//   }

//   function addtoCart(p) {
//     //alert("It Works");
//     //console.log("p:", p);
//     let products_cart = JSON.parse(localStorage.getItem("cart"));

//     products_cart.push(p);

//     localStorage.setItem("cart", JSON.stringify(products_cart));
//   }

// let rating = document.createElement("div");
// rating.setAttribute("class", "rating_wraper item_rating");
// let inp1 = document.createElement("input");
// inp1.setAttribute("id", "star1");
// inp1.setAttribute("type", "radio");
// let lb1 = document.createElement("label");
// lb1.setAttribute("for", "star1");

// let inp2 = document.createElement("input");
// inp2.setAttribute("id", "star1");
// inp2.setAttribute("type", "radio");
// let lb2 = document.createElement("label");
// lb2.setAttribute("for", "star1");

// let inp3 = document.createElement("input");
// inp3.setAttribute("id", "star1");
// inp3.setAttribute("type", "radio");
// let lb3 = document.createElement("label");
// lb3.setAttribute("for", "star1");

// let inp4 = document.createElement("input");
// inp4.setAttribute("id", "star1");
// inp4.setAttribute("type", "radio");
// let lb4 = document.createElement("label");
// lb4.setAttribute("for", "star1");
// rating.append(inp1, inp2, inp3, inp4);
