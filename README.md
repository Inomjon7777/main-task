# IMG LOADER

## Install 

`npm install pdp-b-18`

## using

```js
import { imgLoading } from "./index.js";

const element = document.getElementById("img-wrapper");
const btn = document.getElementById("load-img-btn");

const imgURL =
  "https://encrypted-ttatic.com/images?q=tbn:ANd9GcQgMqFgaGVGRBv0XVpDNPo_3mCruXsEbXwSag&usqp=CAU";

btn.addEventListener("click", () => imgLoading(imgURL, element, 4));
```"# learn-npm" 
