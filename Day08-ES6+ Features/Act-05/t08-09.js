//* Enhanced Object Literals

//* Use enhanced object literals to create an object with methods and properties, and log the object to the console.

//* Create an Object with computed property names based on variables and log the object to the console.

let userName = "Abuzar";
let userAge = 21;
let userGender = "Male";
let userEmail = "xyz@gmail.com";

let greetings = function () {
  console.log(`My name is ${userName}, I'm ${userAge}`);
};

const person = {
  userName,
  userAge,
  userEmail,
  userGender,

  greetings,
};
console.log(person);
