import { getType } from '../share/getType';

/**
 * 传入options，返回相应的操作方法
 * @param options
 * @param keyField key字段，默认为key
 * @param valueFiled value字段，默认为value
 * @returns
 */
export function generateEnumer<T = Record<string, any>>(
  options: T[],
  keyField = 'key' as keyof T,
  valueFiled = 'value' as keyof T,
) {
  if (!Array.isArray(options)) {
    throw new TypeError(
      `options should be array, but received ${getType(options)}`,
    );
  }
  const list = options;

  /**
   * key map映射关系
   */
  const map = new Map();
  /**
   * key和item的映射关系
   */
  const itemMap = new Map<any, T>();
  list.forEach((item) => {
    map.set(item[keyField], item[valueFiled]);
    itemMap.set(item[keyField], item);
  });
  /**
   * key集合
   */
  const keys = [...map.keys()];
  /**
   * value集合
   */
  const values = [...map.values()];
  /**
   * 通过key获取对应的value
   */
  const getValueByKey = (key: any) => map.get(key);
  /**
   * 通过value获取对应的key
   */
  const getKeyByValue = (value: any) => {
    return list.find((item) => item[valueFiled] === value)?.[keyField];
  };
  /**
   * 通过key获取当前item
   */
  const getCurrentByKey = (key: any) => itemMap.get(key);
  /**
   * 通过value获取当前item
   */
  const getCurrentByValue = (value: any) => {
    return list.find((item) => item[valueFiled] === value);
  };

  return {
    list,
    map,
    itemMap,
    keys,
    values,
    getValueByKey,
    getKeyByValue,
    getCurrentByKey,
    getCurrentByValue,
  };
}
