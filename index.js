const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Toggle between Sign Up and Sign In
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Validation and Password Matching for Sign Up
const signUpForm = document.querySelector(".sign-up form");
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = signUpForm
    .querySelector('input[placeholder="Name"]')
    .value.trim();
  const email = signUpForm
    .querySelector('input[placeholder="Email"]')
    .value.trim();
  const number = signUpForm
    .querySelector('input[placeholder="Number"]')
    .value.trim();
  const password = signUpForm
    .querySelector('input[placeholder="Password"]')
    .value.trim();
  const confirmPassword = signUpForm
    .querySelector('input[placeholder="Confirm Password"]')
    .value.trim();

  // Check if all fields are filled
  if (!name || !email || !number || !password || !confirmPassword) {
    alert("Please fill in all fields!");
    return;
  }

  // Password matching check
  if (password !== confirmPassword) {
    alert("Passwords do not match! Please try again.");
    return;
  }

  // If all validations pass
  alert("Account created successfully!");
  // Optionally submit the form here:
  // signUpForm.submit();
});
