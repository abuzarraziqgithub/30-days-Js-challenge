//* Array Methods (Intermediate)
const numArray = [1, 2, 3, 4, 5, 60, 23, 40, 2, 6, 8, 13, 5, 7, 5, 0, 8];

//* Use the map method to create a new array where each number is doubled and log the result to console.
numArray.map((number) => {
  const doubledNumber = number * number;
  console.log(doubledNumber);
});
console.log("\n");
console.log("\n");
console.log("\n");

//* Use the filter method to create a new array with only even numbers and log the result to the console.
numArray.filter((num) => {
  const evenNum = num % 2 === 0;
  if (evenNum) console.log(num);
});

//* Use the reduce method to calculate the sum of all numbers in the array and log the result to the console.

const sum = numArray.reduce((accumulator, currentValue) => {
  return currentValue + accumulator;
}, 0);
console.log(sum);
