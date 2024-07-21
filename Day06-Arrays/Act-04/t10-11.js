//* Array Iteration

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* Use a for loop to iterate over the array and log the result to console.
for (let x = 0; x < numArray.length; x++) {
  console.log(numArray[x]);
}

//* Use the forEach method to iterate over the array and log each element to the console.
numArray.forEach((item) => console.log(item));
