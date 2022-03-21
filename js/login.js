/* Login */
let login = document.getElementById("loginButton")


let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")

let userList = []
let userValid = {
    user: ""
    , email: ""
    , password: ""
}

userList = JSON.parse(localStorage.getItem("userList"))

userList.forEach((item) =>{
    if (email.value == item.emailRegister && password.value == item.passwordRegister){
        userValid = {
            user: item.userRegister
            , email: item.emailRegister
            , password: item.passwordRegister
        }
    }
})

login.addEventListener("click", ()=>{
    if(email.value == userValid.email && password.value == userValid.password){
        if(email.value < 1 && password.value < 1){
            popupError.classList.add("open-popup")
        }
        else{
            popupSucess.classList.add("open-popup")
        }
    }
    else{
        popupError.classList.add("open-popup")
    }
})

/* Popups */
let popupSucess = document.getElementById("popup-sucess")
let popupError = document.getElementById("popup-error")

let buttonSucess = document.getElementById("sucessButton")
let buttonError = document.getElementById("errorButton")

buttonSucess.addEventListener("click", ()=>{
    window.location.href = "home.html"
})

buttonError.addEventListener("click", ()=>{
    popupError.classList.remove("open-popup")
})