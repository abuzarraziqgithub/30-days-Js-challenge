//* Higher order Functions

//* Write a higher order function that takes a function and a number, and calls the function that many times.

const function1 = function () {
  console.log("function1 called");
};
const function2 = function () {
  console.log("function2 called");
};

const higherOrderFunction1 = function (fn, times) {
  for (let i = 1; i <= times; i++) {
    fn();
  }
};

higherOrderFunction1(function1, 5);
higherOrderFunction1(function2, 10);

//* write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second to the result.

const functionValue = function (val) {
  console.log("Value of function is " + val);
};

const functionResult = function1(val);
{
  const result = val + val;
  console.log("The result of function is " + result);
}

const higherOrderFunction2 = function (fn1, fn2, value) {
  fn1();
  fn2();
};

higherOrderFunction2();
