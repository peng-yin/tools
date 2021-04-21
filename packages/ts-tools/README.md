# ie-judgement

> 用于判断当前浏览器是否为 ie，以及判断当前所在 ie 版本号

![size](https://img.shields.io/badge/Minified%20Size-1.15%20KB-brightgreen) ![License](https://img.shields.io/badge/License-MIT-brightgreen)

简体中文 | [English](/README-English.md)

## 下载

```sh
npm i ie-judgement
# or
yarn add ie-judgement
```

file：[umd-Ie](/dist/main.js)

file：[umd-Ie min 文件](/dist/main.js)

## 快速上手

```js
import Ie from "ie-judgement";
if (Ie.is(6, 11)) {
  // 如果是6-11执行一些操作
}
```

umd

```html
<script src="../dist/main.min.js"></script>
<script>
  if (Ie.is(6, 11)) {
    // 如果是6-11执行一些操作
  }
</script>
```

## doc

```js
function Ie(prefix = ["Moz", "Webkit", "O", "ms", "Khtml"]);
// prefix:string[]
```

| 方法                                     | 类型    | 描述                        |
| ---------------------------------------- | ------- | --------------------------- |
| isIe                                     | boolean | 判断当前浏览器是否为 Ie     |
| isEdge                                   | boolean | 判断当前浏览器是否为 Edge   |
| detectCss(name: string)                  | boolean | 侦查当前浏览器 css 支持情况 |
| public is(front: number, after?: number) | boolean | 根据给定参数判断是否为 ie   |

## 兼容性

- module

  ie > 8

- cmd

  ie > 5

## 实现思路

[如何判断 ie 版本？](https://juejin.im/post/5d79b8b45188251ecc40d879)
