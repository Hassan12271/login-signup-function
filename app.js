let userEmail = document.querySelector("#user_email");
let userName = document.querySelector("#user_name");
let userPassword = document.querySelector("#user_password");
let errorBox = document.querySelector("#errorBox");

let userDataBase = JSON.parse(localStorage.getItem("users")) || [];

function SignUp() {
    if (!userName.value || !userEmail.value || !userPassword.value) {
        errorBox.style.display = "block";
        errorBox.innerText = "Please fill in all fields correctly.";
        return;
    }

    let user = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    };

    errorBox.style.display = "none";

    // Push user to database array
    userDataBase.push(user);

    // Save all users to localStorage
    localStorage.setItem("users", JSON.stringify(userDataBase));

    // ✅ Save current user separately
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Clear form
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";

    // Redirect
    setTimeout(() => {
        window.location.href = "product.html";
    }, 1000);
}
