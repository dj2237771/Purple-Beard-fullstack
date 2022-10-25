// Objects Exercise 1
let person = {
  firstName: "John",
  lastName: "Parker",
  age: 21,
  eyeColor: "blue",
};
person.height = 170;
console.log(person.firstName, person.age);
console.log(person["eyeColor"], person["lastName"]);

person["firstName"] = "Sam";
console.log(person.firstName, person.age);
console.log(person.hasOwnProperty("height"));
// Objects Exercise 2​
var myObj = { gift: "pony", pet: "kitten", bed: "sleigh" };

function myObjGet(name) {
  object = myObj[name];

  if (object == undefined) {
    console.log("object not found");
  } else {
    console.log(myObj[name]);
  }
}
myObjGet(["pet"]);
// Objects Exercise 3​
let album = [];

const obj1 = { albumName: "Rocker" };
const obj2 = { albumLength: 45 };
const obj3 = { albumProducer: "Ben" };
const obj4 = { albumSongs: 7 };

album.push(obj1, obj2, obj3, obj4);

function albumObj(obj) {
  console.log(obj);
}
album.forEach(albumObj);

// const albumName = "Rocker";
// const albumLength = 45;
// const albumProducer = "Ben";
// const albumSongs = 7;

// album.push(albumName, albumLength, albumProducer, albumSongs);

// album["albumName"] = albumName;
// album["albumLength"] = albumLength;
// album["albumProducer"] = albumProducer;
// album["albumSongs"] = albumSongs;
console.log(album);

// Objects Exercise 4

var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

console.log(myPlants[1].list[1]);

// Objects Exercise 5

const staffMember = {
  firstName: "John",
  lastName: "francis",
  id: 3365,
};

function combinName(veriable) {
  fullname = veriable.firstName + " " + veriable.lastName;
  return fullname;
}
console.log(combinName(staffMember));
