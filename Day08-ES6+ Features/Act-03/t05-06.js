//* Spread and Rest Operators

//* Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const existingArray = [1, 3, 5, 7, 9, 11];
const newArray = [...existingArray, 2, 4, 6, 8, 10];
console.log(newArray);

//* Use the rest Operator in a function to accept an arbitrary number of arguments, sum them, and return the result
const sumFn = function (...nums) {
  let sum = 0;
  for (let number of nums) {
    sum += number;
  }
  return sum;
};

console.log(sumFn(1, 1, 2, 3));
console.log(sumFn(12, 3, 5, 2));
