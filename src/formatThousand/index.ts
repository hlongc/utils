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
