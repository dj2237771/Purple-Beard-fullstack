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

const reader = new FileReader();

let loadedImage = "";
addProduct.addEventListener("click", function () {
  console.log(fromBox.length);
  console.log(fromBox.elements[4].value);
  let i;
  for (i = 0; i < fromBox.length; i++) {
    if (nameLabel[i].textContent == "Product Image:") {
      label = nameLabel[i].textContent;

      imgSrc = fromBox.elements[i].value;

      imageElement(imgSrc);
    } else {
      let para = document.createElement("p");
      data = fromBox.elements[i].value;
      console.log(data);
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
loginButton.addEventListener("submit", handleForm, function () {
  handleForm();
  if (userName.nodeValue == "admin" || password.nodeValue == "password") {
    console.log(userName.nodeValue);
    fromBox.style.display = "block";
  }
});
