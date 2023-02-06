# omit

类似于 typescript 中的 Omit，并且能进行代码提示。

```tsx | pure
import { omit } from 'ronnie-utils';

const tmp = { a: 1, b: 2, c: 3, d: 4 };
const ret = omit(tmp, ['a', 'b']);
console.log(ret);
```
