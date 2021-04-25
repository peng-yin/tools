/*
  其他函数组件的类型定义
  HTML元素的扩展属性
  你可以通过 JSX.IntrinsicElements 集合确保你能够设置一个元素的所有HTML属性。如：
*/
import React, { FC } from "react";

export const Button = () => (
  <button
    type="button"
    onClick={() => console.log(`hello lerna!!!`)}
  >
    Click me
  </button>
);




