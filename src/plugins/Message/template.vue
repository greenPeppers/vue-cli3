<template>
  <transition name="fade">
    <div v-if="isVisible" class="self-message">
      {{message}}
      <button class="self-message__close" @click="close">关闭</button>
      <slot></slot>
    </div>
  </transition>
</template>
 
<script>
export default {
  name: "selfMessage",
  data() {
    return {
      isVisible: true,
      message: "默认message",
      onClose: null,
      duration: 1000,
      timer: null
    };
  },

  created() {},

  mounted() {
    this.setTimeouter();
  },

  methods: {
    /**
     * 关闭弹窗
     */
    close() {
      this.isVisible = false;
      this.onClose instanceof Function && this.onClose(this);
      this.clearTimer();
    },

    /**
     * 清理定时器
     */
    clearTimer() {
      this.timer && clearTimeout(this.timer);
    },

    /**
     * 延时关闭
     */
    setTimeouter() {
      if (this.duration <= 0) return;
      this.timer = setTimeout(() => {
        this.close();
      }, this.duration);
    }
  },

  computed: {}
};
</script>
 
<style lang='scss'>
.self-message {
  width: 98vw;
  height: 10vh;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  position: fixed;
  top: 1vh;
  left: 1vw;
  right: 1vw;
  .self-message__close {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>