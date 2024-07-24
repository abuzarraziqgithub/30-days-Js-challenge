//* Event Delegation
const ulDelegation = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
li1.textContent = "List1";
li2.textContent = "List2";
li3.textContent = "List3";
li4.textContent = "List4";
ulDelegation.append(li1);
ulDelegation.append(li2);
ulDelegation.append(li3);
ulDelegation.append(li4);
body.append(ulDelegation);
//* Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
//* Add an event listener to a parent element that listens for events from dynamically added child elements.
ulDelegation.addEventListener("click", e => {
  console.log(` ${e.target.textContent}`);
});
