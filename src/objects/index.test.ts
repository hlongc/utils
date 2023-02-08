import { describe, expect, test } from '@jest/globals';
import { omit, pick } from './index';

describe('omit useage', () => {
  test('omit key', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    };
    const ret = omit(obj, ['a', 'd']);
    console.log('ret omit', ret);
    expect('a' in ret).toBe(false);
    expect('b' in ret).toBe(true);
    expect('c' in ret).toBe(true);
    expect('d' in ret).toBe(false);
  });
});

describe('pick useage', () => {
  test('pick key', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    };
    const ret = pick(obj, ['a', 'd']);
    console.log('ret pick', ret);
    expect(ret['a']).toBe(1);
    expect('b' in ret).toBe(false);
    expect('c' in ret).toBe(false);
    expect(ret['d']).toBe(4);
  });
});
