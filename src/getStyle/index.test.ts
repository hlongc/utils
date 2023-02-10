import jsdom from 'jsdom';
import { getStyle } from './index';

const { JSDOM } = jsdom;

describe('getStyle', () => {
  test('one', () => {
    const dom = new JSDOM(
      `<!DOCTYPE html><p id="demo" style="width:200px;">Hello world</p>`,
    );
    expect(getStyle(dom.window.document.querySelector('#demo'), 'width')).toBe(
      '200px',
    );
  });
});
