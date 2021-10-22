// @ts-ignore
import { isEmail } from './utils.ts';

export {
  isEmail
}

// 手机号码
export const isMobile = (s: string) => /^1[0-9]{10}$/.test(s);

// 电话号码
export const isPhone = (s: string) => /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);

// 是否URL地址
export const isURL = (s: string) => /^http[s]?:\/\/.*/.test(s);

// 是否字符串
export const isString = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'String';

// 是否数字
export const isNumber = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Number';

// 是否boolean
export const isBoolean = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';

// 是否函数
export const isFunction = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Function';

// 是否为null
export const isNull = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Null';

// 是否undefined
export const isUndefined = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';

// 是否对象
export const isObj = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Object';

// 是否数组
export const isArray = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Array';

// 是否时间
export const isDate = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Date';

// 是否正则
export const isRegExp = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';

// 是否错误对象
export const isError = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Error';

// 是否Symbol函数
export const isSymbol = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';

// 是否Promise对象
export const isPromise = (o: unknown) => Object.prototype.toString.call(o).slice(8, -1) === 'Promise';

// 是否Set对象

export const isSet = (o: unknown) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
};
// 是否是微信浏览器
export const ua = navigator.userAgent.toLowerCase();

export const copy = <T>(arg: T): T => {
  if (typeof arg === 'object') {
    return JSON.parse(
      JSON.stringify(arg)
    );
  }
  return arg;
};

/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
 export function to<T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }

      return [err, undefined];
    });
}

export default to;


// 滚动到顶部
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

function is(x: unknown, y: unknown) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    return x !== x && y !== y
  }
}

// 深比较
export function shallowEqual(objA: any, objB: any) {
  if (is(objA, objB)) return true

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) return false

  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false
    }
  }

  return true
}

