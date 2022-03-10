const hiddenPopUp = document.querySelector("#hidden-popup")
const cartHolder = document.querySelector(".cart-holder")
const quantity = document.querySelector(".quantity-value")
const minusIcon = document.querySelector(".minus-icon")
const plusIcon = document.querySelector(".plus-icon")
const addCartBtn = document.querySelector(".cart-btn")
const cartCounter = document.querySelector(".cart-counter")
const narration = document.querySelector(".narration")
const chekoutAmount = document.querySelector(".checkout-amount")
const total = document.querySelector(".total")
const cartBodyWrapper = document.querySelector(".cart-body-wrapper")
const cartBody = document.querySelector(".cart-body")
const checkoutBtn = document.querySelector(".checkout-btn")
const smallThumbnails = document.querySelectorAll(".small-size")
const bigImg = document.querySelector(".big-img")



//default values
let quantityValue = 0
quantity.textContent = quantityValue
let cartCounterValue = 0
cartCounter.textContent = cartCounterValue



//reusable class for new footwear (sneakers)
class Footwear {
    constructor(item, oldPrice, discount) {
        this._item = item
        this._oldPrice = oldPrice
        this._discount = discount
    }

    //getter
    get item() {
        return this._item
    }
    get oldPrice() {
        return `$${parseInt(this._oldPrice).toFixed(2)}`
    }
    get discount() {
        return `${parseFloat(this._discount).toFixed(2)}%`
    }
    get newPrice() {
        return `${parseInt(this._oldPrice * this._discount).toFixed(2)}`
    }
    //setter
    set item(updatedName) {
        this._item = updatedName
    }
    set oldPrice(updatedOldPrice) {
        this._oldPrice = `${parseInt(updatedOldPrice).toFixed(2)}`
    }
    set discount(updatedDiscount) {
        this._discount = `${parseFloat(updatedDiscount).toFixed(2)}`
    }
}

//new Footwear(name of item, price, discount)
let sneakers = new Footwear("Fall Limited Edition Sneakers", 250, 0.5)



cartHolder.addEventListener("click", callPopUp)
minusIcon.addEventListener("click", decrease)
plusIcon.addEventListener("click", increment)
addCartBtn.addEventListener("click", addToCart)
smallThumbnails.forEach((thumbnail) => thumbnail.addEventListener("click", imageUpdate))



//function to toggle classlist
function callPopUp() {
    //toggle=> if classlist is present, remove it; if it's absent, add it
    //"show" is not a class defined in the hiddenPopUp element (cart-popup div class), toggling it will add it as a class to hiddenPopUp
    hiddenPopUp.classList.toggle("show") 
    cartStatus()
}

//function to decrease quantity
function decrease() {
    if (quantityValue > 0) {
        quantityValue--
        quantity.textContent = quantityValue
    }
}

//function to increase quantity
function increment() {
    if (quantityValue >= 0) {
        quantityValue++
        quantity.textContent = quantityValue
    }
}

//function to add item to cart
function addToCart() { 
    if (quantityValue > 0) {
        cartCounterValue++
        cartCounter.textContent = cartCounterValue
        narration.textContent = sneakers.item
        chekoutAmount.textContent = `$${sneakers.newPrice} x ${quantityValue}`
        total.textContent = "$" + totalPayable(sneakers.newPrice, quantityValue)
    }
    quantityValue = 0
    quantity.textContent = quantityValue
}

//function to calculate total due
function totalPayable(price, rate) {
    totalDue = parseInt(price * rate).toFixed(2);
    return totalDue
}

//function to show status of cart
function cartStatus() {
    if(cartCounter.textContent == 0) {
        cartBodyWrapper.textContent = `Your cart is empty.`
        console.log(cartBodyWrapper.textContent)
    }
    else {
        cartBodyWrapper.textContent = ""
        cartBodyWrapper.append(cartBody, checkoutBtn)
        console.log(cartBodyWrapper.textContent)
    }
}

//function to update bigImage with active smallImage
function imageUpdate(event) {
    //get small img src and format to match big img src
    smallSource = event.target.attributes.src.textContent
    smallSourceArr = smallSource.split("-")
    smallSourceArr.pop()
    joinedSmallSource = smallSourceArr.join("-")
    formattedSmallSource = `${joinedSmallSource}.jpg`

    bigImgSource = bigImg.attributes.src.textContent
    
    if(formattedSmallSource != bigImgSource) {
        bigImg.attributes.src.textContent = formattedSmallSource
    }
}