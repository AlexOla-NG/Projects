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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/Screenshot%202022-03-29%20172422.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/AlexOla-NG/Projects/tree/main/advice-generator-app-main)
- Live Site URL: [Add live site URL here](https://alexola-ng.github.io/Projects/advice-generator-app-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned

This was a very different project for me. It was really the first time I employed a "mobile-first" workflow. I had been struggling with responsiveness in past projects, but approaching this project with a mobile-first mentality made me see how the elements resized from small screen -> big screen. I handled this change with media queries targetted at big screens. The snippet is down below in the css section.

This project also marks a shift in how I use min/max height/width. I will defintely use min/max width when working with images because it ensures the image resizes nicely from smaller -> bigger screens (great responsiveness results). Honorable mention also goes to the clamp() value.

I used transition to make the die do a transform: rotate(360deg). Very sweet animation. According to Kevin Powell, transition should be limited to opacity and transform, anything else draws too much CPU power and can cause janky results.

On the js part, I finally used async await and fetch(). I also had to understand closures to make the updateAdvice() function work.

To see how you can add code snippets, see below:

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
- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
