import { list2tree, tree2list } from '.';

interface IRow {
  label: string;
  value: string;
  id: string;
  pid: string;
}

const testData: IRow[] = [
  {
    id: '1',
    pid: '-1',
    label: '人类',
    value: 'human',
  },
  {
    id: '2',
    pid: '-1',
    label: '狗',
    value: 'dog',
  },
  {
    id: '3',
    pid: '1',
    label: '黄种人',
    value: 'yellow',
  },
  {
    id: '4',
    pid: '2',
    label: '中华田园犬',
    value: 'tianyuanquan',
  },
];

describe('transform', () => {
  const data = list2tree<IRow>(testData);

  test('list2tree', () => {
    const human = data.find((item) => item.value === 'human');
    expect(human?.children).toEqual([
      {
        id: '3',
        pid: '1',
        value: 'yellow',
        label: '黄种人',
      },
    ]);
  });

  test('tree2list', () => {
    const list = tree2list(data);
    expect(list.length).toBe(4);
  });
});
