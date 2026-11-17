// Display all dialog results in the same page element.
const result = document.querySelector("#result");

// preventDefault() stops navigation while still allowing the link action.
document.querySelector("#actionLink").addEventListener("click", (event) => {
  event.preventDefault();
  document.body.style.backgroundColor = "lightcoral";
  result.textContent = "The background color was changed.";
});

document
  .querySelector("#resetBackgroundButton")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "";
    result.textContent = "The background color was reset.";
  });

// alert() displays a message and waits for the user to select OK.
document.querySelector("#alertButton").addEventListener("click", () => {
  alert("This is an alert dialog box");
  result.textContent = "The alert was closed.";
});

// confirm() returns true for OK and false for Cancel.
document.querySelector("#confirmButton").addEventListener("click", () => {
  const accepted = confirm("Do you want to continue?");
  result.textContent = accepted
    ? "User wants to continue."
    : "User cancelled.";
});

// prompt() returns the entered text, or null when the user cancels.
document.querySelector("#promptButton").addEventListener("click", () => {
  const name = prompt("Enter your name:", "Guest");
  result.textContent =
    name === null ? "Input cancelled." : `You entered: ${name}`;
});

// prompt() always returns text or null, so numeric input must be converted.
document.querySelector("#ageButton").addEventListener("click", () => {
  const input = prompt("Enter your age:");

  if (input === null) {
    result.textContent = "Age input cancelled.";
    return;
  }

  const age = Number(input);

  result.textContent = Number.isNaN(age)
    ? "Invalid number."
    : `Your age is ${age}.`;
});
