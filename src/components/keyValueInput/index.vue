<template>
  <div class="hs-key-value-input__wrap">
    <el-input size="mini" clearable v-model.trim="modal.key" placeholder="key"/>
    <el-input size="mini" clearable v-model.trim="modal.value" placeholder="value"/>
  </div>
</template>
 
<script>
export default {
  name: "hs-key-value-input",
  props: {
    /**
     * 
     */
    modal: {
      type: Object,
      default: () => ({
        key: '',
        value: ''
      })
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  components: {},
  watch: {},
  methods: {}
};
</script>
 
<style lang='scss'>
  .hs-key-value-input__wrap {
    display: flex;
  }
</style>