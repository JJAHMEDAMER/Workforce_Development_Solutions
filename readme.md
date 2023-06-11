# transparncy

# Instructions

Clone Repo locally

```bash
git clone https://github.com/JJAHMEDAMER/Workforce_Development_Solutions.git .
```

Install NPM Dependencies

```bash
# npm
npm i

# Yarn
yarn install
```

Run Project

```bash
# vite
vite

# npm
npm run dev

# yarn
yarn run dev
```

# Explanation of the design choices you made.

### Vite

- Faster build time
- Instant hot reload
- Native support for CSS modules
- Simple configuration
- Typescript support
- Better performance for end user

### CSS Modules

Working with CSS directly give developer the power to fine tune the style and looks. Tailwind can be a great tool to build a design system, but it can lead to a missy JSX

CSS Modules are a way of creating scoped CSS. This means that each CSS file is only applied to the elements that it is imported into. This can help to prevent CSS conflicts and make your code more maintainable.

To use CSS Modules, create a CSS file with the `.module.css` extension. Inside this file, you can use normal CSS syntax, but all of your class names will be automatically scoped.

### Typescript

Typescript is a necessary tool for large scale projects that helps with avoiding type errors and a robust code base

In this project the power of typescript was utilized in passing props between components

### Responsive break points

The navbar must have multiple break points for different screen in order to utilize the space efficiently and display the most important data

```CSS

@media screen and (max-width: 1024px) {
  /* Hamburger Menu */
}

@media screen and (max-width: 850px) {
  /* Reduce search Box Width*/
  /* Remove Logo Text*/
}

@media screen and (max-width: 550px) {
  /* Reduce Horizontal Padding */
}

@media screen and (max-width: 420px) {
  /* Remove Profile Info*/
  /* Remove Search Box */
}

```

# Challenges

### SVG vs PNG

I tried exporting the background as an SVG to avoid larger files like (PNG, JPG, ...) but due to gradients the SVG wasn't able to present the Image as intended so I use a PNG image to preserve the transparency and accurately present the gradients in the image

### Figma compoend transparency

In figma some layers had transparency applied to it and to the group too, which lead to an inaccurate transparency levels in the input box

```
element_transparency -> 0.25
group_transparency -> 0.5

total_effect -> 0.25 * 0.5 = 0.125
```

### Button

The button had multiple shadows applied to it, in order to use multiple values without overriding each other use comma separated values

```CSS
box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.3),
    inset 0px 5px 10px rgb(183, 183, 255, 0.26),
    inset 0px -10px 20px rgba(0, 0, 0, 0.6);
```

### Hamburger Menu

Hamburger menus are always a challenge to implement, especially the CSS selector part \
In this project i used an checkbox input element `<input type="checkbox" />` to control the visibility of the menu and used one `span` element and it's `::before` and `::after` pseudo elements to create the hambergur menu icon and the label of the input element as a hit target

Then used the general sibling selector to `~` to add CSS styles to the nav_list

### Gravatar

This was the first time I used the Gravatar service so, I searched on how to use gravatar in javaScript

- Gravatar uses a get method with a special URL to retrieve the Avatar
- The Special Part of the URL is an md5 encoded string
- MD5 (Message-Digest Algorithm 5) is a cryptographic hash function that takes a message of any length and produces a 128-bit (16-byte) hash value.
- Gravatar Returns JFIF as blob
- Use `await res.blob()` to return a blob URL `blob:https://....`
- use the return value in `<img src={"blob:https://..."} `

# Finally Questions

### And finally, answer the following hypothetical question: How would you use the `useState` or `useEffect` React hooks in a scenario where you need to manage a dynamic state on this page?

#### UseState

The useState hook will be used to update the view of a component based on the value of a variable

In this project when we fetch the user data we need a way to update the UI to reflect the fetched data otherwise the value will only update in memory
The same goes for the user image

#### UseEffect

The useEffect hook will used to run a function on load and on update

in this project we use the useEffect hook with an empty dependency array to fetch user data, then once the user value is updated another useEffect with the user data variable in the dependency array will run to fetch the avatar
