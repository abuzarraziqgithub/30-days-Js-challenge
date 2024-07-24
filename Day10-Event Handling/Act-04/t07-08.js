//* Form Events

const form = document.createElement("form");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const submitBtn = document.createElement("button");
const formParagraph = document.createElement("p");
submitBtn.textContent = "Submit";
form.append(input1);
form.appendChild(input2);
form.appendChild(submitBtn);
body.append(form);
//* Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
form.addEventListener("submit", e => {
  e.preventDefault();
  //   console.log(input1.value);
  //   console.log(input2.value);
  formParagraph.textContent = input1.value;
  form.append(formParagraph);
});

//* Add a change event listener to a select dropdown that displays the selected value in a pragraph.
const select = document.createElement("select");
const option = document.createElement("option");
const option2 = document.createElement("option");
const dropdownpragraph = document.createElement("p");
option.textContent = "Option1";
option2.textContent = "Option2";

select.append(option);
select.append(option2);
body.append(select);
body.append(dropdownpragraph);

select.addEventListener("change", () => {
  dropdownpragraph.textContent = select.value;
});
