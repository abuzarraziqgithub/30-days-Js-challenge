//* Function Expression

//* Write a function expression to find the maximum of two numbers and log the result to the console.

const maxNum = function (num1, num2) {
  const maxNumFinder =
    num1 > num2
      ? "1st Number is Greater than 2nd Number"
      : "2nd Number is Greater than 1st Number.";
  console.log(num1);
  console.log(num2);
  console.log(maxNumFinder);
};

maxNum(2, 1);
maxNum(2334323, 3432632);
maxNum(2433232433, 344324322243);
