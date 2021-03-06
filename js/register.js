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
let numberscase = /[0-9]/g
let emailcase = /[@]/g

username.addEventListener("keyup", ()=>{  
    if(username.value == ""){
        validUsername = false
    }
    else{
        validUsername = true
    }
})
email.addEventListener("keyup", ()=>{
    if(email.value == ""){
        validEmail = false
    }
    else if(!email.value.match(emailcase)){
        validEmail = false
    }
    else{
        validEmail = true
    }
})
password.addEventListener("keyup", ()=>{
    if(password.value == ""){
        validPassword = false
    }
    else if(!password.value.match(uppercaseLetters)){
        validPassword = false
    }
    else if(!password.value.match(numberscase)){
        validPassword = false
    }
    else{
        validPassword = true
    }
})
passwordConfirm.addEventListener("keyup", ()=>{
    if(passwordConfirm.value == ""){
        validPasswordConfirm = false
    }
    else if(!passwordConfirm.value.match(uppercaseLetters)){
        validPasswordConfirm = false
    }
    else if(!passwordConfirm.value.match(numberscase)){
        validPasswordConfirm = false
    }
    else{
        validPasswordConfirm = true
    }
})

register.addEventListener("click", ()=>{
    if(validUsername && validEmail && validPassword && validPasswordConfirm){
        let userList = JSON.parse(localStorage.getItem("userList") || "[]")

        userList.push({userRegister: username.value, emailRegister: email.value, passwordRegister: password.value})

        localStorage.setItem("userList", JSON.stringify(userList))

        popupSucess.classList.add("open-popup")
        popupBG.classList.add("open-bg")
    }
    else{
        popupError.classList.add("open-popup")
        popupBG.classList.add("open-bg")
    }
})

/* Popups */
let popupSucess = document.getElementById("popup-sucess")
let popupError = document.getElementById("popup-error")
let popupBG = document.getElementById("popup-bg")

let buttonSucess = document.getElementById("sucessButton")
let buttonError = document.getElementById("errorButton")

buttonSucess.addEventListener("click", ()=>{
    window.location.href = "login.html"
})

buttonError.addEventListener("click", ()=>{
    popupError.classList.remove("open-popup")
    popupBG.classList.remove("open-bg")
})