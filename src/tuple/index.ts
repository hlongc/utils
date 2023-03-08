/**
 * 通过tuple生成带有类型提示的数组，并进行后续操作
 * @param args
 * @returns
 * @example
 * const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
 * export type ButtonType = typeof ButtonTypes[number];
 *
 * ButtonType此时就是一个联合类型"default" | "primary" | "ghost" | "dashed" | "link" | "text",而ButtonTypes每一项都能获得类型提示
 */
export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;

export type ElementOf<T> = T extends (infer E)[]
  ? E
  : T extends readonly (infer F)[]
  ? F
  : never;

type noop = (this: any, ...args: any[]) => any;

/**
 * 剔除T的其他属性，只保留函数
 */
export type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;
