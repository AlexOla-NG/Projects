const diceWrapper = document.querySelector(".dice-wrapper")
const adviceNumber = document.querySelector("#advice-number")
const adviceContent = document.querySelector(".advice-content")
const api_url = "https://api.adviceslip.com/advice"

diceWrapper.addEventListener("click", callAPI)

async function callAPI() {
    //call API, save response as id, advice
    //create function to parse advice to HTML

    const response = await fetch(api_url)
    const data = await response.json()
    const slip = data.slip
    const {id, advice} = slip
    
    function updateAdvice() {
        adviceNumber.textContent = id
        adviceContent.textContent = `"${advice}"`
    }
    
    updateAdvice()
}

callAPI()