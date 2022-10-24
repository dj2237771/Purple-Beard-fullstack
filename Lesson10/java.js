// // Arrays  exercise 1

const breakfast = ["beans", "hashbrowns", "orange", "apple", "coffe", "tea"];

breakfast.push("eggs");
breakfast.unshift("bread");
console.log(breakfast);

// // Arrays  exercise 2

function lastItem(array) {
  let item = array[array.length - 1];
  return item;
}
console.log(lastItem(breakfast));

// // Arrays  exercise 3

const musicGenres = ["rock", "rap"];
musicGenres.push("jazz");

function replaceMid(array) {
  let mid = Math.floor(array.length / 2);
  array[mid] = "classical";
}
replaceMid(musicGenres);
musicGenres.unshift("blues", "reggae");
console.log(musicGenres);

// // Loops  exercise 4

function sort(array) {
  return array.sort();
}
console.log(sort(breakfast));

// // Loops  exercise 1
const num = [2, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// // Loops  exercise 2

const tasks = ["hover", "laundery", "cooking"];

for (let i = 0; i < tasks.length; i++) {
  console.log(`Task ${i + 1}: ${tasks[i]}`);
}

// // Loops  exercise 3

// let i = 3;
// while (i) {
//   alert(i--);
// }
// alert 1 will be the the last to be alerted

// // Loops exercise 4

for (let i = 2; i < 11; i += 2) {
  console.log(`even number ${i}`);
}

// // Loops  exercise 5
let x = 0;
while (x < 3) {
  x = x + 1;
  console.log(`alert ${x}`);
  // alert(`number ${x}!`);
}

// // Loops   exercise 6

function sumInput(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum = Math.floor(sum / arr.length);
  return sum;
}
console.log(sumInput(num));

// // Strings  3 exercise 1

let country = "america";

function addFullStop(stri) {
  let i = stri.length - 1;
  console.log(i);
  console.log(stri.charAt(i));
  if (stri.charAt(i) != ".") {
    stri += ".";
  }
  return stri;
}
console.log(addFullStop(country));

// // Strings  3 exercise 2

function capitalize(param) {
  if (typeof param != "string") {
    ans = "this is not a string";
  } else {
    ans = param.charAt(0).toUpperCase() + param.slice(1);
  }
  return ans;
}
console.log(capitalize(num));

// // ForEach  exercise 1
function callItem(item) {
  console.log(item);
}
breakfast.forEach(callItem);

// // ForEach  exercise 2
function sum(array) {
  let sumX2 = 0;
  array.forEach(add);
  function add(array) {
    sumX2 += array;
  }
  return console.log(sumX2);
}
sum(num);

// // ForEach  exercise 3

function product(array) {
  let multy = 1;
  array.forEach(times);
  function times(array) {
    multy *= array;
    return multy;
  }
  console.log(multy);
}
product(num);
// // ForEach  exercise 4

var studentGrades = [70, 20, 53, 64, 78, 60, 32];
let pasGrades = [];
studentGrades.forEach(getGrades);
function getGrades(grade) {
  if (grade > 50) {
    pasGrades.push(grade);
    return pasGrades;
  } else {
    console.log(grade);
  }
}
console.log(pasGrades);

// let km = [1, 5, 10, 20, 30, 40, 50];
// let inMile = (arr) => {
//   let miles = arr.map((numb) => numb * 0.621371);
//   return miles;
// };
// console.log(inMile(km))
