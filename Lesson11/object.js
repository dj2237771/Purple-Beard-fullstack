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

var album = {};
