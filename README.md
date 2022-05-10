# Frontend Mentor - Article Preview Component Solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Article Preview Component Solution](#frontend-mentor---article-preview-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Desktop Screenshot](./screenshots/Screenshot%202022-05-10%20at%2010-32-44%20Frontend%20Mentor%20Article%20Preview%20Component.png)

### Links

- Solution URL: [Right here!](https://www.frontendmentor.io/solutions/fully-responsive-animated-article-preview-component-rkVZ1V_I5)
- Live Site URL: [Deployed on Vercel](https://article-preview-component-svelte.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Svelte + Transition API
- WindiCSS + Flexbox and Grid
- Mobile-first workflow
- [Malachite UI](https://github.com/OGShawnLee/malachite-ui)
- Vite

### What I learned

I learnt how those little triangles used on Popover elements work. I had to google it and I finally found it on CSS Tricks!

```html
<div aria-hidden="true" class="arrow-down absolute top-full left-1/2 transform -translate-x-1/2" />
```

```css
.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid hsl(217, 19%, 35%);
}
```

### Useful resources

- [Malachite UI](https://github.com/OGShawnLee/malachite-ui) - This awesome library helped me build the Popover and let me use a powerful hook. I wonder who built it.

## Author

- Frontend Mentor - [@Shawn Lee](https://www.frontendmentor.io/profile/OGShawnLee)

## Acknowledgments

- [CSS Triangle by Chris Coyier -> Oct 6, 2009](https://css-tricks.com/snippets/css/css-triangle/)
