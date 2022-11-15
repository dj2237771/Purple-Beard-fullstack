// exercise 1

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  wlecome() {
    console.log(`${this.firstName}  ${this.lastName}  is my name`);
  }
}

// exercise 2

class Admin extends User {
  constructor(firstName, lastName, adminStatus) {
    super(firstName, lastName);
    this.adminStatus = adminStatus;
  }
  status() {
    if (this.adminStatus == "true") {
      console.log(`${this.firstName}  ${this.lastName}  is an admin`);
    } else {
      console.log(`${this.firstName} ${this.lastName} is not an admin`);
    }
  }
}

const User1 = new User("Mitzie", "maron");
const User2 = new Admin("samuel", "sebastian", "true");

User1.wlecome();
User2.status();

// exercise 3

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.stideLength = sideLength;
  }
  calPerimeter() {
    let perimeter = this.sides * this.stideLength;
    return console.log(perimeter);
  }
}

const square = new Shape("square", 4, 5);
const triangle = new Shape("triangle", 3, 3);
square.calPerimeter();
triangle.calPerimeter();

// exercise 4

// class Square extends Shape {
//   constructor(name, sides, sideLength) {
//     super(name, sides, sideLength);
//   }

//   calcArea() {}
// }

// Spread Operator Exercises 1

let students1 = ["daniel", "samuel", "james"];
let students2 = ["ben", "daren"];
console.log(...students1, ...students2);

// Spread Operator Exercises 2

let firstName = "daniel";
let names = [...firstName];
console.log(names);

// Destructoring Exercises
// Object Destructuring 1

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); //8 ?
// console.log(yearNeptuneDiscovered); //1846 ?

// Object Destructuring 2
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears); //yearNeptuneDiscovered: 1846, yearMarsDiscovered: 165 ?

// Object Destructuring 3

// function getUserData({ firstName, favoriteColor = "green" }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); // `Your name is Alejandro and you like purple `?
// console.log(getUserData({ firstName: "Melissa" })); //`Your name is Melissa and you like green ` ?
// console.log(getUserData({})); //Your name is null and you like green ?

// Array Destructuring 1

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // Maya?
// console.log(second); //Marisa ?
// console.log(third); //Chi ?

// Array Destructuring 2

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings",
// ];

// console.log(raindrops); //"Raindrops on roses", ?
// console.log(whiskers); // "whiskers on kittens"?
// console.log(aFewOfMyFavoriteThings); // "Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"?

// Array Destructuring 3

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// console.log(numbers); //10 30 20 ?

// General Exercises 3

// let randomNumber = [];
// while (randomNumber.length < 100) {
//   var r = Math.floor(Math.random() * 1000) + 1;
//   if (randomNumber.indexOf(r) === -1) randomNumber.push(r);
// }
// console.log(randomNumber);
// console.log(Math.max(...randomNumber), Math.min(...randomNumber));
// console.log(randomNumber.sort);
