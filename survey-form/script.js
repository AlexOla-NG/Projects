const otherCheckBox = document.querySelector("#other")
const otherValue = document.querySelector("#other-value")

otherValue.style.visibility = "hidden"

otherCheckBox.addEventListener("change", () => {
    if(otherCheckBox.checked) {
        otherValue.style.visibility = "visible"
        otherValue.value = ""
    } else {
        otherValue.style.visibility = "hidden"
    }
})