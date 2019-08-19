<template>
  <div class="hs-edit__wrap">
    <div class="edit__operat">
      <div :style="styles" v-show="!isEdit">
        <el-button size="mini" @click="edit" :icon="editIcon" plain>编辑</el-button>
      </div>
      <div :style="styles" v-show="isEdit">
        <el-button size="mini" @click="cancel" plain>取消</el-button>
        <el-button size="mini" @click="save" type="primary">保存</el-button>
      </div>
    </div>
    <div class="edit__content">
      <slot />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "hs-edit-wrap",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    // 编辑icon
    editIcon: {
      type: String,
      default: "el-icon-edit"
    },
    // 按钮方向
    direction: {
      type: String,
      default: 'right'
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    styles() {
      return {
        'justify-content': this.direction == 'right' ? 'flex-end' : 'flex-start'
      }
    },
  },
  watch: {},
  methods: {
    /**
     * 编辑
     */
    edit() {
      this.$emit("update:isEdit", true);
    },
    /**
     * 取消
     */
    cancel() {
      this.$emit("update:isEdit", false);
      this.$emit("cancel");
    },
    /**
     * 保存
     */
    save() {
      this.$emit("update:isEdit", false);
      this.$emit("confirm");
    }
  }
};
</script>
 
<style lang='scss'>
.hs-edit__wrap {
  display: flex;
  flex-direction: column;
  .edit__operat {
    & > div {
      display: flex;
      align-items: center;
    }
  }
}
</style>