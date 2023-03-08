import { isArray, isObject, isString } from '../is';

type classnamesArg =
  | string
  | string[]
  | { [key: string]: any }
  | undefined
  | null
  | boolean;

export function classnames(...args: classnamesArg[]): string {
  const length = args.length;
  let classnames: string[] = [];
  for (let i = 0; i < length; i++) {
    const v = args[i];
    if (!v) {
      continue;
    }
    if (isString(v)) {
      classnames.push(v);
    } else if (isArray(v)) {
      classnames = classnames.concat(v);
    } else if (isObject(v)) {
      // eslint-disable-next-line
      Object.keys(v).forEach((k) => {
        if (v[k]) {
          classnames.push(k);
        }
      });
    } else {
      console.error('arguments must be one of string/array/object');
    }
  }
  return [...new Set(classnames)].join(' ');
}
