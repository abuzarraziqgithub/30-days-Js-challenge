//* Object Iteration

//* Use a for in loop to iterate over the properties of the book object and log each property and it's value.

//* Use Object.keys and Object.values methods to log all the keys and values of the book object.

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

for (const key in book) {
  console.log(key);
}

console.log(Object.keys(book));
console.log(Object.values(book));
