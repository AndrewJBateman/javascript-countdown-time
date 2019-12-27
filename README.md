# Javascript30 Tutorial Countdown Timer

* Wes Bos Youtube Tutorial 29/30: [Vanilla JS Countdown Timer - #JavaScript30 29/30](https://www.youtube.com/watch?v=LAaf7-WuJJQ).

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Uses javascript to display a countdown with inputs from html form input or from buttons with fixed times.

## Screenshots

![Example screenshot](./img/timer.png).

## Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## Code Examples

* Code to display time left. 

```javascript
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60); // floor removes remainder
  const remainderSeconds = seconds % 60; // modulus division remainder
  const display = `${minutes}:${remainderSeconds < 10? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}
```

## Features

* A range of times can be selected or a custom time can be created.

## Status & To-Do List

* Status: Working. Updated to work from browser, not from Glitch.

* To-Do:

## Inspiration

* Wes Bos Youtube Tutorial 29/30: [Vanilla JS Countdown Timer - #JavaScript30 29/30](https://www.youtube.com/watch?v=LAaf7-WuJJQ)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!