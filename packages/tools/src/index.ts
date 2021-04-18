// 邮箱
export const isEmail = (s: string) => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);

// 手机号码
export const isMobile = (s: string) => /^1[0-9]{10}$/.test(s);

// 电话号码
export const isPhone = (s: string) => /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);

// 是否URL地址
export const isURL = (s: string) => /^http[s]?:\/\/.*/.test(s);

// 是否字符串
export const isString = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'String';

// 是否数字
export const isNumber = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Number';

// 是否boolean
export const isBoolean = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';

// 是否函数
export const isFunction = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Function';

// 是否为null
export const isNull = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Null';

// 是否undefined
export const isUndefined = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';

// 是否对象
export const isObj = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Object';

// 是否数组
export const isArray = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Array';

// 是否时间
export const isDate = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Date';

// 是否正则
export const isRegExp = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';

// 是否错误对象
export const isError = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Error';

// 是否Symbol函数
export const isSymbol = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';

// 是否Promise对象
export const isPromise = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Promise';

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
      console.log(1212);
      return [err, undefined];
    });
}

export default to;

