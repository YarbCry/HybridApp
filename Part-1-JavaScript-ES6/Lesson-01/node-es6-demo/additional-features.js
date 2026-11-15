const course = "JavaScript ES6";
console.log(`Learning ${course}`);

const message = "Hybrid Mobile Application";
console.log(message.includes("Mobile"));
console.log(message.startsWith("Hybrid"));
console.log(message.endsWith("Application"));

const numbers = [10, 20, 30];
console.log(numbers.find((number) => number > 15));
console.log(numbers.findIndex((number) => number === 30));
console.log(Array.from("ES6"));

const addNumbers = (...values) =>
  values.reduce((total, value) => total + value, 0);

console.log(addNumbers(1, 2, 3));

function* createNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

console.log([...createNumbers()]);

const numberIterator = numbers[Symbol.iterator]();
console.log(numberIterator.next().value);

const binaryNumber = 0b1010;
const octalNumber = 0o12;
console.log(binaryNumber, octalNumber);

const topic = "ES6";
const lesson = {
  topic,
  describe() {
    return `This lesson covers ${this.topic}`;
  },
};

console.log(lesson.describe());

const student = {};
const privateNames = new WeakMap();
privateNames.set(student, "Lina");
console.log(privateNames.get(student));

const enrolledStudents = new WeakSet();
enrolledStudents.add(student);
console.log(enrolledStudents.has(student));

const identifier = Symbol("identifier");
student[identifier] = 101;
console.log(student[identifier]);

const settings = new Proxy(
  { theme: "light" },
  {
    get(target, property) {
      return Reflect.get(target, property);
    },
  },
);

console.log(settings.theme);

{
  function showBlockMessage() {
    return "Block-scoped function";
  }

  console.log(showBlockMessage());
}
