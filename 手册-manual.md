# cssWorld

\### 使用案例手册

---

#### 功能函数

##### 1.  `textSkew`

`textSkew` 是用于创建基础文本倾斜效果的主要函数。通过设置不同的选项，可以调整倾斜、缩放、位移等效果。

###### 使用纯JavaScript的例子

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>CSS World 文本倾斜示例</title>
</head>
<body>
    <h1 id="skewedText">你好，CSS世界！</h1>

    <!-- 引入 cssW 库 -->
    <script src="./path/to/cssW.js"></script>
    <script>
        // 应用文本倾斜效果
        textSkew('#skewedText', {
            translateX: '-9px',
            translateY: '4px',
            scaleY: '0.5',
            skew: '30deg',
            blur: '2px'
        });
    </script>
</body>
</html>
```

将`cssW`集成到Vue.js组件中，允许创建更加交互式和动态的Web应用程序。

###### **Vue组件示例：**

```vue
<template>
  <div>
    <!-- 要应用倾斜效果的元素 -->
    <h1 ref="skewedText">你好，Vue！</h1>
  </div>
</template>

<script>
import { textSkew } from './path/to/cssW';

export default {
  name: 'SkewedTextComponent',
  mounted() {
    // 初始化文本倾斜效果
    this.skewInstance = textSkew(this.$refs.skewedText, {
      translateX: '-10px',
      translateY: '5px',
      scaleY: '0.7',
      skew: '20deg',
      blur: '2px'
    });
  },
  beforeDestroy() {
    // 如有必要，清理逻辑
  }
}
</script>

<style scoped>
/* 其他样式 */
</style>
```
