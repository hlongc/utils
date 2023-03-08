import { isArray } from '../is';

type ITree<T> = T extends Record<any, any>
  ? T & { children?: ITree<T>[] }
  : never;

/**
 * 列表转成树结构
 * @param list
 * @param id 子级id字段
 * @param pid 父级id字段
 * @returns
 */
export function list2tree<T = Record<any, any>>(
  list: T[],
  id = 'id',
  pid = 'pid',
) {
  if (!isArray(list)) {
    throw new TypeError(`${list} should be array`);
  }
  const map = new Map();
  type Key = keyof T;
  for (const item of list) {
    map.set(item[id as Key], item);
  }
  const ret: ITree<T>[] = [];
  for (const child of list) {
    const parent = map.get(child[pid as Key]);
    if (parent) {
      parent.children = parent.children ?? [];
      parent.children.push(child);
    } else {
      ret.push(child as ITree<T>);
    }
  }
  return ret;
}

/**
 * 把树转换为列表
 * @param tree 树
 * @param childrenField children字段
 * @returns
 */
export function tree2list<T = Record<any, any>>(
  tree: T | T[],
  childrenField = 'children',
) {
  if (!tree) {
    throw new TypeError(`${tree} should be array or object`);
  }
  const result: Omit<T, 'children'>[] = [];

  const iterator = (parents: T[]) => {
    parents.forEach((parent) => {
      const children = parent[childrenField as keyof T];
      delete parent[childrenField as keyof T];
      result.push(parent);
      if (isArray(children)) {
        iterator(children);
      }
    });
  };
  const input = isArray(tree) ? tree : [tree];
  iterator(input);
  return result;
}
