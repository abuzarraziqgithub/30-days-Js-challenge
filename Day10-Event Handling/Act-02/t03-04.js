//* Mouse Events

const h2 = document.createElement("h2");
h2.style.backgroundColor = "crimson";
h2.textContent = "Hello";
body.append(h2);
//* Add a mouseover event listener to an element that changes it's background color.
h2.addEventListener("mouseover", () => {
  h2.style.backgroundColor = "yellow";
});
//* Add a mouseout event listener to an element that resets it's background color
h2.addEventListener("mouseout", () => {
  h2.style.backgroundColor = "crimson";
});
