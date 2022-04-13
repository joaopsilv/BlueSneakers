/* Name/Profile */
let labelName = document.getElementById("labelName")

labelName.innerHTML = localStorage.getItem("username")

/* Popups */
let popup = document.getElementById("popup-profile")
let popupBG = document.getElementById("popup-bg")

let popupTitle = document.getElementById("popup-title")
let popupText = document.getElementById("popup-text")

let buttonStay = document.getElementById("profileButtonStay")
let buttonOut = document.getElementById("profileButtonOut")

popupTitle.innerHTML = "Olá, " + localStorage.getItem("username") + "!" + "<p>Qual ação gostaria de realizar?</p>"

labelName.addEventListener("click", ()=>{
    popup.classList.add("open-popup")
    popupBG.classList.add("open-bg")

    document.documentElement.style.overflow = 'hidden';
})

buttonStay.addEventListener("click", ()=>{
    popup.classList.remove("open-popup")
    popupBG.classList.remove("open-bg")

    document.documentElement.style.overflow = 'auto';
})

buttonOut.addEventListener("click", ()=>{
    localStorage.removeItem("logUser")
    localStorage.removeItem("username")

    window.location.href = "index.html"
})