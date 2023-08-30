document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const emailLabel = document.getElementById("emailLabel");
  const nameLabel = document.getElementById("nameLabel");

  form.addEventListener("submit", (e) => {
    if (
      emailInput.value === "" ||
      emailInput.value === null ||
      nameInput.value === undefined
    ) {
      emailInput.style.borderColor = "red";
      emailInput.style.color = "red"
      emailLabel.style.color = "red";
      emailLabel.textContent = "Please enter a valid Email Address";
      e.preventDefault();
    } else if (
      !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    ) {
      emailInput.style.borderColor = "red";
      emailLabel.style.color = "red";
      emailLabel.textContent = "Please Enter A valid Email Address";
      e.preventDefault();
    } else if (
      nameInput.value === "" ||
      nameInput.value === undefined ||
      nameInput.value === null
    ) {
      nameInput.style.borderColor = "red";
      nameLabel.style.color = "red";
      nameLabel.textContent = "Please enter your name";
      e.preventDefault();
    }
  });
    
});
