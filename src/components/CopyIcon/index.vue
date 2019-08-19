<template>
  <div v-copy="content" class="hs-copy-icon__wrap">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
  name: "hs-copy-icon",
  props: {
    // 复制内容
    content: {
      type: String || Number,
      default: () => ""
    },
    // icon
    icon: {
      type: String,
      default: () => "el-icon-document-copy"
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  filters: {},
  components: {},
  watch: {},
  methods: {}
};
</script>
 
<style lang='scss'>
</style>