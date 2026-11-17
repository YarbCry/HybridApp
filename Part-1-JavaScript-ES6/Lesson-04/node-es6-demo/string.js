// String literals are the recommended way to create text values.
const course = "JavaScript";
const language = "ES6";
const emptyText = "";

// Strings provide methods for reading, combining, and searching text.
console.log(course);
console.log(language);
console.log(emptyText.length);

// String objects are shown for comparison; prefer primitive string literals.
const wrappedNumber = new String(2026);
const wrappedWord = new String("ES6");
console.log(wrappedNumber);
console.log(wrappedWord);
console.log(typeof wrappedWord);

// String primitives temporarily use String.prototype methods when needed.
console.log(course.constructor === String);
console.log(course.length);
console.log(language.charAt(0));
console.log(language.charAt(2));
console.log(language.charAt(10));
console.log("ABC".charCodeAt(0));
console.log("Java".concat("Script", " ES6"));

const sentence = "ES6 makes JavaScript better, and JavaScript is popular";
console.log(sentence.indexOf("JavaScript"));
console.log(sentence.lastIndexOf("JavaScript"));
console.log(sentence.indexOf("Python"));

// Regular expressions can find, replace, and locate text patterns.
console.log(Math.sign("apple".localeCompare("banana")));
console.log("same".localeCompare("same"));
console.log(Math.sign("zoo".localeCompare("apple")));
console.log("Order 25, Order 40".match(/\d+/g));
const originalMessage = "I learn ES5";
console.log(originalMessage.replace("ES5", "ES6"));
console.log(originalMessage);

const searchableText = "JavaScript ES6";
console.log(searchableText.search(/ES6/));
console.log(searchableText.search(/Python/));

// slice(), substring(), and split() extract or divide text.
console.log(course.slice(0, 4));
console.log(course.slice(4));
console.log(course.slice(-6));

// substr() is deprecated; slice(4, 10) provides the same result here.
console.log(course.slice(4, 10));

console.log(course.substring(0, 4));
console.log(course.substring(4, 10));

const colors = "red,green,blue";
console.log(colors.split(","));
console.log(colors.split(",", 2));
console.log("ES6".split(""));

console.log("VIENTIANE".toLocaleLowerCase());
console.log("javascript".toLocaleUpperCase());
console.log("ES6 String".toLowerCase());
console.log("es6 string".toUpperCase());

console.log(wrappedWord.toString());
console.log(wrappedWord.valueOf());
console.log(typeof wrappedWord.valueOf());

// String methods return new values and do not change the original string.
const text = "  ES6 makes JavaScript easier  ";
const result = text
  .trim()
  .split(" ")
  .map((word) => word.toUpperCase())
  .join("-");

console.log(result);
