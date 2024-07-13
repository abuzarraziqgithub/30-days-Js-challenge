//? Understanding const
//* Try reassigning a variable declared with const and observe the error.

const num = "number";
num = "string";
console.log(num); //* TypeError, assignment to constant variable
