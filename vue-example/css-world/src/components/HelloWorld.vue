<template>
  <div>
    <!-- 应用特殊样式的元素 -->
    <h1 ref="skewedText" class="textItem">Hello, Vue!</h1>
  </div>
</template>

<script>
import { textSkew } from '@/assets/js/cssW';
// import { textSkew } from './../../../../cssWorld/cssW.js';

export default {
  mounted() {
    // 初始化文本倾斜特效


    // textSkew(this.$refs.skewedText);


    this.skewInstance = textSkew('.textItem' ,{
        translateX: '-14px', // 自定义选项...
        translateY: '5px',
        scaleY: '0.5',
        skew: '50deg',
        blur: '2px'
      });
  },
  beforeDestroy() {
    // 清理逻辑，如果需要的话
    if (this.skewInstance) {
      // 根据实际情况决定是否需要进行清理
    }
  }
}
</script>

<style scoped>
/* 任何额外的样式 */
</style>