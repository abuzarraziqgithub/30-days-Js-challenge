//* Event Handling

//* Add a click event Listener to a button that changes the text content of a paragraph.
const button = document.createElement("button");
const body = document.querySelector("body");
button.textContent = "Button Created";
button.style.backgroundColor = "#456d37";
button.style.color = "#ffffff";
button.style.border = "3px solid crimson";
button.style.borderRadius = "5px";
button.style.padding = "10px";

const paragraph = document.createElement("p");
paragraph.textContent =
  "Hello, I am Abuzar RaziQ. I am currently learning React and JavaScript ";
body.append(paragraph);
body.appendChild(button);

button.addEventListener("click", () => {
  paragraph.textContent =
    "You successfully Clicked on a button and the paragraph changed😱";
});

//* Add a mouseover event listener to an element that changes its border color.
button.addEventListener("mouseover", () => {
  button.style.border = "2px solid blue";
});
