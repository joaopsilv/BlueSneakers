/* Password Reveal */
let inputPassword = document.getElementById("inputPassword")

let passwordState = document.getElementsByClassName("password-state")[0]
let iconP = document.getElementById("iconPassword")

passwordState.addEventListener("click", ()=>{
    iconP.classList.toggle("fa-eye-slash")
    iconP.classList.toggle("fa-eye")
    
    if(inputPassword.type == "password"){
        inputPassword.type = "text"
    }
    else{
        inputPassword.type = "password"
    }
})

/* PasswordConfirm Reveal */
let inputPasswordConfirm = document.getElementById("inputPasswordConfirm")

let passwordConfirmState = document.getElementsByClassName("passwordconfirm-state")[0]
let iconPC = document.getElementById("iconPasswordConfirm")

passwordConfirmState.addEventListener("click", ()=>{
    iconPC.classList.toggle("fa-eye-slash")
    iconPC.classList.toggle("fa-eye")
    
    if(inputPasswordConfirm.type == "password"){
        inputPasswordConfirm.type = "text"
    }
    else{
        inputPasswordConfirm.type = "password"
    }
})