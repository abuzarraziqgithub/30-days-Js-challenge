//* Keyboard Events

//* Add a keydown event listener to an input field that logs the key presses to the console.
const input = document.createElement("input");
body.append(input);
input.addEventListener("keydown", () => {
  //   console.log(input.value);
});

//* Add a keyup event listener to an input field that displays the current value in a pragraph.
const inputParagraph = document.createElement("p");
body.append(inputParagraph);
input.addEventListener("keyup", () => {
  inputParagraph.textContent = input.value;
});
