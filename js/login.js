/* Login */
let login = document.getElementById("loginButton")

let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")

login.addEventListener("click", ()=>{
    let userList = []
    let userValid = []
    
    userList = JSON.parse(localStorage.getItem("userList"))
    
    userList.forEach((user) =>{
        if(email.value == user.emailRegister && password.value == user.passwordRegister){
            userValid = [...userValid,{
                    user: user.userRegister
                    , email: user.emailRegister
                    , password: user.passwordRegister
                }
            ]
        }
    })

    for(let i = 0; i < userValid.length; i++){
        if(email.value == userValid[i].email && password.value == userValid[i].password){
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
    }

    for(let i = 0; i < userValid.length; i++){
        if(email.value == userValid[i].email && password.value == userValid[i].password){
            localStorage.setItem("logUser", true)
            localStorage.setItem("username", userValid[i].user)
        }
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