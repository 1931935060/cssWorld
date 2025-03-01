# cssWorld

动效采集者留言：如果您发现有好的css效果，可以把网址分享给我采集，便于您和所有人使用，命名的唯一变更性取决于您！









"Dear effect collector: If you find any good CSS effects, you can share the URL with me for collection. This will make it easier for you and everyone else to use. The uniqueness of the naming depends on you!"





























### 使用案例手册

---

#### Introduction (介绍)

This document provides a guide on how to use the `cssW` library for applying dynamic text effects to HTML elements. It covers both basic and advanced usage scenarios, including integrating with Vue.js components.

本文档提供了如何使用`cssW`库对HTML元素应用动态文本效果的指南。它涵盖了基本和高级用例，包括与Vue.js组件的集成。

---

#### Quick Start (快速入门)

To get started, include the `cssW` script in your project and call the `textSkew` method with the desired element or selector.

要开始使用，请在项目中引入`cssW`脚本，并使用所需的元素或选择器调用`textSkew`方法。

**Example:**

```javascript
// Include cssW library
import { textSkew } from './path/to/cssW';

// Apply text skew effect to an element
textSkew('.your-selector', {
    translateX: '-10px',
    translateY: '5px',
    scaleY: '0.7',
    skew: '20deg',
    blur: '2px'
});
```

---

#### Using with Vanilla JavaScript (使用纯JavaScript)

Here's how you can apply the text skew effect using pure JavaScript without any framework:

以下是如何使用纯JavaScript（不使用任何框架）应用文本倾斜效果：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS World Text Skew Example</title>
</head>
<body>
    <h1 id="skewedText">Hello, CSS World!</h1>

    <!-- Include cssW library -->
    <script src="./path/to/cssW.js"></script>
    <script>
        // Apply text skew effect
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

---

#### Integrating with Vue.js Components (与Vue.js组件集成)

Integrating `cssW` into Vue.js components allows for more interactive and dynamic web applications.

将`cssW`集成到Vue.js组件中可以创建更加交互式和动态的Web应用程序。

**Vue Component Example:**

```vue
<template>
  <div>
    <!-- Element to apply skew effect -->
    <h1 ref="skewedText">Hello, Vue!</h1>
  </div>
</template>

<script>
import { textSkew } from './path/to/cssW';

export default {
  name: 'SkewedTextComponent',
  mounted() {
    // Initialize text skew effect
    this.skewInstance = textSkew(this.$refs.skewedText, {
      translateX: '-10px',
      translateY: '5px',
      scaleY: '0.7',
      skew: '20deg',
      blur: '2px'
    });
  },
  beforeDestroy() {
    // Cleanup logic if necessary
  }
}
</script>

<style scoped>
/* Additional styles */
</style>
```

---

#### Advanced Usage - Custom Strategies (高级用法 - 自定义策略)

You can define custom strategies by extending the `StyleStrategy` class. This allows for highly customized text effects.

通过扩展`StyleStrategy`类来定义自定义策略，这允许高度定制的文本效果。

**Creating a New Strategy:**

```javascript
class CustomStyleStrategy extends StyleStrategy {
    applyStyles(cssWInstance) {
        const style = document.createElement('style');
        style.id = 'customCssWorldStyles';
        style.innerHTML = `
            .custom-skew-cssW {
                position: relative;
                display: inline-block;
            }
            .custom-skew-cssW::before {
                content: attr(data-content);
                color: blue;
                transform: rotate(${cssWInstance.options.rotate}) scale(${cssWInstance.options.scale});
            }
        `;
        document.getElementsByTagName('head')[0].appendChild(style);

        cssWInstance.element.classList.add('custom-skew-cssW');
    }
}

// Apply custom strategy
textSkew('.your-selector', {}, CustomStyleStrategy);
```

---

#### Conclusion (结论)

The `cssW` library is a powerful tool for adding dynamic text effects to your web projects. Whether you're working with vanilla JavaScript or frameworks like Vue.js, it offers flexibility and customization options to meet various design requirements.

`cssW`库是一个强大的工具，可用于向您的Web项目添加动态文本效果。无论您是在使用纯JavaScript还是像Vue.js这样的框架，它都提供了灵活性和自定义选项，以满足各种设计要求。