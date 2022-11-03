const loginButton = document.getElementById("loginSubmit");
const loginBox = document.getElementById("loginBox");
const creatLoginForm = document.getElementById("createAccount");
const creatProductForm = document.getElementById("creatProduct");
const sinupPassword = document.getElementById("signupPassword");
const strengthBar = document.getElementById("passwordStrenght");
const addProduct = document.getElementById("creatProduct");
const newProduct = document.getElementById("saleProducts");
const productAllPrice = document.getElementById("allProPrice");
const numberOfAllProduct = document.getElementById("numberOfPro");

let strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
let mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
);

function formMessage(fromElement, type, message) {
  const messageBox = fromElement.querySelector(".formMessage");
  messageBox.textContent = message;
  messageBox.classList.remove("error", "success");
  messageBox.classList.add(type);
}

function loginForm(e) {
  let gotenUsername = localStorage.getItem("username");
  let gotenPassword = localStorage.getItem("password");

  e.preventDefault();
  console.log(loginBox.elements[0].value);
  console.log("its working");
  if (
    (loginBox.elements[0].value == "" && loginBox.elements[1].value == "") ||
    (loginBox.elements[0].value == gotenUsername &&
      loginBox.elements[1].value == gotenPassword)
  ) {
    creatProductForm.classList.remove("formHidden");
    loginBox.classList.add("formHidden");
  } else {
    formMessage(loginBox, "error", "Invalid username/password combination");
  }
}

function usernameChecker(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}
function inputError(inputElement, message) {
  inputElement.classList.add("formInput-error");
  inputElement.parentElement.querySelector(
    ".formInput-error-message"
  ).textContent = message;
}
function clearInputError(inputElement) {
  inputElement.classList.remove("formInput-error");
  inputElement.parentElement.querySelector(
    ".formInput-error-message"
  ).textContent = "";
}
function checkpassword(password) {
  let strength = 0;
  if (password.match(/[a0zA-Z0-9][a0zA-Z0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[~<>?]+/)) {
    strength += 1;
  }
  if (password.match(/[¬!"£$%^&*()]+/)) {
    strength += 1;
  }
  if (password.length > 5) {
    strength += 1;
  }
  console.log(strength);

  return (strengthBar.value = strength * 2);
}

document.querySelector("#creatAcount").addEventListener("click", (e) => {
  e.preventDefault();
  loginBox.classList.add("formHidden");
  creatLoginForm.classList.remove("formHidden");
});
document.querySelector("#linkLogin").addEventListener("click", (e) => {
  e.preventDefault();
  loginBox.classList.remove("formHidden");
  creatLoginForm.classList.add("formHidden");
});

loginBox.addEventListener("submit", loginForm);

document.querySelectorAll(".formInput").forEach((inputElement) => {
  inputElement.addEventListener("blur", (e) => {
    e.preventDefault();

    if (
      e.target.id === "signupUsername" &&
      e.target.value.length > 0 &&
      e.target.value.length < 10 &&
      usernameChecker(e.target.value) == true
    ) {
      console.log(e.target.value.length);
      inputError(
        inputElement,
        "Username must be at least 10 characters in length and contain a number"
      );
    }
  });
  inputElement.addEventListener("input", (e) => {
    clearInputError(inputElement);
  });
});

sinupPassword.addEventListener("keyup", function (e) {
  e.preventDefault();
  checkpassword(sinupPassword.value);
});

creatLoginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(creatLoginForm.length);
  for (i = 0; i < creatLoginForm.length - 1; i++) {
    if (creatLoginForm.elements[i].value == "") {
      inputError(creatLoginForm.elements[i], "Must be filled");
    }
    if (creatLoginForm.elements[2].value != creatLoginForm.elements[3].value) {
      inputError(creatLoginForm.elements[2], "Password dose not match");
    } else {
      localStorage.setItem("username", creatLoginForm.elements[0].value);
      localStorage.setItem("password", creatLoginForm.elements[2].value);
      loginBox.classList.remove("formHidden");
      creatLoginForm.classList.add("formHidden");
    }
  }
});

addProduct.addEventListener("submit", function (e) {
  e.preventDefault();
  let numberOfProduct = 0;

  numberOfProduct += 1;
  console.log(addProduct.length);
  for (i = 0; i < addProduct.length - 1; i++) {
    let allProductPrice = 0;

    if (addProduct.elements[i].value == "") {
      inputError(addProduct.elements[i], "Must be filled");
    }
    if (addProduct.elements[5]) {
      allProductPrice += addProduct.elements[8].value;
    }
    {
      productAllPrice.textContent = allProductPrice;
      numberOfAllProduct.textContent = numberOfProduct;
      let para = document.createElement("p");
      data = addProduct.elements[i].value;
      para.innerText = addProduct.elements[i].value;
      newProduct.appendChild(para);
    }
  }
});
