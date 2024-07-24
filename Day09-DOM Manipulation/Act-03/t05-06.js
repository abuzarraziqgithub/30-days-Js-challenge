//* Removing Elements

//* Select and HTML element and remove it from the DOM.
//* Remove the last child of a specific HTML element.

const h3Element = document.querySelector(".h3").remove();

const ulList2 = document.querySelector(".ulList");
ulList2.lastChild.remove();
