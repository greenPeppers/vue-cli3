<template>
  <div class="hs-steps__wrap">
    <!-- 步骤 -->
    <div class="hs-steps__step">
      <el-steps
        :align-center="alignCenter"
        :active="active"
        finish-status="finish"
        process-status="wait"
      >
        <el-step
          v-for="(item, index) in steps"
          :key="index"
          @click.native="stepClick(index)"
          :title="item.title || `步骤 ${index + 1}`"
        />
      </el-steps>
    </div>
    <!-- 内容 -->
    <div class="steps__content">
      <div v-show="(index + 1) === active" v-for="(item, index) in steps" :key="index">
        <!-- slot为抽象节点，但本身并不是真实DOM，所以无法使用v-show去控制显隐，因为没有css属性 -->
        <slot :scope="item" :$index="index" :name="index + 1" />
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "hs-steps",
  props: {
    // 步骤数量
    steps: {
      type: Array | Number,
      default: () => []
    },
    // 布局
    alignCenter: {
      type: Boolean,
      default: false
    },
    // 当前步骤
    active: {
      type: Number,
      default: 1
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
  methods: {
    stepClick(index) {
      // 只能点击前几步
      if (index >= this.active) return;
      this.$emit("change", index + 1);
      this.$emit("update:active", index + 1);
    }
  }
};
</script>
 
<style lang='scss'>
.hs-steps__wrap {
  .hs-steps__step {
    padding: 0 0 20px;
    border-bottom: $hs__border;
    margin: 0 0 20px;
  }
}
</style>