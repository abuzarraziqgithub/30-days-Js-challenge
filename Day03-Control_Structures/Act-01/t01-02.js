//* Write a program to check if a number is positive, negative, or zero, and log the result to the console.

const userNum = Number(prompt("Type a number"));
if (userNum >= 1) {
  console.log("Positive Number");
} else if (userNum === 0) {
  console.log("Zero");
} else {
  console.log("Negative Number");
}

//* Write a program to check if a person is eligible to vote (ag >= 18) and the result to the console.

const userAge = Number(
  prompt("Type your age to check if you are eligible to vote or not")
);

if (userAge >= 18) {
  console.log("Hey! You are eligible to vote😎");
} else {
  console.log("Sorry you are not eligible");
}
