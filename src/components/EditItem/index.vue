<template>
  <div class="hs-edit__item">
    <slot v-if="isEdit" />
    <div v-else>
      <div  v-if="$slots.view">
        <slot name="view" />
      </div>
      <span >{{ value }}</span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "hs-edit-item",
  props: {
    // 展示内容
    value: {
      default: ""
    },
    // 是否是编辑状态
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
 
<style lang='scss'>
</style>