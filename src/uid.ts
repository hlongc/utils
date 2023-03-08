const now = +new Date();
let index = 0;

/**
 * 生成唯一id
 * @returns
 */
export function uid() {
  return `uid-${now}-${++index}`;
}
