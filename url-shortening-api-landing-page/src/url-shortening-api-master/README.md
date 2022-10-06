# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the
[Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

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
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./Screenshot_2022-10-06%20React%20App.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Material UI](https://mui.com/) - For styles

### What I learned

This was a very fun challenge. It's the first landing page I've ever built with React JS.
I learned a lot working on this project:

- How to set overflow to hidden
- How to build on default styles available on MUI components & variants
- How to use the dev console to debug layout issues.
- How to not get lost reading stackoverflow comments👀👀👀

All in all, a really fun project.

I'm really proud of this code below. The component controls form submission & saves api response.
It helped me understand how to share data (state) among components without relying on the useContext hook

```react js
<div>
      <LinkForm
        onFormValueChange={handleFormValue}
        onSnackbarSuccess={handleSnackbarSuccess}
      />
      <LinkList responseList={responseList} />
</div>
```

### Continued development

My layout skills is improving, but we still need to stretch it more.
I'd also love to work more with APIs. I wanna use react query in my next project

### Useful resources

- [Control the width of menu component in Material-UI](https://stackoverflow.com/a/72311905) -
  This helped me set the width of the Menu items in MUI's Menu component. I
  really liked this pattern and will use it going forward.
- [How to use an SVG file in a SvgIcon in Material-UI](https://stackoverflow.com/a/61419387) -
  This helped me use svg icons in MUI components. I really liked this pattern
  and will use it going forward.
- [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) -
  This helped toggle the layout of a component without using media query. I really liked this pattern and will use it going forward.
- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) -
  This helped manage flow between two different components. I really liked this pattern and will use it going forward.
- [How to change button text in ReactJS](https://stackoverflow.com/a/53685236) -
  This helped toggle button text using setTimeout(). I really liked this pattern and will use it going forward.
- [How to Crop image at the edge of the screen](https://stackoverflow.com/a/35702570) -
  This helped us crop an image when its width overlaps its parent container. We can set >>overflow:hidden<< to crop off an overlapping image. I really liked this pattern and will use it going forward.
- [Overflow CSS MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) -
  This is the documentation for the CSS prop Overflow.
- [How do I add color to my svg image in react](https://stackoverflow.com/a/62532186) -
  This helped us set the color on a svg component. I really liked this pattern and will use it going forward.

## Author

- Website - [Alexander Oweka](https://github.com/AlexOla-NG/Projects)
- Frontend Mentor -
  [@AlexOla-NG](https://www.frontendmentor.io/profile/AlexOla-NG)
- Twitter - [@OwekaAlexander](https://twitter.com/OwekaAlexander)

## Acknowledgments

🌟✨🌠The Real MVPs🌟✨🌠
Stackoverflow, MDN docs, Youtube, Google.com
