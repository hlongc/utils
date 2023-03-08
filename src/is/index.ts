import { getType } from '../share/getType';

export function isArray(obj: any): obj is any[] {
  return getType(obj) === 'Array';
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return getType(obj) === 'Object';
}

export function isString(obj: any): obj is string {
  return getType(obj) === 'String';
}

export function isNumber(obj: any): obj is number {
  return getType(obj) === 'Number' && obj === obj; // eslint-disable-line
}

export function isRegExp(obj: any) {
  return getType(obj) === 'RegExp';
}

export function isFile(obj: any): obj is File {
  return getType(obj) === 'File';
}

export function isBlob(obj: any): obj is Blob {
  return getType(obj) === 'Blob';
}

export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function';
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

/**
 * 判断null 或者 undefined的情况 0 会正常返回
 * @param target
 * @returns
 */
export function isEmptyValue(value: any) {
  return value === null || value === undefined;
}

/**
 * 判断该文件是什么文件类型
 * @param filename 包含后缀的文件名
 * @param fullUrl 完整路径，如：https://www.xx.com/a.png
 * @returns
 */
export const getFileTypeByFileName = (filename: string, fullUrl?: string) => {
  const getExt = (str: string) => {
    const matches = str.match(/\.\w+(?=[?#].+)/) || str.match(/\.\w+$/);
    if (matches) {
      return matches[0];
    }
  };
  const ext = getExt(filename) || (fullUrl && getExt(fullUrl)) || '';
  return {
    isImage: /\.(png|jpe?g|gif|)$/i.test(ext),
    isVideo: /\.(mp4|webm|ogg|flv|mov)$/i.test(ext),
    isPdf: /\.pdf$/i.test(ext),
    isExcel: /\.xls(x|_)?/i.test(ext),
    isWord: /\.doc(x|_)?/i.test(ext),
  };
};
