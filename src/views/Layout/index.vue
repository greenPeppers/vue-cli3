<template>
  <div class="layout__wrap">
    <!-- 顶部 -->
    <header class="header" v-if="$slots.header">
      <slot name="header" />
    </header>
    <div class="main">
      <!-- 左侧边 -->
      <el-aside v-if="$slots.asideLeft">
        <slot name="asideLeft" />
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <slot />
      </el-main>
      <!-- 右侧边 -->
      <el-aside v-if="$slots.asideRight">
        <slot name="asideRight" />
      </el-aside>
    </div>
    <el-footer class="footer" v-if="$slots.footer">
      <slot name="footer" />
    </el-footer>
  </div>
</template>
 
<script>
export default {
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
.layout__wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .header {
    flex: 0 0 auto;
  }
  .main {
    flex: 1 1 auto;
    display: flex;
    .el-aside {
      flex: 0 0 auto;
    }
    .el-main {
      flex: 1 1 auto;
      height: 100%;
      padding: 0;
    }
  }
  & > .footer {
    flex: 0 0 auto;
  }
}
</style>