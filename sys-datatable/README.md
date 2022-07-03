# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/Screenshot%20(webview)%202022-05-14%20120959.png)

### Links

- Live Site URL: [GitHub Pages](https://alexola-ng.github.io/Projects/easybank-landing-page-master/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This was a challenging project for me. It was the first time I'd build a landing page. The project took longer than I expected it to, and I think the most important lesson this has taught me is to plan. Plan the layout of the project; identify components that look similar, assign them like classes to reduce extra work in css. I spent so much time on css💀.

It was worth it though, I was able to grasp certain concepts better. For example, the difference between child and descendant selectors; grid-auto-flow; manipulating bg images; transition and its limitations. For JS, I think I understand hoisting and closures a bit better now. For HTML, I tried to use semantic tags and set alt attribute of placeholder img tags to role=presentation


```html
<h1>Some HTML code I'm proud of</h1>
<img class="thumbnails" src="./images/image-plane.jpg" alt="role=presentation">
```
```css
table {
    border-collapse: collapse;
}

.social-logo > img:hover {
    filter: invert(68%) sepia(92%) saturate(425%) hue-rotate(75deg) brightness(89%) contrast(85%);
    cursor: pointer;
}

.footer-nav-list {
    grid-column: 4 / span 4;
    display: grid;
    grid-template-rows: repeat(3, 0.5fr);
    grid-auto-flow: column;
    column-gap: 1em;
}
```
```js
// STUB: map elems in clientInfoListValues to input values in edit modal form
editModalFormInpList.map((inputElem, index) => {
    inputElem.value = clientInfoListValues[index]
})
```

### Continued development

I still need more practice using grids, but I've come to appreciate the full control it gives me in layout.

I also need more practice with JS hoisting and closures. I think there are certain use cases that I need to understand.

### Useful resources

- [:nth-of-type() selector | resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type) - This helped me understand how to use css selectors to match elements. We can use odd/even in the param, and it'll select the odd/even numbered element in a list. I really liked this pattern and will use it going forward.
- [:nth-child selector | resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) - This helped me understand the type of parameters that can be passed in the :nth-of-type() selector. I really liked this pattern and will use it going forward.
- [color-name | resource 3](https://www.color-name.com/) - This helps us with color names. We can search color names by hex code.
- [Use dialog for the easiest way to make a popup modal | resource 4](https://www.youtube.com/watch?v=TAB_v6yBXIE) - This helped me understand how dialog boxes can be used as modals. I really liked this pattern because it's an easier (and semantically efficient) way of creating modals. I will definitely use the pattern going forward.
- [In Defence of Dialog | resource 5](https://whistlr.info/2021/in-defence-of-dialog/) - This helped with examples and usecases of the dialog html element, and also how to enable/disable scrolling in the backdrop
- [<dialog>: The Dialog element | resource 6](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) - This is the documentation for the dialog html element.
- [aria-hidden | resource 7](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) - This is the documentation for the aria-hidden attribute. It helped me understand how to hide redundant/non-interactive content from the accessibility API. We can use it to improve accessibility.
- [Bootstrap : CRUD Table | resource 8](https://codepen.io/zic72/pen/BayvgZo) - This is a codepen containing a CRUD table. It was inspiration for building this project.
- [FormData() method | resource 9](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) - This is the mdn resource on the FormData() method. I used the formData() method to collect user input from the addClient, deleteClient & editClient modals.
- [Using FormData Objects Effectively | resource 10](https://www.youtube.com/watch?v=GWJhE7Licjs&t=637s) - This is a formData() tutorial from "Steve Griffith - Prof3ssorSt3v3". I liked how he explained the use case for the formData() method; parsing user input from HTML to JavaScript.
- [Saving User Input in JS Objects | resource 11](https://www.youtube.com/watch?v=NxVCq4p0Kb0) - This is a html-js tutorial from "Steve Griffith - Prof3ssorSt3v3". I liked how he explained how to add values from a form into an object data structure.
- [Learn JavaScript Event Listeners In 18 Minutes | resource 12](https://www.youtube.com/watch?v=XF1_MlZ5l6M) - This is a video from "Kyle - Web Dev Simplified" explaining event listeners. I liked the addGlobalEventListener function he used; it helps dynamically add event listeners to elements.
- [Implement toggle for checkbox with JavaScript/jQuery | resource 13](https://www.techiedelight.com/implement-toggle-check-box-javascript/) - This is an article on choosing the right property to target when trying to toggle a checkbox. I liked the method used; I slightly modified it though.
- [Node.removeChild() - MDN | resource 14](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) - This is an mdn resource on removing childNodes. I copied the example on removing a specified element without having to specify its parent node. I like the style.
- [Hoisting | resource 3](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) - This is the mdn documentation for how hoisting works in JavaScript.
- [Grid auto-flow resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout) - This helped me flow grid items by column, rather than the defailt row. I really liked this pattern and will use it going forward.
- [HEX to Filter converter for SVG](https://codepen.io/sosuke/pen/Pjoqqp) - This helped me easily change the color of SVG icons in img tag. I really liked this resource and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- GitHub - [Alexander Oweka](https://www.github.com/AlexOla-NG)

## Acknowledgments

Big thanks goes to Lamide for her hack on adjusting img height with CSS classes (I didn't think it would work, but it did!😂). It helped adjust the disparate image heights of .thumbnails. Saved me weeks of headache