# 🌿 Sustainability Dashboard

A responsive web dashboard that helps users track their grocery choices and reduce their carbon footprint through sustainable food swaps. 

## Project Overview

This dashboard was built as part of a front-end development assessment. It allows users to view their monthly CO₂ savings, filter food items by environmental impact, search for specific foods and discover sustainable swaps.

## HTML5

Used semantic elements throughout — `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` - to give the page meaningful structure for both browsers and screen readers.

Added ARIA attributes(`aria-labelledby`, `aria-live`, `aria-pressed`, `role="progressbar"`) to meet accessibility standards.

Included a skip link so keyboard users ca bypass the header and jump straight to the main content.

## CSS3

Used CSS custom properties (variables) in `:root` to define the colour palette in one place, making the design easy to maintain and update.

Built the layout using CSS Grid on `main`, allowing the CO₂ and Filter cards to sit side by side on desktop and stack on mobile without JavaScript.

Used `clamp()` for fluid typography on the header, scaling the font size smoothly between screen sizes without media queries.

Separated the hidden state into classes — `.hidden` fades items out via CSS transition, then `.collapsed` removes them from the layout after the animation ends, preventing empty gaps.

Used `@media` breakpoints at `600px`, `768px`, and `900px` for a fully responsive layout.

## JavaScript

Wrapped all initialisation logic in `window.addEventListener('load')` to ensure the DOM is fully ready before any JS runs.

Used `requestAnimationFrame` with an ease-out cubic function to animate the CO₂ counter smoothly from 0 to the target value on page load.

Separated filter logic into a dedicated  `applyFilter()` function and search logic into its own event listener, keeping concerns clearly separated.

Used `{ once: true }` on the `transitionend` event listener to automatically remove it after firing, preventing memory leaks

Used template literals for the count chip text content to keep the code clean and readable.

Constants are written in `UPPER_CASE` to signal they are fixed config values, following standard JS conventions.

## Fonts

Used **DM Serif Display** for headings and **DM Sans** for body text, loaded via Google Fonts. These were chosen for their clean, professional aesthetic suited to an environmental dashboard.

## Version Control

Committed changes incrementally by feature and file, with descriptive commit messages that reflect what changed and why.

## Features

**CO₂ Savings counter** — animated count-up on page load with a dynamic status badge

**Progress bar** — shows progress toward the monthly 20kg CO₂ goal

**Filter buttons** — toggle between All, High Impact and Low Impact food items

**Search bar** — live search filtering food items by name

**Impact count chips** — shows how many high and low impact items are currently visible

**Sustainable Swaps section** — suggests direct food substitutions with emissions savings

**Fully responsive** — works on mobile, tablet, and desktop

**Accessible** — skip link, ARIA attributes, keyboard focus styles and screen reader support

## Files

| File | Purpose |
|---|---|
|`index.html` | Page structure and content |
|`style.css` | All styling, layout and responsive breakpoints |
|`script.js` | Interactivity — counter animation, filtering and search |