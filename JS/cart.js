let bebo_cart = JSON.parse(localStorage.getItem("bebo_cart"));
console.log("bebo_cart:", bebo_cart);
let parent_cart = document.querySelector(".cart_table");

function showProducts() {
  bebo_cart.forEach(function (product) {
    let cart_hr = document.createElement("hr");
    cart_hr.setAttribute("class", "carthr");
    let new_cart_ul = document.createElement("ul");
    new_cart_ul.setAttribute("class", "cart_ul");
    let new_cart_item_img = document.createElement("li");
    new_cart_item_img.setAttribute("class", " cart_item_img");

    let div_img = document.createElement("div");
    div_img.setAttribute("class", "newcart_item_img");

    let img = document.createElement("img");
    img.src = product.img;
    img.setAttribute("class", "list_img");
    div_img.append(img);
    new_cart_item_img.append(div_img);

    let new_cart_name = document.createElement("li");
    new_cart_name.setAttribute("class", "cart_name");
    new_cart_name.textContent = product.productName;

    let new_cart_price = document.createElement("li");
    new_cart_price.setAttribute("class", "cart_price");
    new_cart_price.textContent = "₹" + product.mainPrice;

    let new_cart_quantity = document.createElement("li");
    new_cart_quantity.setAttribute("class", "cart_quantity");
    new_cart_quantity.textContent = "1";

    let new_cart_sub_total = document.createElement("li");
    new_cart_sub_total.setAttribute("class", "cart_sub_total");
    new_cart_sub_total.textContent = "₹" + product.discountPrice;

    new_cart_ul.append(
      new_cart_item_img,
      new_cart_name,
      new_cart_price,
      new_cart_quantity,
      new_cart_sub_total
    );
    parent_cart.append(cart_hr, new_cart_ul);
  });
}
showProducts();

var total = bebo_cart.reduce(function (acc, cv) {
  return acc + Number(cv.discountPrice);
}, 0);
console.log(total);
document.querySelector(".cart_total_price").textContent = "₹" + total;

document.querySelector(".cart_total_price_gst").textContent = "₹" + total;
