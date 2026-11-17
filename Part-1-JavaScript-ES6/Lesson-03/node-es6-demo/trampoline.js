// A normal recursive function adds a new frame to the call stack each time.
const sumRecursive = (number) =>
  number === 0 ? 0 : number + sumRecursive(number - 1);

console.log(sumRecursive(5));
console.log(sumRecursive(13));

// Tail recursion carries the accumulated result into the next call.
// JavaScript runtimes do not always optimize tail calls, so use small input here.
const sumTail = (number) => {
  const step = (result, current) =>
    current === 0 ? result : step(result + current, current - 1);

  return step(0, number);
};

console.log(sumTail(5));

// A trampoline repeatedly runs returned functions inside a loop.
const trampoline = (functionToRun) =>
  (...argumentsToUse) => {
    let result = functionToRun(...argumentsToUse);

    while (typeof result === "function") {
      result = result();
    }

    return result;
  };

// Instead of calling itself directly, this function returns the next step.
const sumCalculation = (number, sum = 0) =>
  number === 0
    ? sum
    : () => sumCalculation(number - 1, sum + number);

// For sumCalculation(3), each thunk represents the next step:
// (3, 0) -> (2, 3) -> (1, 5) -> (0, 6) -> 6.

// The wrapped function can safely process a much larger input.
const sum = trampoline(sumCalculation);

console.log(sum(5));
console.log(sum(1_000_000));
