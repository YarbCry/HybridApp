// Reuse these elements across several event handlers.
const status = document.querySelector("#status");
const title = document.querySelector("#title");
const box = document.querySelector("#box");
const nameInput = document.querySelector("#name");
const mediaDemo = document.querySelector("#mediaDemo");

// A named handler can be added and later removed with the same reference.
const clickButton = document.querySelector("#clickButton");

function handleClick() {
  status.textContent = "Button clicked";
}

clickButton.addEventListener("click", handleClick);

document
  .querySelector("#removeClickListenerButton")
  .addEventListener("click", () => {
    clickButton.removeEventListener("click", handleClick);
    status.textContent = "The click listener was removed";
  });

// The once option automatically removes this listener after its first run.
document.querySelector("#onceButton").addEventListener(
  "click",
  () => {
    status.textContent = "This listener runs only once";
  },
  { once: true },
);

// Mouseover and mouseout provide visual feedback on the heading.
title.addEventListener("mouseover", () => {
  title.style.color = "green";
});

title.addEventListener("mouseout", () => {
  title.style.color = "black";
});

// Mouse button and wheel events update the demonstration box.
box.addEventListener("mousedown", () => {
  box.textContent = "Pressed";
});

box.addEventListener("mouseup", () => {
  box.textContent = "Released";
});

box.addEventListener("mousemove", (event) => {
  status.textContent = `Mouse position: ${event.offsetX}, ${event.offsetY}`;
});

box.addEventListener(
  "wheel",
  () => {
    box.textContent = "Wheel moved";
  },
  { passive: true },
);

// Prevent the form's default page reload so JavaScript can validate the input.
document.querySelector("#userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  status.textContent = name ? `Welcome, ${name}` : "Name is required";
});

// Input and focus events report how the text field is being used.
nameInput.addEventListener("input", () => {
  status.textContent = `Input length: ${nameInput.value.length}`;
});

nameInput.addEventListener("change", () => {
  status.textContent = `Confirmed value: ${nameInput.value}`;
});

nameInput.addEventListener("focus", () => {
  status.textContent = "Name input focused";
});

nameInput.addEventListener("blur", () => {
  status.textContent = "Name input lost focus";
});

nameInput.addEventListener("select", () => {
  status.textContent = "Text selected";
});

// Keyboard events can be handled at the document level.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    status.textContent = "Escape pressed";
  }
});

// Capture runs before the target phase, and bubbling runs after it.
const outerBox = document.querySelector("#outerBox");

outerBox.addEventListener(
  "click",
  () => {
    console.log("Parent listener: capturing phase");
  },
  { capture: true },
);

outerBox.addEventListener("click", () => {
  console.log("Parent listener: bubbling phase");
});

document.querySelector("#innerButton").addEventListener("click", () => {
  console.log("Button listener: target phase");
});

document
  .querySelector("#stopPropagationButton")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    status.textContent = "Bubbling was stopped at the button";
  });

// Event delegation uses one parent listener for every item button.
document.querySelector("#list").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");

  if (!button) {
    return;
  }

  status.textContent = `Selected item ${button.dataset.id}`;
});

// A selected local file gives the media element something safe to play.
let mediaUrl;

document.querySelector("#mediaFile").addEventListener("change", (event) => {
  const [file] = event.target.files;

  if (!file) {
    return;
  }

  if (mediaUrl) {
    URL.revokeObjectURL(mediaUrl);
  }

  mediaUrl = URL.createObjectURL(file);
  mediaDemo.src = mediaUrl;
  status.textContent = `Loaded media: ${file.name}`;
});

mediaDemo.addEventListener("play", () => {
  status.textContent = "Media play requested";
});

mediaDemo.addEventListener("playing", () => {
  status.textContent = "Media is playing";
});

mediaDemo.addEventListener("pause", () => {
  status.textContent = "Media is paused";
});

mediaDemo.addEventListener("waiting", () => {
  status.textContent = "Media is waiting for data";
});

// Passive listeners are suitable when the handler never cancels scrolling.
window.addEventListener(
  "scroll",
  () => {
    console.log(`Scroll position: ${window.scrollY}`);
  },
  { passive: true },
);
