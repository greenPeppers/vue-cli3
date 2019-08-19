<template>
  <hs-dialog
    class="steps__dialog"
    @confirm="confirm"
    @cancel="cancel"
    :title="title"
    :confirmText="isFinish ? confirmText : '下一步'"
    :cancelText="cancelText"
    :visible.sync="dialogVisible"
    width="600px"
  >
    <hs-steps :active="stepsActiveIndex" :steps="steps">
      <slot />
    </hs-steps>

  </hs-dialog>
</template>
 
<script>
 
export default {
  name: 'hs-steps-dialog',
  props: {
    // 是否显示hs-dialog显示隐藏状态
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
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
    // 步骤数
    steps: {
      type: Number | Array,
      default: () => []
    }
  },
  data() {
    return{
      dialogVisible: false, // 显隐状态
      stepsActiveIndex: 1, // 当前所属步骤下标
    }
  },
  created() {
    
  },
  mounted() {
    
  },
  computed: {
    /**
     * 是否是最后一步
     */
    isFinish() {
      if (typeof this.steps === 'number') return this.stepsActiveIndex >= this.steps;
      else return this.stepsActiveIndex >= (this.steps.length - 1);
    }
  },
  filters: {
    
  },
  components: {
    
  },
  watch: {
    // 监听状态并同步
    visible(val) {
      this.dialogVisible = val;
    },
    // 监听状态并同步
    dialogVisible(val) {
      // if (!val) this.$refs.ruleForm.resetFields();
      this.$emit("update:visible", val);
    }
  },
  methods: {
    confirm() {

    },
    cancel() {

    }
  },
}
</script>
 
<style lang='scss'>
  
</style>