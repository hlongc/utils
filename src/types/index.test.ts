import { describe, expect, test } from '@jest/globals';
import * as types from './index';

describe('isString', () => {
  test('valid', () => {
    expect(types.isString('123')).toBe(true);
    expect(types.isString('hello')).toBe(true);
  });
  test('invalid', () => {
    expect(types.isString(123)).toBe(false);
    expect(types.isString(true)).toBe(false);
  });
});

describe('isNumber', () => {
  test('valid', () => {
    expect(types.isNumber(123)).toBe(true);
    expect(types.isNumber(0.1)).toBe(true);
  });
  test('invalid', () => {
    expect(types.isNumber('')).toBe(false);
    expect(types.isNumber(true)).toBe(false);
  });
});
