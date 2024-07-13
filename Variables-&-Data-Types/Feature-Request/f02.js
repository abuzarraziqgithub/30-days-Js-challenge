//? Reassignment Demo
//* Create a script that demonstrates the difference in behavior between let and const

let num = 1;
//* reassigning
num = 2;
console.log(num); //* 2

const str = "string1";
str = "string2";
console.log(str); //* Type error
