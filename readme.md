[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-number --save
```

# Usage

```javascript
import { Pad, Uid } from 'lesca-number';

for (var i = 0; i < 100; i++) {
	let img_url = `./${Pad(i, 4)}.png`;
	console.log(img_url); // => 0001.png ~ 0100.png
}

console.log(Uid(10)); // => c38c995b8d (random)
```

# Methods

| method        | options |     description      | default |
| :------------ | :-----: | :------------------: | ------: |
| Pad(num, max) |   num   | the index of numbers |         |
|               |   max   |  length of numbers   |       4 |
| Uid(len)      |   len   |  length of numbers   |      10 |
| Dollar(num)   |   num   | 1130200 => 1,130,200 |         |
