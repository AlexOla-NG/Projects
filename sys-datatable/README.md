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
```

### Continued development

I still need more practice using grids, but I've come to appreciate the full control it gives me in layout.

I also need more practice with JS hoisting and closures. I think there are certain use cases that I need to understand.

### Useful resources

- [:nth-of-type() selector | resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type) - This helped me understand how to use css selectors to match elements. We can use odd/even in the param, and it'll select the odd/even numbered element in a list. I really liked this pattern and will use it going forward.
- [:nth-child selector | resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) - This helped me understand the type of parameters that can be passed in the :nth-of-type() selector. I really liked this pattern and will use it going forward.
- [color-name | resource 3](https://www.color-name.com/) - This helps us with color names. We can search by hex code.
- [Hoisting | resource 3](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) - This is the mdn documentation for how hoisting works in JavaScript.
- [Grid auto-flow resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout) - This helped me flow grid items by column, rather than the defailt row. I really liked this pattern and will use it going forward.
- [HEX to Filter converter for SVG](https://codepen.io/sosuke/pen/Pjoqqp) - This helped me easily change the color of SVG icons in img tag. I really liked this resource and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- GitHub - [Alexander Oweka](https://www.github.com/AlexOla-NG)

## Acknowledgments

Big thanks goes to Lamide for her hack on adjusting img height with CSS classes (I didn't think it would work, but it did!😂). It helped adjust the disparate image heights of .thumbnails. Saved me weeks of headache