let student = {
  firstName: "John",

  lastName: "Doe",

  id: 335,

  course: "Geography",
};

let student2 = {
  firstName: "Johnasd",

  lastName: "Doeas",

  id: 335,

  course: "Geography",
};

console.log(student.firstName);

function combinName(veriable) {
  fullName = veriable.firstName + veriable.lastName;
  return console.log(fullName);
}

console.log(combinName(student2));

var classRoom = {
  teacher: "Medo",
  student1: {
    firstName: "ohnasd",
    lastName: "Deas",
    id: 3355,
    course: "graphy",
  },
  student2: {
    firstName: "dargon",
    lastName: "beans",
    id: 3365,
    course: "maths",
  },

  student3: {
    firstName: "Jo",
    lastName: "Do",
    id: 3358,
    course: "phy",
  },
};
console.log(classRoom);
var classRoom1 = {
  studentCapacity: 2,

  teacher: "Mido",

  students: [],
};

let students = {
  student1: {
    firstName: "ohnasd",
    lastName: "Deas",
    id: 3355,
    course: "graphy",
  },
  student2: {
    firstName: "dargon",
    lastName: "beans",
    id: 3365,
    course: "maths",
  },
  student3: {
    firstName: "Jo",
    lastName: "Do",
    id: 3358,
    course: "phy",
  },
};
classRoom1.students.push(
  {
    firstName: "ohnasd",
    lastName: "Deas",
    id: 3355,
    course: "graphy",
  },
  {
    firstName: "dargon",
    lastName: "beans",
    id: 3365,
    course: "maths",
  }
);

console.log(classRoom1);
