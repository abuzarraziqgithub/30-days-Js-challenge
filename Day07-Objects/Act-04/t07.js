//* The this Keyword

//* Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

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

  titleYear() {
    console.log("The title of the book is " + this.title);
    console.log("The Year of the book is " + this.year);
  },
};
book.titleYear();
