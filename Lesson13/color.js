color = document.getElementById("col").value;
num = document.getElementById("quantity").value;
submitBut = document.getElementById("subButton");

console.log(color, num);

function myFunction() {
  for1 = document.getElementById("frm1").submit();

  console.log(for1);
}
submitBut.addEventListener("submit", myFunction);
