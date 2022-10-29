let fromBox = document.getElementsByName("form");
let userEmail = document.getElementById("email");
let userName = document.getElementById("name");
let userProductName = document.getElementById("product");
let userProductDisc = document.getElementById("productDis");
let userProductPrice = document.getElementById("Price");
let addProduct = document.getElementById("submitButt");
let productsForSale = document.getElementById("saleProducts");

addProduct.addEventListener("click", function () {
  let para = document.createElement("p");
  para.innerText = userProductName.value;
  saleProducts.appendChild(para);
});

function handleForm(event) {
  event.preventDefault();
}
addProduct.addEventListener("click", handleForm);
