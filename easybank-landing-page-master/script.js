const hamburger = document.querySelector("#hamburger")
const navList = document.querySelector(".nav-list")

console.log(navList.classList)

hamburger.addEventListener("click", displayMenu)

function displayMenu() { //stopped here
    navList.classList.toggle(".show")
}