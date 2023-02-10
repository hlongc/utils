import React, { FC } from 'react';

export { classnames } from './classnames';
export { clipboard } from './clipboard';
export { formatThousand } from './formatThousand';
export * from './fullscreen';
export { getStyle } from './getStyle';
export * from './objects';
export * from './types';

export const Foo: FC<{
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string;
}> = ({ title }) => <h1>{title}</h1>;
