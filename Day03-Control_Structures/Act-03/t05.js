//* Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = Number(prompt("Enter your score "));

switch (score) {
  case score >= 90:
    console.log("A Grade");
    break;
  case score <= 85:
    console.log("B Grade");
    break;
  case score >= 60:
    console.log("C Grade");
    break;
  default:
    console.log("You failed");
}
