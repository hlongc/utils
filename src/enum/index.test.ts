import { generateEnumer } from './index';

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

console.log('keys', keys);
console.log('values', values);

describe('generateEnumer', () => {
  test('getValueByKey', () => {
    expect(getValueByKey('one')).toBe(1);
  });

  test('getKeyByValue', () => {
    expect(getKeyByValue(2)).toBe('two');
  });

  test('getCurrentByKey', () => {
    expect(getCurrentByKey('one')).toStrictEqual({
      name: 'one',
      val: 1,
    });
  });

  test('getCurrentByValue', () => {
    expect(getCurrentByValue(1)).toStrictEqual({
      name: 'one',
      val: 1,
    });
  });
});
