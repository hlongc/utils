import { classnames } from './index';

describe('classnames', () => {
  test('one', () => {
    const classList = ['a', 'b', ['c', 'f'], { d: false, e: true }, null];
    expect(classnames(...classList)).toBe('a b c f e');
  });
});
