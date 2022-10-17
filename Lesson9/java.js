// exercise 1

let password = "purplebeard";

let passwordlen = password.length;

if (passwordlen > 7) {
  console.log(passwordlen > 7);
}

// exercise 2

let height = "1423";
height = Number(height);
console.log(height);
if (typeof height == NaN) {
  console.log("Please enter a number");
} else if (height >= 150) {
  console.log("you can go to the ride");
} else {
  console.log("you can't go to the ride");
}

// exercise 3

let dice1 = Math.floor(Math.random() * 6 + 1);

let dice2 = Math.floor(Math.random() * 6 + 1);
console.log(dice1, dice2);
if (dice1 == 6 && dice2 == 6) {
  console.log("top price a bear");
} else if (dice1 == dice2) {
  console.log("three free throw");
} else {
  console.log("failed re player");
}

// part 2 exercise 1

function exercise1() {
  console.log("hello world");
}
exercise1();

// // part 2 exercise 2

function quadrupler(number) {
  return number * 4;
}
let answer = quadrupler(3);
console.log(answer);

// // part 2 exercise 3

function welcomes(firstName, lastName) {
  firstName = firstName.toLowerCase();
  lastName = lastName.toUpperCase();

  return `hello ${firstName} ${lastName}, how can i help you?`;
}

let fullName = welcomes("daniel", "james");
console.log(fullName);

// // part 2 exercise 4

function temperatureConverter(fahrenheit) {
  const celesius = ((fahrenheit - 32) * 5) / 9;
  return celesius;
}
exercise4 = temperatureConverter(45);
console.log(exercise4 + " celesius");

// // part 2 exercise 5

function dogAge(age) {
  if (age == 1) {
    age = 15;
  } else if (age == 2) {
    age = 24;
  } else {
    age = (age - 2) * 5 + 24;
  }
  return age;
}
const dogName = "browny";
exercise5 = dogAge(6);
console.log(`${dogName}'s age in dog years is ${exercise5} years.`);

// // part 2 exercise 6

function calculator(num1, operator, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("You did not enter two valid numbers");
    return;
  }
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    console.error("You did not enter a valid operator");
    return;
  }
}
console.log(calculator(200, "/", 2));
// // part 2 exercise 7

function min(a, b) {
  if (a < b) {
    minAns = a;
  } else {
    minAns = b;
  }
  return minAns;
}

console.log(min(300, 400));

// // part 2 exercise 8

function pow(x, n) {
  let a = Math.pow(x, n);
  return a;
}
console.log(pow(2, 3));
