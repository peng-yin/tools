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

// 是否Set对象

export const isSet = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
};
// 是否是微信浏览器
export const ua = navigator.userAgent.toLowerCase();

// export const isWeiXin = () => {
//     return ua.match(/microMessenger/i) == 'micromessenger'
// }

// 是否是移动端

export const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua);
};

// 是否是QQ浏览器
export const isQQBrowser = () => {
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
};

// 是否是爬虫
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
    ua,
  );
};

// 是否ios
export const isIos = () => {
  const u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    // 安卓手机
    return false;
  } else if (u.indexOf('iPhone') > -1) {
    // 苹果手机
    return true;
  } else if (u.indexOf('iPad') > -1) {
    // iPad
    return false;
  } else if (u.indexOf('Windows Phone') > -1) {
    // winphone手机
    return false;
  } else {
    return false;
  }
};

// 是否为PC端
export const isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

// 获取url参数
export const getQueryString = (name: string) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const search = window.location.search.split('?')[1] || '';
  const r = search.match(reg) || [];
  return r[2];
};

// 动态引入js
export const injectScript = (src: string) => {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = src;
  const t = document.getElementsByTagName('script')[0];
  t.parentNode!.insertBefore(s, t);
};

// 根据url地址下载
export const download = (url: string) => {
  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  if (isChrome || isSafari) {
    const link = document.createElement('a');
    link.href = url;
    if (link.download !== undefined) {
      const fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
      link.download = fileName;
    }
    if (document.createEvent) {
      const e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download';
  }
  window.open(url, '_self');
  return true;
};

// el是否包含某个class
export const hasClass = (el: HTMLElement, className: string) => {
  const reg = new RegExp(`(^|\\s)${className}(\\s|$)`);
  return reg.test(el.className);
};

// el添加某个class
export const addClass = (el: HTMLElement, className: string) => {
  if (hasClass(el, className)) {
    return;
  }
  const newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
};

// el去除某个class
export const removeClass = (el: HTMLElement, className: string) => {
  if (!hasClass(el, className)) {
    return;
  }
  const reg = new RegExp(`(^|\\s)${className}(\\s|$)`, 'g');
  el.className = el.className.replace(reg, ' ');
};

// 获取滚动的坐标
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});

// 滚动到顶部
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// el是否在视口范围内
export const elementIsVisibleInViewport = (el: HTMLElement, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// 严格的身份证校验
export const isCardID = (sId: string) => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误');
    return false;
  }
  // 身份证城市
  const aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.log('你的身份证地区非法');
    return false;
  }

  // 出生日期验证
  const sBirthday = `${sId.substr(6, 4)}-${Number(sId.substr(10, 2))}-${Number(sId.substr(12, 2))}`.replace(/-/g, '/');
  const d = new Date(sBirthday);
  if (sBirthday !== `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`) {
    console.log('身份证上的出生日期非法');
    return false;
  }

  // 身份证号码校验
  let sum = 0;
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const codes = '10X98765432';
  for (let i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  const last = codes[sum % 11]; // 计算出来的最后一位身份证号码
  if (sId[sId.length - 1] !== last) {
    console.log('你输入的身份证号非法');
    return false;
  }

  return true;
};

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

