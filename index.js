console.log("hello world");
// let btnRegister = document.getElementById("btnRegister");
let btnRegister = document.querySelector("#btnRegister");
let btnLogin = document.querySelector("#btnLogin");
let btnLogout = document.querySelector("#btnRegister");

//console.log(btnRegister);
function getUsers(){
    let users = localStorage.getItem("users");
    if (users != null) users = JSON.parse(users);
    else users = null;
    return users;  
}

function registerUser(){
    let name = document.querySelector("#txtRegister");
    let email = document.querySelector("#txtemail");
    let password = document.querySelector("#txtPassword");
    let confirmPassword = document.querySelector("#txtConfirmPassword");
    
    let users = getUsers();

    let user = {
        name:name.value,
        email:email.value,
        password:password.value,
        confirmPassword:confirmPassword.value
    }
    typeof user;
    console.log("button register is clicked", user);
    
    var form_check = document.getElementById('form-check').value;
    var radioGender;
    if(form-check == 'radioGender1'){
        radioGender = document.getElementById('gender1').value;
    }else if(form-check == 'radioGender2'){
        radioGender = document.getElementById('gender2').value;
    }else if(form-check == 'radioGender3'){
        radioGender = document.getElementById('gender3').value;
    }
    document.getElementById('gender').innerHTML = radioGender;

    function getTextareaValue() {
    var textareaElement = document.getElementById("txtaddress");
    var addressValue = textareaElement.value;
    console.log("The entered address is: " + addressValue);
    }
    function getDateValue() {
        var dateInput = document.getElementById("floatingDate");
        var birthdateValue = dateInput.value;
        console.log("The entered birthdate is: " + birthdateValue);
    }
}

if (!user.email)
    alert("email is required");
    else if (
        users.findIndex((u) => {
            return u.email == user.email;
        }) != -1
    ) {
        return alert ("Email is already taken.");
}       else if(!user.name){
    return alert("Name is required");
}       else if(user.password || user.password) {
    return alert("password is required");
}       else if(user.password != user.confirmPassword) {
    return alert("password does not match");

    if (users != null && users.length > 0) {
        users.push(user)
    } else users = [user];

    localStorage.setItem("user", JSON.stringify(user));
    alert(`User ${user.name} has been successfully registered.`);
    let btnModalRegisterClose = document.querySelector("#btnModalRegisterClose").click();
    //btnModalRegisterClose.click()

    name.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
}

function loginUser(email, password){
    let users = getUsers();

    let userIndex = users.findIndex != -1;
    let isUserExist = 
    users.findIndex((u)=>{
        return u.mail == email && u.password == password;
    }) != -1;

    if (!isUserExist) 
        alert('Email or password is invalid.');

    document.querySelector("#containerProducts");
    document.querySelector("#containerLogin");

    alert(`Welcome ${users[userIndex].name}`)
    localStorage.setItem("isLogin", true);
    document.querySelector("#btnLogout").hiddeen = false;
    
}

btnRegister.onClick = () => {
    registerUser();
    form_check();
    getTextareaValue();
    getDateValue();
}
btnLogin.onClick = () => {
    let txtLoginEmail = document.querySelector("#txtLoginEmail");
    let txtLoginPassword = document.querySelector("#txtLoginPassword");
    loginUser(txtLoginEmail.value, txtLoginPassword.value);
};

btnLogout.onClick = () => {
    localStorage.setItem("isLogin", false);
    document.querySelector("#btnLogout").hiddeen = true;
    containerProducts.hiddeen = true;
    containerProducts.hiddeen = false;
    document.querySelector("#txtLoginEmail").value = "";
    document.querySelector("#txtLoginPassword").value = "";
};
