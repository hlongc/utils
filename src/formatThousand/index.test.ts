import { formatThousand } from './index';

describe('千分位格式化', () => {
  test('对整数进行格式化', () => {
    expect(formatThousand(1234567)).toBe('1,234,567');
    expect(formatThousand(100)).toBe('100');
  });
  test('对小数进行格式化', () => {
    expect(formatThousand(1234567.23)).toBe('1,234,567.23');
    expect(formatThousand('100.00')).toBe('100.00');
  });
});
