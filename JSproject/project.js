const loginButton = document.getElementById("loginSubmit");
const loginBox = document.getElementById("loginBox");
const creatLoginForm = document.getElementById("createAccount");
const creatProductForm = document.getElementById("creatProduct");

function formMessage(fromElement, type, message) {
  const messageBox = fromElement.querySelector(".formMessage");
  messageBox.textContent = message;
  messageBox.classList.remove("error", "success");
  messageBox.classList.add(type);
}

function loginForm(e) {
  e.preventDefault();
  console.log(loginBox.elements[0].value);
  console.log("its working");
  if (loginBox.elements[0].value == "" && loginBox.elements[1].value == "") {
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
