let fromBox = document.forms[0];
let userEmail = document.getElementById["email"];
let userName = document.getElementById("name");
let userProductName = document.getElementById("product");
let imageInput = document.getElementById("avatar");
let userProductDisc = document.getElementById("productDis");
let userProductPrice = document.getElementById("Price");
let addProduct = document.getElementById("submitButt");
let productsForSale = document.getElementById("saleProducts");
let nameLabel = document.getElementsByTagName("label");
let username = document.getElementById("userName");
let password = document.getElementById("password");
let loginButton = document.getElementById("loginSubmit");
let loginBox = document.getElementById("loginBox");

const reader = new FileReader();

let loadedImage = "";
addProduct.addEventListener("click", function () {
  let i;
  for (i = 0; i < fromBox.length; i++) {
    if (nameLabel[i].textContent == "Product Image:") {
      label = nameLabel[i].textContent;

      imgSrc = fromBox.elements[i].value;

      imageElement(imgSrc);
    } else {
      let para = document.createElement("p");
      data = fromBox.elements[i].value;
      // console.log(data);
      para.innerText = nameLabel[i].textContent + fromBox.elements[i].value;
      saleProducts.appendChild(para);
    }
  }
});

function handleForm(event) {
  event.preventDefault();
}
addProduct.addEventListener("click", handleForm);

// Creat image element and appen it to the sale products list
function imageElement(imgSrc) {
  console.log(imgSrc);

  let img = document.createElement("img");
  img.src = imgSrc;
  productsForSale.appendChild(img);
}

// login verification

loginBox.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();
  console.log(loginBox.elements[0].value);
  console.log("its working");
  if (
    loginBox.elements[0].value == "admin" &&
    loginBox.elements[1].value == "password"
  ) {
    fromBox.style.display = "block";
    loginBox.style.display = "none";
  } else {
    alert("password or username is incorrect");
  }
}
