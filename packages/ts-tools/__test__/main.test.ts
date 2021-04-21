import { JSDOM } from "jsdom";
export interface Global {
  document: Document;
  window: Window;
}

declare var global: Global;
const dom = new JSDOM();

global.document = dom.window.document;
global.window = dom.window;
import ie from "../src/main";
test("css侦测属性", () => {
  expect(ie.detectCss("maxHeight")).toBe(true);
  expect(ie.detectCss("transform")).toBe(true);
  expect(ie.detectCss("transforms")).toBe(false);
});

test("浏览器范围", () => {
  expect(() => ie.is(5)).toThrow();
  expect(() => ie.is(12)).toThrow();
  expect(() => ie.is(NaN)).toThrow();
  expect(() => ie.is(5, 11)).toThrow();
  expect(() => ie.is(6, 12)).toThrow();
  expect(ie.is(11)).toBe(false);
  expect(ie.is(6, 11)).toBe(false);
  expect(ie.is(11, 6)).toBe(false);
  expect(ie.isIe()).toBe(false);
  expect(ie.isEdge()).toBe(false);
});
