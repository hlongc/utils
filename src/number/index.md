# formatMoney

对金额进行格式化，元为单位时，保留两位小数，并且进行千分位展示；万元为单位时，保留两位小数；亿元为单位时，保留四位小数。

```tsx | pure
import { formatMoney, formatThousand } from 'ronnie-utils';

const money = 12345678;

console.log(formatMoney(money, 'yuan')); // '12,345,678.00元'
console.log(formatMoney(money, 'yuan', false)); // '12,345,678.00'
console.log(formatMoney(money, 'wan')); // '1234.57万元'
console.log(formatMoney(money, 'wan', false)); // '1234.57'
console.log(formatMoney(money, 'yi')); // '0.1235亿元'
console.log(formatMoney(money, 'yi', false)); // '0.1235'
console.log(formatThousand(1234567)); // "1,234,567"
```
