# 类型判断

用于准确判断数据类型。

```tsx | pure
/**
 * defaultShowCode: true
 */
import {
  isArray,
  isBlob,
  isEmptyObject,
  isFile,
  isFunction,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isUndefined,
} from 'ronnie-utils';

const testFn = () => 1;
const reg = /^\d$/g;

console.log(isArray([]));
console.log(isBlob(false));
console.log(isEmptyObject({}));
console.log(isFile(new File([], '测试文件')));
console.log(isFunction(testFn));
console.log(isNumber(1));
console.log(isObject({ a: 1 }));
console.log(isRegExp(reg));
console.log(isString('123'));
console.log(isUndefined(undefined));
```
