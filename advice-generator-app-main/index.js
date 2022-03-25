const diceWrapper = document.querySelector(".dice-wrapper")
console.log(diceWrapper)

diceWrapper.addEventListener("click", updateAdvice)

function updateAdvice(event) {
    console.log(event.target)
}

updateAdvice() //stopped here