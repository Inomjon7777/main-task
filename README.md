# RENDER PICTURE

## install
`npm install render-picture`

## using
```js
"use strict";
import {
    imgLoading
} from "./index.js";

const element = document.getElementById("img-wrapper");
const btn = document.getElementById("load-img-btn")

const imgURL = "https://picsum.photos/200/300";

btn.addEventListener("click", () => imgLoading(imgURL, element, 4));
```