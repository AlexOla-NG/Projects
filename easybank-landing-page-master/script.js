const hamburger = document.querySelector("#hamburger")
const navList = document.querySelector(".nav-list")

let menuOpen = false

console.dir(hamburger)

//use anonymous function to avoid hoisting
hamburger.addEventListener("click", () => { 
    if (!menuOpen) {
        hamburger.setAttribute("src", "./images/icon-close.svg")
        navList.classList.toggle("show")
        menuOpen = true
    } else {
        hamburger.setAttribute("src", "./images/icon-hamburger.svg")
        navList.classList.toggle("show")
        menuOpen = false
    }
})