# classnames

用于样式合并。

```tsx | pure
import { classnames } from 'ronnie-utils';

console.log(classnames('a', 'b', ['c', 'f'], { d: false, e: true }, null)); // "a b c f e"
```
