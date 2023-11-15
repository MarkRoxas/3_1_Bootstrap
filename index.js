let btnRegister = document.querySelector("#btnRegister");
console.log(btnRegister);

const register = () => {
    let txtName = document.querySelector("#txtRegisterName");
    let txtEmail = document.querySelector("#txtRegisterAddress");
    let txtPassword = document.querySelector("#txtRegisterPassword");
    let txtConfirmPassword = document.querySelector("#txtRegConfirmPass");
    let txtModalName = document.querySelector('#txtModalName');
    const genderRadios = document.getElementsByName('radioGender');
    const selectElement = document.getElementsByName('#floatingSlect');
    const txtArea = document.getElementsByName('#txtAdd');
    const modalDate = document.getElementsByName('#txtRegisterBirthdate');

    let selectedGende;
    for (const radio of genderRadios){
        if (radio.checker){
            selectGender = radio.value;
            break;
        }
    }

const selectedOption = selectElement.options[selectElement.selectedIndex];

const selectedValue = selectedOption.value;

    let user = {
        name: txtName.value,
        email: txtEmail.value,
        password: txtPassword.value,
        confirmPassword: txtConfirmPassword.value,
        gender: selectedGender,
        yearLvl: selectedValue,
        address: txtArea.value,
        birthdate: modalDate.value,
    }

    if(!user.email){
        return alert('Email address is required.')
    } else if (!user.name){
        return alert('Name is required!')
    } else if (!user.password || !user.confirmPassword){
        return alert("Password is required.")
    } else if (user.password != user.confirmPassword){
        return alert('Password does not match.')
    } else if (!user.gender){
        return alert('Gender is required!')
    } else if (user.yearLvl == 0){
        return alert('Year lvl is required!')
    } else if (!user.address){
        return alert('Address is required!')
    } else if (!user.birthdate){
        return alert('Birthdate is required!')
    }
    console.log(user.yearLvl);
    
alert(`Welcome ${user.name}. You have been successfully registered.`)
console.log(user);

        localStorage.setItem("user", JSON.stringify(user));
}


let btnModalRegister = document.querySelector('#btnRegister')
btnRegister.addEventListener('click', () => {
    register()
})

let user = JSON.parse(localStorage.getItem('user'))
console.log(`My name is ${user.name} and my email is ${user.email}`);