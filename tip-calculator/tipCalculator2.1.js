//create variables
const bill = document.querySelector("input#userInpBill")
const buttons = document.querySelectorAll("button.btn")
const customInp = document.querySelector("input#custom-inp")
const numberOfPeople = document.querySelector("input#number-of-people")
const tipAmount = document.querySelector("#tipAmount")
const totalAmount = document.querySelector("#totalAmount")
const resetBtn = document.querySelector("button#reset-btn")


let billValue = 0.00 //default bill value #userInpBill
let tipBtn = 0.15 //default tipBtn value button.btn
let customInpValue = 0 //default custom tip input value input#custom-inp
let people = 1 //default custom value input#number-of-people

//create eventListeners
bill.addEventListener("input", addBill)

buttons.forEach((btn) => {
    btn.addEventListener("click", selectBtn)
})

customInp.addEventListener("input", selectCustomInp)

numberOfPeople.addEventListener("input", addPeople)

resetBtn.addEventListener("click", reset)

//create functions
function addBill() {
    billValue = bill.value
    tipCalculator()
}

function selectBtn(event) {
    buttons.forEach((btn) => {
        if(event.target.value == btn.value) {
            tipBtn = (btn.value)/100
        }
    })
    tipCalculator()
}

function selectCustomInp() {
    customInpValue = (customInp.value)/100
    if(customInpValue != 0) {
        tipCalculator()
    }
}

function addPeople() {
    people = numberOfPeople.value
    tipCalculator()
}

function tipCalculator(personTip, totalBill) {
    if(people >= 1) {
        personTip = (billValue * (customInpValue || tipBtn))/people
        tipAmount.textContent = personTip.toFixed(2)
        totalBill = (billValue/people) + personTip
        totalAmount.textContent = totalBill.toFixed(2)

    }
}

function reset() {
    if(tipAmount.textContent != "") {
        bill.value = ""
        tipBtn = "0.15"
        customInp.value = ""
        numberOfPeople.value = ""
        tipAmount.textContent = ""
        totalAmount.textContent = ""
    }
}