<template>
  <div
    :style="style"
    :element-loading-background="loadingColor"
    :element-loading-text="loadingText"
    :element-loading-spinner="loadingIcon"
    v-loading="isLoading"
    class="hs-loading__wrap"
  >
    <transition-group style="width:100%;" name="fade" mode="in-out">
      <!-- 请求异常 -->
      <div class="loading__abnormity" :key="0" v-if="status === 0">
        <!-- TEMP: 临时使用无数据icon，等待ui给 -->
        <img src="@a/images/noData.png" alt />
        <el-button @click="init" type="text">请求出现异常了,点击重试!</el-button>
      </div>
      <!-- 为空 -->
      <div class="loading__abnormity" :key="2" v-else-if="status === 2">
        <img src="@a/images/noData.png" alt />
        <span class="noData">暂无数据！</span>
      </div>
      <!-- 成功 -->
      <div :key="1" v-else-if="status === 1">
        <slot />
      </div>
    </transition-group>
  </div>
</template>
 
<script>
export default {
  name: "hs-loading",
  props: {
    // 当前状态 0: 失败, 1: 成功, 2: 无数据, 3: loading
    status: {
      type: Number,
      default: 1
    },
    // 默认占位高度
    height: {
      type: Number,
      default: 50
    },
    // loading 背景色
    loadingColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.4)"
    },
    // loading 文字
    loadingText: {
      type: String,
      default: ""
    },
    // loading icon
    loadingIcon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    style() {
      return {
        "min-height": `${this.height}px`
      };
    },
    isLoading() {
      return this.status === 3;
    }
  },
  watch: {},
  methods: {
    /**
     * 初始化请求
     */
    init() {
      this.$emit("init");
    }
  }
};
</script>

<style lang='scss'>
.hs-loading__wrap {
  width: 100%;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .loading__abnormity {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    img {
      width: 30%;
      max-width: 189px;
      max-height: 149px;
      margin: 0 0 10px;
    }
    .noData {
      color: #ddd;
    }
  }
}
</style>