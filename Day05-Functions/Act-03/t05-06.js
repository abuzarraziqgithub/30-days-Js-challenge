//* Arrow Functions

//* Write an arrow function to calculate the sum of two numbers and return result.

const sumOfTwo = (num1, num2) => {
  let sum = num1 + num2;
  console.log("Sum of " + num1 + " and " + num2 + " is " + sum);
};
sumOfTwo(1, 2);
sumOfTwo(132, 232);
sumOfTwo(40, 40);

//* Write a function to check if a string contains a specific character and return a boolean value.

const isContain = (str) => {
  const value = str.toLowerCase().includes("a" || "s" || "f")
    ? "True"
    : "False";
  console.log(value);
};

isContain("Abuzar");
isContain("Shafqat");
isContain("Essa");
isContain("M.SAAD");
