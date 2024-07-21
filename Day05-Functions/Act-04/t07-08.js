//* Function Parameters and Default Values.

//* Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const productOfValues = function (value1, value2 = 2) {
  const product = value1 * value2;
  console.log(value1, value2);
  console.log("Product is : " + product);
};

productOfValues(23);
productOfValues(23, 24);

//* Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const person = (name, age = 21) =>
  console.log("Welcome " + name + " Your age is: " + age);

person("Abuzar RaziQ");
person("Shafqat RaziQ", 23.5);
