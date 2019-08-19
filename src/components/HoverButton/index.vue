<template>
  <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" class="hs-hover-button">
    <div  class="hs-hover-button__content">
      <slot/>
    </div>
    <div v-show="visible || isShow" :style="style" class="hs-hover-button__icon">
      <slot name="button"/>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "hs-hover-button",
  props: {
    top: {
      type: String,
      default: "0px"
    },
    bottom: {
      type: String,
      default: "0px"
    },
    left: {
      type: String,
      default: "auto"
    },
    right: {
      type: String,
      default: "0px"
    },
    // 是否一直显示
    isShow: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      visible: false
    };
  },
  created() {},
  mounted() {},
  computed: {
    style() {
      return `top:${this.top};bottom:${this.bottom};left:${this.left};right:${
        this.right
      };`;
    }
  },
  watch: {},
  methods: {
    /**
     * 左侧icon按钮事件
     */
    callback() {
      this.$emit("callback");
    },
    mouseEnter() {
      this.visible = true
    },
    mouseLeave() {
      this.visible = false
    },
  }
};
</script>
 
<style lang='scss'>
.hs-hover-button {
  width: 100%;
  .hs-hover-button__content {
    position: relative;
  }
  .hs-hover-button__icon {
    position: absolute;
    i {
      color: $hs__font-color_light-gray;
    }
  }
}
</style>