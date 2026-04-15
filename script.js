// BUTTON INTERACTION
const button = document.getElementById("cta-btn");

button.addEventListener("click", () => {
  alert("You are pretty amazing to do that!");
});


// FORM INTERACTION
const form = document.getElementById("signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stops page reload

  alert("Form submitted successfully!");
});