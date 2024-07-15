//* Write a program to check if a number is a leap year using multiple conditions (dividble by 4, but not 100 unless also divide by 400) and log the result to the console.

const userYear = Number(prompt("Enter Year to check if Leap Year "));
if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
  console.log(`Leap Year`);
} else {
  console.log(`Not a Leap Year`);
}
