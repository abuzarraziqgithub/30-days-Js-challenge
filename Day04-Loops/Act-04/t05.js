//* Write a program to print a pattern using nested for loop.

//? SUDO CODE :
/*
 * for(Starts from 1; iteration 5 Times; increase every iteration by 1)
 *
 */

let row = Number(prompt("Enter a number for Pattern Limit"));

for (let x = 1; x <= row; x++) {
  let rowP = "";
  for (let y = 1; y <= x; y++) {
    rowP += "*";
  }
  console.log(rowP);
}
