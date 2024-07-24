//* Creating and Appending Elements

//* Create a new div element with some text content and append it to the body.
const div = document.createElement("div");
div.textContent = "Div Created";
document.querySelector("body").append(div);

//* Create a new li element and add it to an existing ui list.
const ulList = document.querySelector(".ulList");
const newLi = document.createElement("li");
ulList.appendChild(newLi);
newLi.textContent = "New Li created";
