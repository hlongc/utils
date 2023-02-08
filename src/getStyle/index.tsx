/**
 * 获取dom元素样式
 * @param element
 * @param prop
 * @returns
 */
export function getStyle(element: HTMLElement | null, prop: string | null) {
  if (!element || !prop) return null;
  let styleName = prop as keyof CSSStyleDeclaration;
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    if (document.defaultView) {
      const computed = document.defaultView.getComputedStyle(element, '');
      return element.style[styleName] || computed ? computed[styleName] : '';
    }
  } catch (e) {
    return element.style[styleName];
  }
}
