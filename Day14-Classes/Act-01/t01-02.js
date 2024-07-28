//* Class Definition

//* Define a class Person with properties name and age, and a method to return a greeting message.
//* Add a method to the person class that updates the age property and logs the updated age

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hi ${this.name}, you are ${this.age} and its amazing`);
  }

  increaseAge(age) {
    console.log(`Age increased, Your age is now ${(this.age = age)}`);
  }
}

const p1 = new Person("Abuzar RaziQ", 21);
p1.greeting();
p1.increaseAge(23);

export { Person };
