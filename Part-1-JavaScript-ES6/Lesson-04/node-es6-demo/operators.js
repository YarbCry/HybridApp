// Arithmetic operators perform calculations with numbers.
const firstNumber = 10.5;
const secondNumber = 2.5;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(2 ** 4);

// Prefix changes the value first; postfix returns the old value first.
let incrementValue = 5;
console.log(++incrementValue);
console.log(incrementValue++);
console.log(incrementValue);

let decrementValue = 5;
console.log(--decrementValue);
console.log(decrementValue--);
console.log(decrementValue);

// Comparison operators return Boolean results. Prefer strict equality.
console.log(11 > 12);
console.log(11 < 12);
console.log(12 >= 11);
console.log(12 <= 12);
console.log(11 == "11");
console.log(11 === "11");
console.log(11 != "11");
console.log(11 !== "11");

// Logical operators combine or reverse conditions.
console.log(13 > 12 && 12 > 11);
console.log(11 > 12 || 12 > 11);
console.log(!(10 > 5));

// Bitwise operators work with 32-bit integer representations.
console.log(2 & 3);
console.log(2 | 3);
console.log(2 ^ 3);
console.log(~4);
console.log(2 << 3);
console.log(16 >> 2);
console.log(-16 >>> 2);

// Compound assignment performs an operation and stores the new value.
let value = 10;
value += 5;
console.log(value);
value -= 3;
console.log(value);
value *= 2;
console.log(value);
value /= 4;
console.log(value);

// typeof returns a string describing the operand's type.
console.log(typeof 12);
console.log(typeof "ES6");
console.log(typeof true);
console.log(typeof String);
console.log(typeof undefined);
console.log(typeof null);

// Unary negation changes the sign of a numeric value.
let amount = 9;
amount = -amount;
console.log(amount);

// The plus operator joins strings when either operand is text.
const firstWord = "Java";
const secondWord = "Script";
console.log(firstWord + secondWord);
console.log("Total: " + 10 + 5);
console.log("Total: " + (10 + 5));

// A ternary chooses a value, while parentheses make precedence explicit.
const age = 20;
console.log(age >= 18 ? "Adult" : "Minor");
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
