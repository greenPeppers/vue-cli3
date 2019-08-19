<template>
  <div class="hs-breadcrumb__wrap">
    <span>当前位置：</span>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in currentRouteDictionary"
        :key="index"
        :to="item"
      >{{ item.meta.title || item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
 
<script>
import { mapGetters } from "vuex";

export default {
  name: "hs-breadcrumb",
  data() {
    return {};
  },
  created() {
  },
  mounted() {},
  computed: {
    /**
     * 路由列表
     */
    ...mapGetters("routers", {
      routerList: "routerList",
      currentRouteDictionary: 'currentRouteDictionary',
    }),
  },
  watch: {},
  methods: {}
};
</script>
 
<style lang='scss'>
.hs-breadcrumb__wrap {
  display: flex;
  align-items: center;
  & > span:nth-of-type(1) {
    flex: 0 0 auto;
    font-size: $hs__font-size_small;
    color: $hs__font-color_light-black;
    border-left: 2px solid $hs__theme_color;
    padding-left: 10px;
  }
  .el-breadcrumb__inner {
    font-size: $hs__font-size_small;
    color: $hs__font-color_light-black;
  }
  .el-breadcrumb__inner.is-link {
    color: #666666;
  }
}
</style>