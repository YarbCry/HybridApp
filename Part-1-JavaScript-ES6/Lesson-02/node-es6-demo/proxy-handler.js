// This object is the original target that the Proxy will wrap.
const target = {
  id: 1,
  name: "Noy",
  age: 20,
  secret: "hidden",
  temporary: "remove me",
};

// Proxy traps let us customize common object operations.
const user = new Proxy(target, {
  // The get trap controls what happens when a property is read.
  get(currentTarget, property, receiver) {
    if (property === "secret") {
      return "Private value";
    }

    return Reflect.get(currentTarget, property, receiver);
  },

  // The set trap validates a value before updating the target.
  set(currentTarget, property, value, receiver) {
    if (property === "age" && (!Number.isInteger(value) || value < 0)) {
      throw new TypeError("Age must be a non-negative integer");
    }

    return Reflect.set(currentTarget, property, value, receiver);
  },

  // The has trap controls the behavior of the in operator.
  has(currentTarget, property) {
    if (property === "secret") {
      return false;
    }

    return Reflect.has(currentTarget, property);
  },

  // The deleteProperty trap can protect fields or allow normal deletion.
  deleteProperty(currentTarget, property) {
    if (property === "id") {
      return false;
    }

    return Reflect.deleteProperty(currentTarget, property);
  },
});

console.log(user.name);
console.log(user.secret);

// This assignment passes the age validation in the set trap.
user.age = 25;
console.log(user.age);
console.log("secret" in user);

// This deletion is allowed and forwarded to the target with Reflect.
console.log(delete user.temporary);
console.log("temporary" in user);
