declare global {
  interface Window {
    ActiveXObject: any;
  }
}

declare class Ie {
  public prefix: Array<string>;
  private userAgent: string;
  private minVersion: number;
  private maxVersion: number;
  public constructor(prefix: string[]);
  /**
   * 返回环境是否为ie
   */
  public isIe(): boolean;
  /**
   * @front {number} 判断的版本
   * @after {number} 可选参数，如果存在则判断范围
   */
  public is(front: number, after?: number): boolean;
  public isEdge(): boolean;
  /**
   *侦查css支持情况
   */
  public detectCss(name: string): boolean;
  private ie11(): boolean;
  // 报错
  private Error(edition: number);
}
declare const ie: Ie;
export default ie;
