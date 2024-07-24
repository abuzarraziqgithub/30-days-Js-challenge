//* Form Events

const form = document.createElement("form");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
form.append(input1);
form.appendChild(input2);
form.appendChild(submitBtn);
body.append(form);
//* Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
form.addEventListener("submit", e => {
  e.preventDefault();
  console.log(input1.value);
  console.log(input2.value);
});

//* Add a chnage event listener to a select dropdown that displays the selected value in a pragraph.
