//* Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let weekDay = Number(prompt("Enter the number of the day! "));

switch (weekDay) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
