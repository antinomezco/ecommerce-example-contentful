# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./ecommerce.png)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/audiophile-ecommerce-website-using-nextjs-contentful-and-tailwindcss-rJylOvzN5)
- Live Site URL: [Add live site URL here](https://ecommerce-example-contentful.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com) - For styles


### What I learned

As someone who's proficient in Vue, I wanted a project to extrapolate those skills into React, and I succeeded with this project. 

Practiced reusing components with the home page. State management, using redux, with the cart and mobile menu. Form validation with react-hook-form and yup.

```js (redux state)
import { createSlice } from '@reduxjs/toolkit'

const messageBoxSlice = createSlice({
  name: 'openModal',
  initialState: [{value: false}],
  reducers: {
    closeModal: (state) => {
      state.value = false
    },
    openModal: (state) => {
      state.value=true
    },
  },
})

export const { closeModal, openModal } = messageBoxSlice.actions

export const selectOpenModal = (state) => state.openModal.value

export const MessageBoxReducer = messageBoxSlice.reducer
```

### Continued development

I'd day that I need more practice with state management to managa more complex states.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [www.csaldana.xyz](https://www.csaldana.xyz)
- Frontend Mentor - [@antinomezco](https://www.frontendmentor.io/profile/antinomezco)

## Acknowledgments

I would like to thank Nitin Ranganath from the logrocket blog for his [cart example](https://blog.logrocket.com/building-a-next-js-shopping-cart-app/) that I used for my webpage.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
