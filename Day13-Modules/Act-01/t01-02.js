//* Creating and Exporting Modules.

//* Create a module that exports a function to add two numbers. Import and use this module in another script.
function sumOfTwo(num1, num2) {
  console.log(num1 + num2);
}
export { sumOfTwo };

//* Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
let person = {
  userName: "Abuzar",
  userAge: 20,

  greetings() {
    console.log(person.userName, person.userAge);
  },
};

export { person };
