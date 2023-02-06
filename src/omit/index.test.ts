import { describe, expect, test } from '@jest/globals';
import { omit } from './index';

describe('omit useage', () => {
  test('omit key', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    };
    const ret = omit(obj, ['a', 'd']);
    expect('a' in ret).toBe(false);
    expect('b' in ret).toBe(true);
    expect('c' in ret).toBe(true);
    expect('d' in ret).toBe(false);
  });
});
