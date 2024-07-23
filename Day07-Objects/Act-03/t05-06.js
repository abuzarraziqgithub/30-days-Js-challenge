//* Nested Objects

//* Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.

//* Access and log the name of the library and the titles of all the books in the library.
const book = {
  title: "How I Ruined My Life by not Ignoring the Negativity",
  author: "Abuzar RaziQ",
  year: 2024,

  library: {
    name: "Computer Science",
    books: [
      {
        title: "Data Structures & Algorithms Part-01",
      },
      {
        title: "Calculus 1",
      },
      {
        title: "Theory of Automata Part-02",
      },
      {
        title: "Advance C++ and Databases",
      },
    ],
  },

  aboutBook() {
    console.log(book.title);
    console.log(book.author);
  },

  bookYear(year) {
    book.year = year;
    console.log("The updated book year is " + year);
  },
};

console.log(book.library);
console.log(book.library.name);
console.log(book.library.books[0]);
