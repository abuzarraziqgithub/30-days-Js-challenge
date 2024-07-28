//* Getters and Setters

//* Add a getter method to the Person class to return the full name(assume a firstName and lastName property). Create an instance and log the full name using the getter.

//* Add a setter method to the Person class to update the name properties(firstName and lastName). Update the name using the setter and log the updated full name.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(fullName) {
    return (this._fullName = fullName);
  }
}

const p1 = new Person("Abuzar", "RaziQ", 21);
console.log(p1.fullName);
console.log((p1.fullName = "Shafqat"));
