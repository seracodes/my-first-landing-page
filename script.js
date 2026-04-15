// BUTTON INTERACTION
const button = document.getElementById("cta-btn");

button.addEventListener("click", () => {
  alert("You are pretty amazing to do that!");
});


// FORM INTERACTION
const form = document.getElementById("signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = form.querySelector("input");
  const emailValue = emailInput.value;

  // Store in browser
  localStorage.setItem("userEmail", emailValue);

  console.log("Saved:", emailValue);
});
