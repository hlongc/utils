import { clipboard } from './index';

Object.assign(global, {
  navigator: {
    clipboard: {
      writeText: () => {},
    },
  },
});

describe('Clipboard', () => {
  describe('writeText', () => {
    jest.spyOn(navigator.clipboard, 'writeText');
    const str = 'hlc1';
    beforeAll(async () => {
      await clipboard(str);
    });
    test('should call clipboard.writeText', () => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(str);
    });
  });
});
