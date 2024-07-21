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

const valueFunction = function (val) {
  console.log("The value for the first function is " + val);
  return val;
};

const resultFunction = function (val) {
  const result = val + val;
  console.log("The result for the second function is " + result);
  return result;
};

const higherOrderFunction2 = function (fn1, fn2, val) {
  const intermediateResult = fn1(val);
  fn2(intermediateResult);
};

higherOrderFunction2(valueFunction, resultFunction, 20);
