// Run a block only when its condition is true.
const number = 10;

if (number > 0) {
  console.log(`${number} is positive`);
}

// Choose between two possible blocks with if...else.
const a = 10;
const b = 20;

if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}

// Check several conditions from top to bottom with else if.
const score = 82;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// A nested decision can compare values in stages.
const x = 10;
const y = 20;
const z = 8;
let greatest;

if (y > x) {
  greatest = y > z ? y : z;
} else {
  greatest = x > z ? x : z;
}

console.log(greatest);

// switch is useful when one value is compared with several known cases.
const day = 4;

switch (day) {
  case 0:
    console.log("Monday");
    break;
  case 4:
    console.log("Friday");
    break;
  default:
    console.log("Unknown day");
}

// Multiple cases can share the same block when they have the same behavior.
const role = "editor";

switch (role) {
  case "admin":
  case "editor":
    console.log("Can edit");
    break;
  default:
    console.log("Read only");
}

// A ternary expression returns one of two values.
const age = 20;
const ageGroup = age >= 18 ? "Adult" : "Minor";
console.log(ageGroup);

// An empty string is falsy, so the second message is selected.
const name = "";
console.log(name ? "Name exists" : "Name is empty");
