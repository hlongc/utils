# clipboard

复制指定字符串到剪切板中。

```tsx
/**
 * defaultShowCode: true
 */
import { Button, Input, message } from 'antd';
import { useState } from 'react';
import { clipboard } from 'ronnie-utils';

export default function () {
  const [content, setContent] = useState<string>();
  const handleCopy = async () => {
    try {
      await clipboard(content);
      message.success('已复制到剪切板');
    } catch (e) {
      console.log(e);
      message.error('复制到剪切板失败');
    }
  };
  return (
    <div>
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="请输入"
        style={{ width: 350, marginRight: 15 }}
      />
      <Button onClick={handleCopy} type="primary">
        复制到剪切板
      </Button>
    </div>
  );
}
```
