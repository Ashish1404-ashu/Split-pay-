console.log("login.js loaded");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Login successful ✅");
        window.location.href = "payment.html";
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Backend not connected ❌");
      console.error(err);
    }
  });
});