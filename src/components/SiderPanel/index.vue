<template lang="html">
  <transition :name="transitionName">
    <div v-show="isShow" @click.stop.self="showOrHidden" :style="positionStyles" class="hs-sider-panel__wrap">
      <div :style="contentStyles" class="hs-sider-panel__content">
        <slot />
      </div>
      
    </div>
  </transition>
</template>

<script>
export default {
  name: 'hs-sider-panel',
  props: {
    isShow: { // 是否显示
      type: Boolean,
      default: () => false
    },
    background: { // 是否有背景色
      type: Boolean,
      default: () => false
    },
    panelDirection: { // 侧滑框出现方向
      type: String,
      default: () => 'right'
    },
    panelSize: { // 弹框宽度
      type: [String, Number],
      default: () => '30%'
    },
    closeOnClickModal: { // 是否可以点击遮罩关闭滑框
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      positionDic: { // 定位样式数据字典
        'top': 'flex-direction:column;justifyContent:flex-start;',
        'bottom': 'flex-direction:column;justifyContent:flex-end;',
        'left': 'justifyContent:flex-start;',
        'right': 'justifyContent:flex-end;',
      },
      contentDic: { // 插槽容器style
        'top': 'left:0;right:0;',
        'bottom': 'left:0;right:0;',
        'left': 'top:0;bottom:0;',
        'right': 'top:0;bottom:0;',
      }
    }
  },

  computed: {

    /**
     * filterSize - 兼容number String
     *
     * @return {String}
     */
    filterSize() {
      if (typeof this.panelSize == 'string') return this.panelSize;
      else return `${this.panelSize}px`
    },

    /**
     * filterWidth - 兼容number String
     *
     * @return {String}  内容尺寸
     */
    filterStyles() {
      if (this.panelDirection == 'top' || this.panelDirection == 'bottom') return `height:${this.filterSize};`;
      else return `width:${this.filterSize};`
    },

    /**
     * positionStyles - 外框属性,控制显示隐藏
     *
     * @return {String} style字符串
     */
    positionStyles() {
      return `${this.positionDic[this.panelDirection]}backgroundColor:rgba(${this.background ? '0, 0, 0' : ''}, ${this.isShow ? .7 : 0});`
    },

    /**
     * contentStyles - 内容style
     *
     * @return {String} top:0;bottom:0;right:-30%;width:30%;
     */
    contentStyles() {
      return `${this.contentDic[this.panelDirection]}${this.panelDirection}:-${this.isShow ? 0 : this.filterSize};${this.filterStyles}`;
    },

    /**
     * transitionName - 动画name
     *
     * @return {String}   transition name
     */
    transitionName() {
      return `hs-sider-panel__wrap-${this.panelDirection}-fade`
    }
  },

  methods: {

    /**
     * showOrHidden - 控制显示隐藏
     */
    showOrHidden() {
      if (this.closeOnClickModal) this.$emit('update:isShow', !this.isShow);
    }
  }
}
</script>

<style lang="css" scoped>
  .hs-sider-panel__wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display:flex;
  }
  .hs-sider-panel__content {
    background: #fff;
    position: absolute;
    transition: all .2s ease-in-out;
    box-shadow: -1px 0 4px 0 rgba(0,0,0,0.02), -2px 0 8px 0 rgba(0,0,0,0.08);
  }

  /* top */
  .hs-sider-panel__wrap-top-fade-enter-active {
    transition: all .5s ease;
  }
  .hs-sider-panel__wrap-top-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .hs-sider-panel__wrap-top-fade-enter, .hs-sider-panel__wrap-top-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  /* bottom */
  .hs-sider-panel__wrap-bottom-fade-enter-active {
    transition: all .5s ease;
  }
  .hs-sider-panel__wrap-bottom-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .hs-sider-panel__wrap-bottom-fade-enter, .hs-sider-panel__wrap-bottom-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
  /* left */
  .hs-sider-panel__wrap-left-fade-enter-active {
    transition: all .5s ease;
  }
  .hs-sider-panel__wrap-left-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .hs-sider-panel__wrap-left-fade-enter, .hs-sider-panel__wrap-left-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
  /* right */
  .hs-sider-panel__wrap-right-fade-enter-active {
    transition: all .5s ease;
  }
  .hs-sider-panel__wrap-right-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .hs-sider-panel__wrap-right-fade-enter, .hs-sider-panel__wrap-right-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
