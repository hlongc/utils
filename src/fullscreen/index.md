# fullscreen

全屏相关 api。

```tsx
/**
 * defaultShowCode: true
 */
import { Switch } from 'antd';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  enterFullscreen,
  exitFullscreen,
  isFullscreen,
  listenFullscreen,
  unlistenFullscreen,
} from 'ronnie-utils';

export default function () {
  const container = useRef();
  const [isFull, setIsFull] = useState<boolean>(false);

  const listenFn = useCallback(() => {
    setIsFull(isFullscreen());
  }, []);

  useLayoutEffect(() => {
    listenFn();
  }, []);

  useEffect(() => {
    listenFullscreen(listenFn);
    return () => {
      unlistenFullscreen(listenFn);
    };
  }, []);

  return (
    <div ref={container} style={{ backgroundColor: '#fff' }}>
      <p>试试全屏当前元素</p>
      <Switch
        checked={isFull}
        onChange={(val) =>
          val ? enterFullscreen(container.current) : exitFullscreen()
        }
      ></Switch>
      <p>当前是否为全屏: {isFull ? '是' : '否'}</p>
    </div>
  );
}
```
