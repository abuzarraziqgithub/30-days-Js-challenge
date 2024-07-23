//* Destructuring

//* Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const [firstIndex, secondIndex] = numArray;
console.log(firstIndex);
console.log(secondIndex);

//* Use object destructuring to extract the title and author from the book object and log them to the console.
const book = {
  title: "How I Ruined My Life by not Ignoring the Negativity",
  author: "Abuzar RaziQ",
  year: 2024,
};

const { title, author } = book;
console.log(title);
console.log(author);
