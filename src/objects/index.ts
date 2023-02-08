/**
 * 删除obj中的keys并返回新的对象
 * @param obj
 * @param keys
 * @returns
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string>,
): Omit<T, K> {
  const clone = { ...obj };
  keys.forEach((key) => {
    if ((key as K) in obj) {
      delete clone[key as K];
    }
  });
  return clone;
}

/**
 * pick出obj种keys属性，同typescript Pick
 * @param obj
 * @param keys
 * @returns
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string>,
): Pick<T, K> {
  const clone = {} as Pick<T, K>;
  keys.forEach((key) => {
    const k = key as K;
    if ((key as K) in obj) {
      clone[k] = obj[k];
    }
  });
  return clone;
}
