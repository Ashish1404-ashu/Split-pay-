document.addEventListener("DOMContentLoaded", () => {

  /* ========== LOGIN FORM ========== */
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email === "" || password === "") {
        alert("All fields are required");
        return;
      }

      if (!email.includes("@")) {
        alert("Enter valid email");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }

      alert("Login successful");
      loginForm.reset();
    });
  }

  /* ========== SIGNUP FORM ========== */
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirm = document.getElementById("confirm").value.trim();

      if (!name || !email || !password || !confirm) {
        alert("All fields are required");
        return;
      }

      if (!email.includes("@")) {
        alert("Enter valid email");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }

      if (password !== confirm) {
        alert("Passwords do not match");
        return;
      }

      alert("Signup successful");
      signupForm.reset();
    });
  }

  /* ========== CONTACT FORM ========== */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
      }

      if (!email.includes("@")) {
        alert("Enter valid email");
        return;
      }

      alert("Message sent successfully");
      contactForm.reset();
    });
  }

});