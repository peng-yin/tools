# ie-judgement

> Used to determine whether the current browser is ie, and to determine the current version number of IE

![size](https://img.shields.io/badge/Minified%20Size-1.15%20KB-brightgreen) ![License](https://img.shields.io/badge/License-MIT-brightgreen)

[简体中文](/README.md) | English

## download

```sh
npm i ie-judgement
# or
yarn add ie-judgement
```

file：[umd-Ie](/dist/main.js)

file：[umd-Ie min File](/dist/main.js)

## Quick start

```js
import Ie from "ie-judgement";
if (Ie.is(6, 11)) {
  // If it's 6-11, do something
}
```

umd

```html
<script src="../dist/main.min.js"></script>
<script>
  if (Ie.is(6, 11)) {
  // If it's 6-11, do something
  }
</script>
```

## doc

```js
function Ie(prefix = ["Moz", "Webkit", "O", "ms", "Khtml"]);
// prefix:string[]
```

| Method                                   | type    | describe                                                   |
| ---------------------------------------- | ------- | ---------------------------------------------------------- |
| isIe                                     | boolean | Determine whether the current browser is Ie                |
| isEdge                                   | boolean | Determine whether the current browser is Edge              |
| detectCss(name: string)                  | boolean | Detecting current browser CSS support                      |
| public is(front: number, after?: number) | boolean | Judging whether it is ie according to the given parameters |

## Compatibility

- module

  ie > 8

- cmd

  ie > 5

## Implementation ideas

[How to judge ie version?](https://juejin.im/post/5d79b8b45188251ecc40d879)
