import { Person } from "../Act-01/t01-02.js";

//? Class Inheritance

//* Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the Student ID.

//* Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    {
      this.name, this.name;
    }
    this.studentId = studentId;
  }
  studentIdShow() {
    console.log(`${this.name} and Your id is ${this.studentId}`);
  }

  greeting() {
    console.log(`Hey! ${this.name}, Your student ID is ${this.studentId}`);
  }
}

const s1 = new Student("Abuzar", 21, 7833);
s1.studentIdShow();
s1.greeting();
