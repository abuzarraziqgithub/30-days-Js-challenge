//* Object Methods

//* Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

//* Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the result to the console.
const book = {
  title: "How I Ruined My Life by not Ignoring the Negativity",
  author: "Abuzar RaziQ",
  year: 2024,

  aboutBook() {
    console.log(book.title);
    console.log(book.author);
  },

  bookYear(year) {
    book.year = year;
    console.log("The updated book year is " + year);
  },
};
book.aboutBook();
book.bookYear(2022);
console.log(book);
