---
- tags: [[]]
- created date: 2022-05-29
- source: https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
---

# Animation Controlled By Scroll

## Set a style variables that can be used in CSS:

In JS:

```jsx
document.body.style.setProperty(property, value);
// document.body.style.setProperty('--header-height', '2rem');
```

In CSS:

```css
max-height: var(property)
// max-height: var(--header-height) ~ max-height: 2rem
```

## Pause animation and control delay by variable
```css
animation: rotate 1s linear infinite;
animation-play-state: paused;
animation-delay: calc(var(--scroll) * -1s);
animation-iteration-count: 1;
animation-fill-mode: both;
```

---
- tags: [[CSS]] [[Javascript]] [[Animation]]
- source: https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
---





