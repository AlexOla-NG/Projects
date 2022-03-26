const diceWrapper = document.querySelector(".dice-wrapper")
const api_url = "https://api.adviceslip.com/advice"

let adviceSlipObject;
let adviceCall;
console.log(adviceSlipObject)

diceWrapper.addEventListener("click", callAPI)

async function callAPI() { //stopped here
    const response = await fetch(api_url)
    // console.log(response)
    const data = await response.json()
    const slip = data.slip
    // console.log(data)
    // adviceSlipObject = data.slip
    // console.log(adviceSlipObject)
    const {id, advice} = slip
    console.log(id, advice)

    return id, advice
}

// function updateAdvice() {
//     console.log()
// }

// console.log(updateAdvice()) //stopped here
callAPI()