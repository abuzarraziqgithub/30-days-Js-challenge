//* Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

const userNum = Number(prompt("Type a number here "));
const numCheck = userNum % 2 === 0 ? "Even Number" : "Odd Number";
console.log(numCheck);
