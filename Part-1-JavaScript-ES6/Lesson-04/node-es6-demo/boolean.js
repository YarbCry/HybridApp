// Boolean primitives can hold only true or false.
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);

// Boolean() converts other values according to truthy and falsy rules.
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("ES6"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

// A Boolean wrapper is an object, so it is truthy even when it contains false.
const primitiveValue = false;
const objectValue = new Boolean(false);

console.log(typeof primitiveValue);
console.log(typeof objectValue);
console.log(Boolean(objectValue));

// The constructor property points to the Boolean constructor function.
const status = true;
console.log(status.constructor === Boolean);
console.log(status.constructor.name);

// Avoid changing Boolean.prototype; a helper function is safer and clearer.
const toYesNo = (value) => (Boolean(value) ? "Yes" : "No");
console.log(toYesNo(true));

// valueOf() returns the primitive value, while toString() returns text.
const wrappedValue = new Boolean(true);
const wrappedFalse = new Boolean(false);
console.log(wrappedValue.valueOf());
console.log(wrappedValue.toString());
console.log(wrappedFalse.toString());
console.log(typeof wrappedValue.toString());

// toSource() is non-standard and unavailable in most modern runtimes.
console.log(typeof wrappedValue.toSource);

// Comparisons produce Boolean values that can control program decisions.
const age = 20;
const canRegister = age >= 18;

if (canRegister) {
  console.log("Registration allowed");
} else {
  console.log("Registration denied");
}
