// continue skips the current iteration, while break exits the loop.
for (let index = 1; index <= 8; index += 1) {
  if (index === 3) {
    continue;
  }

  if (index === 6) {
    break;
  }

  console.log(index);
}

// return exits the entire function as soon as the result is found.
function findFirstEven(numbers) {
  for (const number of numbers) {
    if (number % 2 === 0) {
      return number;
    }
  }

  return undefined;
}

console.log(findFirstEven([1, 3, 4, 6]));

// A label lets break exit a specific outer loop.
outerLoop: for (let row = 0; row < 3; row += 1) {
  for (let column = 0; column < 3; column += 1) {
    if (row === 1 && column === 1) {
      break outerLoop;
    }

    console.log(row, column);
  }
}
