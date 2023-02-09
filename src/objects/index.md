# objects

类似于 typescript 中的 Omit 和 pick，并且能进行代码提示。

```tsx | pure
/**
 * defaultShowCode: true
 */
import { omit, pick } from 'ronnie-utils';

const tmp = { a: 1, b: 2, c: 3, d: 4 };
console.log(omit(tmp, ['a', 'd'])); // { b: 2, c: 3 }
console.log(pick(tmp, ['a', 'd'])); // { a: 1, d: 4 }
```
