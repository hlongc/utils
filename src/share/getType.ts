/**
 * 获取传入数据的类型
 * @param val
 * @returns {string}
 */
export const getType = (val: any): string =>
  Object.prototype.toString.call(val).slice(8, -1);
