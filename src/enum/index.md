# generateEnumer

常用的 key value 列表操作。

```ts | pure
import { generateEnumer } from 'ronnie-utils';

interface IOption {
  name: string;
  val: number;
  [key: string]: any;
}

const inputData: IOption[] = [
  {
    name: 'one',
    val: 1,
  },
  {
    name: 'two',
    val: 2,
  },
  {
    name: 'three',
    val: 3,
  },
];

const {
  keys,
  values,
  getValueByKey,
  getKeyByValue,
  getCurrentByKey,
  getCurrentByValue,
} = generateEnumer<IOption>(inputData, 'name', 'val');

console.log('keys', keys); // [ 'one', 'two', 'three' ]
console.log('values', values); // [ 1, 2, 3 ]

getValueByKey('one'); // 1
getKeyByValue(2); // 'two'
getCurrentByKey('one'); // { name: 'one', val: 1 }
getCurrentByValue(1); // { name: 'one', val: 1 }
```
