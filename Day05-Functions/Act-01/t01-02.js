//* Function Declaration

//* Write a function to check if a number is even or odd and log the result to the console.
function isOdd(num) {
  if (num % 2 === 0) console.log("Even Number");
  else console.log("Odd Number");
}
isOdd(1);
isOdd(6);

//* Write a function to calculate the square of a number and return the result.

function squareNumber(num) {
  let square = num * num;
  console.log(" The square of number " + num + " is " + square);
}
squareNumber(4);
squareNumber(5);
