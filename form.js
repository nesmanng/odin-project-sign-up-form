function createAccount() {
    const form = document.getElementById("sign-up-form");
  
    // Get all input fields
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
  
    let hasError = false; // Flag to indicate any errors
  
    // Validation logic with inline error messages using nextElementSibling
    if (firstNameInput.value === "") {
      hasError = true;
      firstNameInput.nextElementSibling.textContent = "This field is required.";
    }
  
    if (lastNameInput.value === "") {
      hasError = true;
      lastNameInput.nextElementSibling.textContent = "This field is required.";
    }
  
    if (emailInput.value === "") {
      hasError = true;
      emailInput.nextElementSibling.textContent = "This field is required.";
    } else if (!emailInput.value.includes("@")) {
      hasError = true;
      emailInput.nextElementSibling.textContent = "Email must be valid.";
      emailInput.style.border = "2px solid red";
    }
  
    if (phoneInput.value === "") {
      hasError = true;
      phoneInput.nextElementSibling.textContent = "This field is required.";
    } else if (phoneInput.value.length !== 10) {
      hasError = true;
      phoneInput.nextElementSibling.textContent = "Phone number must be valid.";
      phoneInput.style.border = "2px solid red";
    }
  
    const hasUppercase = /[A-Z]/.test(passwordInput.value);
    const hasLowercase = /[a-z]/.test(passwordInput.value);
    const hasNumber = /[0-9]/.test(passwordInput.value);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordInput.value);
  
    if (passwordInput.value === "") {
      hasError = true;
      passwordInput.nextElementSibling.textContent = "This field is required.";
    } else if (passwordInput.value.length < 8) {
      hasError = true;
      passwordInput.nextElementSibling.textContent = "Password must be at least 8 characters.";
      passwordInput.style.border = "2px solid red";
    } else if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
      hasError = true;
      passwordInput.nextElementSibling.textContent = "Password must contain at least one uppercase letter, lowercase letter, number, and special character.";
      passwordInput.style.border = "2px solid red";
    }
  
    if (confirmPasswordInput.value === "") {
      hasError = true;
      confirmPasswordInput.nextElementSibling.textContent = "This field is required.";
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      hasError = true;
      confirmPasswordInput.nextElementSibling.textContent = "Passwords must match.";
      confirmPasswordInput.style.border = "2px solid red";
    }
  
    // Prevent form submission if there are errors
    if (hasError) {
      return;
    }
  
    // Simulate form submission (replace with actual logic)
    if (form) {
      form.submit();
    } else {
      console.error("Form not found!");
    }
  }
  
  // Attach event listener to the button
  const createAccountButton = document.getElementById("create-account");
  createAccountButton.addEventListener("click", createAccount);
  