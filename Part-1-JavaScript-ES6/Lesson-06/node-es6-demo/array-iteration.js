const numbers = [1, 2, 3, 4];

// map creates a new array by transforming every value.
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// filter creates a new array containing only matching values.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// reduce combines all values into one result.
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);
