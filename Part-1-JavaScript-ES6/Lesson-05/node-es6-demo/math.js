// ES6 supports binary and octal number literal prefixes.
const binaryValue = 0b1010;
const octalValue = 0o12;

console.log(binaryValue);
console.log(octalValue);

// Math.random() returns a value from 0 up to, but not including, 1.
const randomValue = Math.random();
console.log(randomValue >= 0 && randomValue < 1);

// Convert Math.random() into an inclusive random integer range.
const randomInteger = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const diceRoll = randomInteger(1, 6);
console.log(diceRoll >= 1 && diceRoll <= 6);

// Exponent, root, and distance calculations use Math methods.
console.log(Math.pow(2, 5));
console.log(2 ** 5);
console.log(Math.sqrt(81));
console.log(Math.cbrt(27));
console.log(Math.cbrt(-8));
console.log(Math.exp(1));
console.log(Math.expm1(1));
console.log(Math.hypot(3, 4));
console.log(Math.hypot(2, 3, 6));

// Logarithm methods support several common bases.
console.log(Math.log(Math.E));
console.log(Math.log10(1000));
console.log(Math.log2(32));
console.log(Math.log1p(0));
console.log(Math.log1p(Math.E - 1));

// Rounding and sign methods handle common numeric operations.
console.log(Math.abs(-25));
console.log(Math.sign(-10));
console.log(Math.sign(0));
console.log(Math.sign(10));
console.log(Math.ceil(4.1));
console.log(Math.ceil(-4.9));
console.log(Math.floor(4.9));
console.log(Math.floor(-4.1));
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));
console.log(Math.round(4.4));
console.log(Math.round(4.5));

// Spread passes every array value as a separate argument.
const values = [4, 12, 7, 30];
console.log(Math.min(8, 3, 15, 1));
console.log(Math.max(8, 3, 15, 1));
console.log(Math.min());
console.log(Math.max());
console.log(Math.min(...values));
console.log(Math.max(...values));

// Trigonometric methods use radians, so convert from degrees first.
const angle = (30 * Math.PI) / 180;
console.log(Math.sin(angle));
console.log(Math.cos(angle));
console.log(Math.tan(angle));
console.log(Math.asin(0.5));
console.log(Math.acos(0.5));
console.log(Math.atan(1));
console.log(Math.atan2(1, 1));

// Math exposes frequently used mathematical constants as properties.
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);

// Decimal floating-point results should be compared with a tolerance.
console.log(0.1 + 0.2);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
