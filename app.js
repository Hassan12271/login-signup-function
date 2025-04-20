let userEmail = document.querySelectorAll("#user_email")[0];
let userPassword = document.querySelectorAll("#user_password")[0];

let userDataBase = [];

function login(btn){
    let user = {
        email : userEmail.value,
        password : userPassword.value
    }
    console.log(userDataBase);
    if(!userEmail.value || !userPassword.value){
        alert("inset a fields")
    }
    else{
        userDataBase.push(user);
        userEmail.value = "";
        userPassword.value = "";

        setTimeout(function (){
            window.location.href = "product.html";
        } , 1000)
    }
}