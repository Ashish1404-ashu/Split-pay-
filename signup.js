const form = document.getElementById("signupForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
        alert("Signup successful ✅");
        window.location.href = "login.html";
    } else {
        alert("Error ❌");
    }
});