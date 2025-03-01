// 定义一个接口或抽象类，用于定义所有具体的策略需要实现的方法
class StyleStrategy {
    applyStyles() {}
}

// 具体策略A: 原始的样式应用逻辑
class OriginalStyleStrategy extends StyleStrategy {
    applyStyles(cssWInstance) {
        const style = document.createElement('style');
        style.id = 'cssWorldStyles';
        style.innerHTML = `
            .t-skew-cssW {
                position: relative;
                display: inline-block;
            }
            .t-skew-cssW::before {
                content: attr(data-content);
                color: black;
                position: absolute;
                left: 0;
                transform: translate(${cssWInstance.options.translateX}, ${cssWInstance.options.translateY}) scaleY(${cssWInstance.options.scaleY}) skew(${cssWInstance.options.skew});
                filter: blur(${cssWInstance.options.blur});
                z-index: -1;
                mask-image: linear-gradient(transparent, black);
            }
        `;
        document.getElementsByTagName('head')[0].appendChild(style);

        cssWInstance.element.classList.add('t-skew-cssW');
    }
}

// 可以根据需要增加更多策略，例如：
// class AnotherStyleStrategy extends StyleStrategy { ... }

class cssW {
    constructor(element, options = {}, strategy) {
        this.element = element;
        this.options = options;
        this.strategy = strategy; // 使用策略对象
    }

    setText() {
        this.element.setAttribute('data-content', this.fetchTextContent());
    }

    fetchTextContent() {
        return this.element.textContent || this.element.innerText;
    }

    init() {
        if (this.strategy && typeof this.strategy.applyStyles === 'function') {
            this.strategy.applyStyles(this); // 应用当前策略
        }
        this.setText();
    }

    static textSkew(elementOrSelector, options, StrategyClass = OriginalStyleStrategy) {
        const defaultOptions = {
            translateX: '-9px',
            translateY: '4px',
            scaleY: '0.5',
            skew: '30deg',
            blur: '2px'
        };
        const element = elementOrSelector instanceof HTMLElement ? elementOrSelector : document.querySelector(elementOrSelector);
        if (!element) throw new Error('Element not found');

        const instance = new cssW(element, Object.assign({}, defaultOptions, options), new StrategyClass());
        instance.init();

        return instance;
    }
}

// 根据环境决定是否导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cssW, textSkew: cssW.textSkew };
} else {
    // window.cssW = cssW;
    // window.OriginalStyleStrategy = OriginalStyleStrategy;
}
