import { strip } from '../number-precision';

const unitMap = {
  yuan: '元',
  wan: '万元',
  yi: '亿元',
};

const WAN = 10000;

/**
 * 对传入的数字进行千分位格式化
 * @param origin 传入的数字
 * @param sep 分隔符，默认为 ,
 * @returns
 */
export function formatThousand(origin: number | string, sep = ',') {
  const input = typeof origin === 'number' ? origin.toString() : origin;
  return input.replace(/\B(?=(\d{3})+\b)/g, sep);
}

/**
 * 对金额进行格式化，元为单位时，保留两位小数，并且进行千分位展示；万元为单位时，保留两位小数；亿元为单位时，保留四位小数
 * @param money
 * @param unit 'yuan' | 'wan' | 'yi'
 * @param withUnit 是否需要展示单位,默认true
 * @param sep unit为yuan时，千分位的分隔符，默认为","
 * @returns
 */
export function formatMoney(
  money: number | string,
  unit: keyof typeof unitMap,
  withUnit = true,
  sep = ',',
) {
  const input = typeof money === 'string' ? parseFloat(money) : money;
  const addUnit = (value: string) => (withUnit ? value + unitMap[unit] : value);
  if (unit === 'yuan') {
    return addUnit(formatThousand(input.toFixed(2), sep));
  }
  if (unit === 'wan') {
    return addUnit((input / WAN).toFixed(2));
  }
  return addUnit((input / (WAN * WAN)).toFixed(4));
}

/**
 * 获取一个区间的随机数
 * @param minNum 左区间
 * @param maxNum 右区间
 * @returns
 */
export const getRandomNum = (minNum: number, maxNum: number) => {
  return strip(Math.random() * (maxNum - minNum + 1) + minNum);
};
