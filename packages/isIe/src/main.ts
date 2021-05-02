declare global {
  interface Window {
    ActiveXObject: any;
  }
}
class Ie {
  public prefix: Array<string> = [];
  private userAgent: string = navigator.userAgent;
  private minVersion = 6;
  private maxVersion = 11;
  public constructor(prefix = ["Moz", "Webkit", "O", "ms", "Khtml"]) {
    this.prefix = prefix;
  }
  /**
   * 返回环境是否为ie
   */
  public isIe(): boolean {
    return !!(window.ActiveXObject || "ActiveXObject" in window);
  }
  /**
   * @front {number} 判断的版本
   * @after {number} 可选参数，如果存在则判断范围
   */
  public is(front: number, after?: number): boolean {
    this.Error(front);
    if (after === undefined) {
      return front == 11 ? this.ie11() : this.range(front);
    }
    // 判断一下位置大小，如果大于则交换位置
    this.Error(after);
    if (front > after) {
      // 借助二进制运算符交换一下，这里可以用其他方式
      (front ^= after), (after ^= front), (front ^= after);
    }
    for (let i = front; i <= after; i++) {
      const result = i == 11 ? this.ie11() : this.range(i);
      if (result) {
        return true;
      }
    }
    return false;
  }
  public isEdge(): boolean {
    return this.userAgent.indexOf("Edge") > -1;
  }
  /**
   *侦查css支持情况
   */
  public detectCss(name: string): boolean {
    if (name in document.body.style) return true;
    const prefProperty = name.charAt(0).toUpperCase() + name.substr(1);
    for (const value of this.prefix) {
      const v = value + prefProperty;
      if (v in document.body.style) {
        return true;
      }
    }
    return false;
  }
  private ie11(): boolean {
    const reg = /rv:(\d+)/;
    const exec = reg.exec(this.userAgent);
    return !!(exec && Number(exec[1]) == 11);
  }
  private range(edition: number): boolean {
    var reg = /MSIE\s+(\d+)/;
    var exec = reg.exec(this.userAgent);
    return !!(exec && Number(exec[1]) == edition);
  }
  // 报错
  private Error(edition: number) {
    if (
      isNaN(edition) ||
      edition > this.maxVersion ||
      edition < this.minVersion
    ) {
      throw new Error(
        `Error in filling in version number, the correct range is ${this.minVersion} - ${this.maxVersion}`
      );
    }
  }
}
const ie = new Ie();
export default ie;