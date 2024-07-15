//* Write a program to find the largest of three numbers using nested if-else statements.

const num1 = Number(prompt("Type number 1: "));
const num2 = Number(prompt("Type number 2: "));
const num3 = Number(prompt("Type number 3: "));

if (num1 > num2) {
  console.log(`${num1} is the largest`);
  if (num2 > num3) {
    console.log(`${num2} is the largest`);
  }
} else {
  console.log(`${num3} is the largest`);
}
