# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/Screenshot%202022-03-29%20172422.png)

### Links

- Solution URL: [Solution URL](https://github.com/AlexOla-NG/Projects/tree/main/advice-generator-app-main)
- Live Site URL: [Live site URL](https://alexola-ng.github.io/Projects/advice-generator-app-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned

This was a very different project for me. It was really the first time I employed a "mobile-first" workflow. I had been struggling with responsiveness in past projects, but approaching this project with a mobile-first mentality made me see how the elements resized from small screen -> big screen. I handled this change with media queries targetted at big screens. A snippet demonstrating this is down below in the css section.

This project marks a shift in how I use min/max height/width. I will defintely use min/max width when working with images because it ensures the image resizes nicely from smaller -> bigger screens (great responsiveness results). Honorable mention also goes to the clamp() value.

I used transition to make the die do a transform: rotate(360deg). Very sweet animation. According to Kevin Powell, transition should be limited to opacity and transform, anything else draws too much CPU power and can cause janky results.

On the js part, I finally used async await and fetch(). I also had to understand closures to make the updateAdvice() function work.

```css
@media (min-width: 40em) {
    .main-container {
        max-width: 30%;
        margin: 10% auto;
        padding: 1.7em 2em 3em;
    }
}

#dice-icon {
    max-width: 100%;
    height: auto;
    transition-duration: 400ms;
    transition-property: transform;
    transition-timing-function: ease-out;
}

#dice-icon:active {
    transform: rotate(360deg);
}
```
```js
async function callAPI() {

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
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

I defintely need to improve my understanding of layout. I had trouble deciding between grid and flexbox for this project, but ended up going with grid because it gave me more control over each elements.

I barely wrote 30 lines of js, and it was mostly async await. I would like to focus on working with async functions, as well as the fetch API in future projects.

### Useful resources

- [Animating with CSS Transitions - A look at the transition properties](https://www.youtube.com/watch?v=Nloq6uzF8RQ) - This helped me understand transitions better. I really liked this pattern and will use it going forward.
- [Learn Fetch API In 6 Minutes](https://www.youtube.com/watch?v=cuEtnrL9-H0&t=312s) - This helped me understand how to implement the fetch API.
- [JavaScript Promises In 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E) - This helped me understand Promises so I could deploy the fetch API more effectively.
- [1.4: JSON - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=uxf0--uiX0I&t=881s) - This helped me for understand how to work with APIs using the fetch() method.
- [JavaScript Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU) - This helped me understand how the async await syntax.

## Author

- Frontend Mentor - [@AlexOla-NG](https://www.frontendmentor.io/profile/AlexOla-NG)
- Twitter - [@OwekaAlexander(https://twitter.com/OwekaAlexander)
