//* Importing Entire Modules

//* Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const userName = "Abuzar RaziQ";
const userAge = 21;

function myFunction() {
  console.log("This is myFunction function");
}

export { userName, userAge, myFunction };
