# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![./images/screenshot.png]


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I learnt how to use eventListeners to catch user input. Flexbox was used to style the project, because it made designing the layout much easier. I also did some wonders with divs.

I like this one

```html
<div class="output">
                <div class="line-wrapper">
                    <div class="line-output">
                        <div class="title-wrapper">
                            <div class="Title">Tip Amount</div>
                            <div class="desc">/ person</div>
                        </div>
                        <div class="value" id="tipAmount">$4.27</div>
                    </div>
```
```css
.line-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
}
```
```js
buttons.forEach((btn) => {
    btn.addEventListener("click", selectBtn)
})
```

### Useful resources

- addEventListener (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) - Nothing beats documentation. I had to read the documentation on event handlers to fully understand what happens when the tip button was clicked
- events (https://developer.mozilla.org/en-US/docs/Web/Events) - A complete list of the type of events that can be used with the addEventListener method
- HTMLCollections vs NodeList explained (https://www.youtube.com/watch?v=uwJyp4ZLVMA) - A video explaining the differences between a static collection vs live collection
- CSS Display (https://developer.mozilla.org/en-US/docs/Web/CSS/display) - Documentation on how CSS display property works for outer and inner elements


## Author

- Twitter - [@OwekaAlexander](https://twitter.com/OwekaAlexander)