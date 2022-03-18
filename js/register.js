/* Register */
let register = document.getElementById("registerButton")

let username = document.getElementById("inputUsername")
let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")
let passwordConfirm = document.getElementById("inputPasswordConfirm")

let validUsername = false
let validEmail = false
let validPassword = false
let validPasswordConfirm = false

let uppercaseLetters = /[A-Z]/g
let numbers = /[0-9]/g

username.addEventListener("keypress", ()=>{  
    if(username.value.length > 0){
        validUsername = true
    }
    else{
        validUsername = false
    }
})
email.addEventListener("keypress", ()=>{
    if(email.value.length > 0){
        validEmail = true
    }
    else{
        validEmail = false
    }
})
password.addEventListener("keypress", ()=>{
    if(password.value.length > 0 && password.value.length >= 8
    && password.value.match(uppercaseLetters) && password.value.match(numbers)){
        validPassword = true
    }
    else{
        validPassword = false
    }
})
passwordConfirm.addEventListener("keypress", ()=>{
    if(passwordConfirm.value.length > 0 && passwordConfirm.value.length >= 8
    && passwordConfirm.value.match(uppercaseLetters) && passwordConfirm.value.match(numbers)
    && passwordConfirm === password){
        validPasswordConfirm = true
    }
    else{
        validPasswordConfirm = false
    }
})

register.addEventListener("click", ()=>{
    if(validUsername && validEmail && validPassword && validPasswordConfirm){
        let userList = JSON.parse(localStorage.getItem("userList") || "[]")

        userList.push({userRegister: username.value, emailRegister: email.value, passwordRegister: password.value})

        localStorage.setItem("userList", JSON.stringify(userList))

        alert("sucesso!")
    }
    else{
        alert("erro!")
    }
})