<template>
  <div class="hs-select-input__wrap">
    <el-select size="mini" v-model="modal[modalKey]" placeholder="请选择">
      <el-option
        v-for="item in list"
        :key="item[selectValue] || item"
        :label="item[selectLabel] || item"
        :value="item[selectValue] || item"
      />
    </el-select>
    <el-input size="mini" clearable v-model.trim="modal[modalValue]" placeholder="请输入" />
  </div>
</template>
 
<script>
export default {
  name: "hs-select-input",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    // select label
    selectLabel: {
      type: String,
      default: () => "label"
    },
    // select value
    selectValue: {
      type: String,
      default: () => "value"
    },
    // modal key
    modalKey: {
      type: String,
      default: () => "key"
    },
    // modal value
    modalValue: {
      type: String,
      default: () => "value"
    },
    modal: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  created() {
  },
  mounted() {},
  computed: {},
  filters: {},
  components: {},
  watch: {},
  methods: {}
};
</script>
 
<style lang='scss'>
.hs-select-input__wrap {
  display: flex;
}
</style>