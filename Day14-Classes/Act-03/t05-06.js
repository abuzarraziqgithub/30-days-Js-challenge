//? 3Static Methods and Properties
//*5 Add a static method to a the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

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
  static hello() {
    console.log("Hey! this is a static method you are calling.");
  }
}

Person.hello();

//* Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student {
  static studentCount = 0;
  constructor(name, age, studentId) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;
    Student.studentCount++;
  }
  studentIdShow() {
    console.log(`${this.name} and Your id is ${this.studentId}`);
  }
}

const s1 = new Student("Abuzar", 21, 93442);
const s2 = new Student("Shafqat", 22, 4442);
const s3 = new Student("Essa", 17, 45442);
const s4 = new Student("Mujtaba", 12, 13442);
const s5 = new Student("Gulalai", 5, 21442);

console.log(`Number of Students: ${Student.studentCount}`);
