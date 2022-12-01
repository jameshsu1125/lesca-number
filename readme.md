[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

some useful calculation formula.

#### [Live Demo](https://jameshsu1125.github.io/lesca-number/)

# Installation

```sh
npm install lesca-number --save
```

## Usage

As a Node module:

```javascript
import {
  Pad,
  Uid,
  Dollar,
  CoverSize,
  ValidateEmail,
  ValidatePhone,
  ValidateURL,
} from 'lesca-number';

for (var i = 0; i < 100; i++) {
  let img_url = `./${Pad(i, 4)}.png`;
  console.log(img_url); // => 0001.png ~ 0100.png
}

console.log(Uid(10)); // => c38c995b8d (random)
console.log(Dollar(93848421100)); // => 93,848,421,100
console.log(CoverSize({ width: 720, height: 420 }, { width: 1000, height: 1000 }));
console.log(ValidateEmail('james@gmail.com')); // true
console.log(ValidatePhone('0912345678')); // true
console.log(ValidateURL('https://google.com')); // true
```

## Development

| method                                                                      |             description              | default |
| :-------------------------------------------------------------------------- | :----------------------------------: | ------: |
| .**Pad**(**num**:_int_, **max**:_int_):_string_                             |         the index of numbers         | max = 4 |
| .**Uid**(**len**:_int_):_string_                                            |          length of numbers           |      10 |
| .**Dollar**(**num**:_int_):_string_                                         |         1130200 => 1,130,200         |         |
| .**CoverSize**(**imageSize**:_object_, **containerSize**:_object_):_object_ |        calculator cover size         |         |
| .**ValidateEmail**(**email**:_string_):_boolean_                            |          check email format          |         |
| .**ValidatePhone**(**phone**:_string_):_boolean_                            | check **Taiwan** phone number format |         |
| .**ValidateURL**(**url**:_string_):_boolean_                                |           check url format           |         |

### Features

- maintain if necessary
