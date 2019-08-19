<template>
  <el-dialog
    class="hs-dialog_wrap"
    :visible.sync="dialogVisble"
    :width="width"
    :fullscreen="fullscreen"
    append-to-body
    modal-append-to-body
    :close-on-click-modal="clickModalClose"
    :show-close="showClose"
    @close="cancel"
  >
    <div class="hs-dialog_title" slot="title">{{ title }}</div>
    <slot />
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">{{ cancelText }}</el-button>
      <el-button type="primary" @click="confirm">{{ confirmText }}</el-button>
    </span>
  </el-dialog>
</template>
 
<script>
export default {
  name: "hs-dialog",
  props: {
    // 控制显示隐藏
    visible: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ""
    },
    //确认按钮
    confirmText: {
      type: String,
      default: "确 定"
    },
    // 取消按钮
    cancelText: {
      type: String,
      default: "取 消"
    },
    // 宽度
    width: {
      type: String,
      default: "50%"
    },
    // 是否可以点击modal层关闭弹窗
    clickModalClose: {
      type: Boolean,
      default: false
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    },
    // 是否是全屏
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisble: this.visible
    };
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {
    dialogVisble(val) {
      this.$emit("update:visible", val);
    },
    visible(val) {
      this.dialogVisble = val;
    }
  },
  methods: {
    /**
     * 确定
     */
    confirm() {
      this.$emit("confirm");
    },
    /**
     * 取消 关闭
     */
    cancel() {
      this.$emit("update:visible", false);
      this.$emit("cancel", false);
    }
  }
};
</script>
 
<style lang='scss'>
.hs-dialog_wrap {
  .hs-dialog_title {
    font-size: 16px;
    line-height: 16px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    border-left: 3px solid rgba(78, 127, 208, 1);
    text-indent: 0.5em;
  }
  .el-dialog {
    // max-height: 70vh;
    // overflow-y: auto;
  }
}
</style>