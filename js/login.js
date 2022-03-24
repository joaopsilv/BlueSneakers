/* Login */
let login = document.getElementById("loginButton")

let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")

login.addEventListener("click", ()=>{
    let userList = JSON.parse(localStorage.getItem("userList"))

    const userRequirements = (storageUser) =>{
        return (email.value == storageUser.emailRegister && password.value == storageUser.passwordRegister)
    }

    const userValid = userList.some(userRequirements)

    if(userValid){
        popupSucess.classList.add("open-popup")
    }
    else{
        popupError.classList.add("open-popup")    
    }
    
    for(let i = 0; i < userList.length; i++){
        if(email.value == userList[i].emailRegister && password.value == userList[i].passwordRegister){
            localStorage.setItem("logUser", true)
            localStorage.setItem("username", userList[i].userRegister)
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