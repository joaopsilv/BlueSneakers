/* Name/Profile */
let labelName = document.getElementById("labelName")

labelName.innerHTML = localStorage.getItem("username")

/* Popups */
let popup = document.getElementById("popup-profile")

let popupTitle = document.getElementById("popup-title")
let popupText = document.getElementById("popup-text")

let buttonStay = document.getElementById("profileButtonStay")
let buttonOut = document.getElementById("profileButtonOut")

popupTitle.innerHTML = "Olá, " + localStorage.getItem("username") + "!" + "<p>Qual ação gostaria de realizar?</p>"

labelName.addEventListener("click", ()=>{
    popup.classList.add("open-popup")
})

buttonStay.addEventListener("click", ()=>{
    popup.classList.remove("open-popup")
})

buttonOut.addEventListener("click", ()=>{
    localStorage.removeItem("logUser")
    localStorage.removeItem("username")

    window.location.href = "index.html"
})