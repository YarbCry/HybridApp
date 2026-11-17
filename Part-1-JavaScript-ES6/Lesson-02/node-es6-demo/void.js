// The function still runs even when its return value is discarded by void.
function showMessage() {
  console.log("Function executed");
  return 100;
}

const result = void showMessage();

console.log(result);
// void 0 is an older way to produce the value undefined.
console.log(void 0);
