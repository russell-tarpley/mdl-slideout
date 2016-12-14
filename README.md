# mdl-slideout
An Material Design Lite slideout pane implementation (https://github.com/google/material-design-lite)

[![Bower Version](https://img.shields.io/bower/v/mdl-slideout.svg)](https://github.com/rathxxx/mdl-slideout)
[![NPM Version](https://img.shields.io/npm/v/mdl-slideout.svg)](https://www.npmjs.com/package/mdl-slideout)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/rathxxx/mdl-slideout/blob/master/LICENSE)

[![bitHound Overall Score](https://www.bithound.io/github/rathxxx/mdl-slideout/badges/score.svg)](https://www.bithound.io/github/rathxxx/mdl-slideout)
[![bitHound Dependencies](https://www.bithound.io/github/rathxxx/mdl-slideout/badges/dependencies.svg)](https://www.bithound.io/github/rathxxx/mdl-slideout/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/rathxxx/mdl-slideout/badges/devDependencies.svg)](https://www.bithound.io/github/rathxxx/mdl-slideout/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/rathxxx/mdl-slideout/badges/code.svg)](https://www.bithound.io/github/rathxxx/mdl-slideout)

> A custom implementation of a slideout panel for [Material Design Lite](https://github.com/google/material-design-lite)

## Install

Via npm:

````
npm install mdl-slideout
````

Then include in your html:

````
<link rel="stylesheet" href="dist/mdl-slideout.min.css">
...
<script src="dist/mdl-slideout.min.js"></script>
````

## Basic use
To use any MDL component, you must include the minified CSS and JavaScript files using standard relative-path references in the `<head>` section of the page, as described in the MDL Introduction.

### To include a MDL **slideout** component:

&nbsp;1. Code a `<div>` element to hold the slideout.
```html
<div>
...
</div>
```
&nbsp;2. Code a `<div>` element directly after the previous to hold the slideout overlay.
```html
<div>
...
</div>
<div>
...
</div>
```
&nbsp;3. Inside the slideout div, code an `<div>` element to be used for the slideout tile.
```html
<div>
  <div></div>
</div>
<div><div>
```
&nbsp;4. Also inside the div, after the `<div>` element, code another `<div>` element to be used for the slideout actions.
```html
<div>
  <div></div>
  <div><div>
</div>
<div><div>
```
&nbsp;5. Also inside the div, after the `<div>` elements, code another `<div>` element to be used for the slideout content.
```html
<div>
  <div></div>
  <div><div>
  <div><div>
</div>
<div><div>
```
&nbsp;6. Add one or more MDL classes, separated by spaces, to the div container, title div, action div, content div, and overlay div using the `class` attribute.
```html
<div class="mdl-slideout mdl-js-slideout mdl-slideout--right">
  <div class="mdl-slideout__title"></div>
  <div class="mdl-slideout__actions"><div>
  <div class="mdl-slideout__content"><div>
</div>
<div class="mdl-slideout__overlay"><div>
```
The slideout component is ready for use.

To Show the slideout:
```js
var slideout = document.querySelectorAll(".mdl-slideout")[0];
slideout.MaterialSlideout.show();
```

To Hide the slideout:
```js
var slideout = document.querySelectorAll(".mdl-slideout")[0];
slideout.MaterialSlideout.hide();
```

#### Examples

Slideout with no title or actions (content only)
```html
<div class="mdl-slideout mdl-js-slideout mdl-slideout--right">
    <div class="mdl-slideout__content">
        This is sample content
    </div>
</div>
<div class="mdl-slideout__overlay"></div>
```

Slideout from right with title and actions
```html
<div class="mdl-slideout mdl-js-slideout mdl-slideout--right">
    <div class="mdl-slideout__title">Right Slideout Title</div>
    <div class="mdl-slideout__actions">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Hide This</button>
    </div>
    <div class="mdl-slideout__content">
         This is sample content
    </div>
</div>
<div class="mdl-slideout__overlay"></div>
```

Slideout from left with title and actions
```html
<div class="mdl-slideout mdl-js-slideout mdl-slideout--left">
    <div class="mdl-slideout__title">Left Slideout Title</div>
    <div class="mdl-slideout__actions">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Hide This</button>
    </div>
    <div class="mdl-slideout__content">
         This is sample content
    </div>
</div>
<div class="mdl-slideout__overlay"></div>
```

Slideout from top with title and actions
```html
<div class="mdl-slideout mdl-js-slideout mdl-slideout--top">
    <div class="mdl-slideout__title">Left Slideout Title</div>
    <div class="mdl-slideout__actions">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Hide This</button>
    </div>
    <div class="mdl-slideout__content">
         This is sample content
    </div>
</div>
<div class="mdl-slideout__overlay"></div>
```

Slideout from bottom with title and actions
```html
<div class="mdl-slideout mdl-js-slideout mdl-slideout--bottom">
    <div class="mdl-slideout__title">Left Slideout Title</div>
    <div class="mdl-slideout__actions">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Hide This</button>
    </div>
    <div class="mdl-slideout__content">
         This is sample content
    </div>
</div>
<div class="mdl-slideout__overlay"></div>
```