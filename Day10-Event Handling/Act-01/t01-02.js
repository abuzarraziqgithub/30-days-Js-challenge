//* Basic Event Handling

//* Add a click event listener to a button that changes the text content of a paragraph.
const body = document.querySelector("body");
const button = document.createElement("button");
const paragraph = document.createElement("p");
button.textContent = "click Me";
paragraph.textContent = "This is a paragraph";
body.append(paragraph);
body.append(button);
button.addEventListener("click", () => {
  paragraph.textContent = "This is an updated paragraph";
});

//* Add a double-click event listener to an image that toggles its visibility.
const image = document.createElement("img");
image.src = "/Day09-DOM Manipulation/Act-04/imgs.jpg";
image.alt = "image";
body.append(image);
image.addEventListener("dblclick", () => {
  image.src = ".....";
  image.alt = "image hidden";
});
