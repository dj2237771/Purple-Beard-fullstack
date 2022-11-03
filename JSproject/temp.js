const reader = new FileReader();

let loadedImage = "";
addProduct.addEventListener("click", function () {
  let i;
  for (i = 0; i < fromBox.length - 1; i++) {
    if (fromBox.elements[i].value == "") {
      alert("please fill in the blank");
    } else if (nameLabel[i].textContent == "Product Image:") {
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

function loginForm(e) {
  e.preventDefault();
  console.log(loginBox.elements[0].value);
  console.log("its working");
  if (loginBox.elements[0].value == "" && loginBox.elements[1].value == "") {
    fromBox.style.display = "block";
    loginBox.style.display = "none";
  } else {
    alert("password or username is incorrect");
  }
}
