let userEmail = document.querySelector("#user_email");
let userName = document.querySelector("#user_name");
let userPassword = document.querySelector("#user_password");
let userImage = document.querySelector("#user_image");
let errorBox = document.querySelector("#errorBox");

function getBase64(file, callback) {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
}

function SignUp() {
  if (!userName.value || !userEmail.value || !userPassword.value) {
    errorBox.style.display = "block";
    errorBox.innerText = "Please fill in all fields.";
    return;
  }

  const file = userImage.files[0];
  if (file) {
    getBase64(file, (imageBase64) => {
      saveUser(imageBase64);
    });
  } else {
    saveUser(null);
  }
}

function saveUser(imageBase64) {
  let user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    image: imageBase64
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Reset
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
  userImage.value = "";

  setTimeout(() => {
    window.location.href = "product.html";
  }, 1000);
}