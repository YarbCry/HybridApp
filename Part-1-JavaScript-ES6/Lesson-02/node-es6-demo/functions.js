// A function declaration can group reusable statements.
function greet() {
  console.log("Hello");
}

// Parameters receive values, and return sends a result back to the caller.
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// A returnable function can also return a text value for later use.
function getSiteName() {
  return "GeeksforGeeks";
}

// Default parameters are used when an argument is missing or undefined.
function sum(firstNumber, secondNumber = 0, thirdNumber = 2) {
  return firstNumber + secondNumber + thirdNumber;
}

// A rest parameter collects all remaining arguments into an array.
function total(...numbers) {
  return numbers.reduce((currentTotal, value) => currentTotal + value, 0);
}

greet();
console.log(add(12, 10));
console.log(getSiteName());
console.log(sum(1));
console.log(total(1, 2, 3, 4));

// A function expression stores a function inside a variable.
const showText = function () {
  console.log("Anonymous function");
};

// An arrow function provides a shorter syntax for a simple expression.
const increment = (value) => value + 1;
const createUser = (name) => ({ name });

showText();
console.log(increment(4));
console.log(createUser("Noy"));

// Function declarations are hoisted, so this call works before the declaration.
showHoistedMessage();

function showHoistedMessage() {
  console.log("Function declaration is hoisted");
}

// A generator pauses at each yield and continues on the next iteration.
function* languages() {
  yield "Python";
  yield "Java";
  yield "C++";
}

for (const language of languages()) {
  console.log(language);
}

// An IIFE runs immediately and keeps its variables inside a private scope.
(function () {
  const privateValue = "Inside IIFE";
  console.log(privateValue);
})();

// A higher-order function accepts another function as a callback.
function processValue(value, callback) {
  return callback(value);
}

console.log(processValue(5, (value) => value * 2));
