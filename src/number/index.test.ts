import { formatMoney, formatThousand } from './index';

describe('金钱格式化', () => {
  const money = 12345678;
  test('对金钱进行单位为元的格式化', () => {
    expect(formatMoney(money, 'yuan')).toBe('12,345,678.00元');
    expect(formatMoney(money, 'yuan', false)).toBe('12,345,678.00');
  });

  test('对金钱进行单位为万元的格式化', () => {
    expect(formatMoney(money, 'wan')).toBe('1234.57万元');
    expect(formatMoney(money, 'wan', false)).toBe('1234.57');
  });

  test('对金钱进行单位为亿元的格式化', () => {
    expect(formatMoney(money, 'yi')).toBe('0.1235亿元');
    expect(formatMoney(money, 'yi', false)).toBe('0.1235');
  });
});

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
