// A for loop is useful when the number of iterations is known.
for (let index = 0; index <= 10; index += 2) {
  console.log(index);
}

// for...in iterates over the enumerable property names of an object.
const student = {
  name: "Kham",
  age: 21,
  major: "IT",
};

for (const key in student) {
  console.log(key, student[key]);
}

// for...of iterates over values from an iterable such as an array.
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
