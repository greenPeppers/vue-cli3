<template>
  <div class="hs-table__wrap">
    <!-- tabs切换 -->
    <div v-if="$slots.tabs" class="hs-table__tabs">
      <slot name="tabs" />
    </div>
    <!-- 筛选条件区 -->
    <div v-if="isRefresh" class="hs-table__refresh">
      <el-button @click="refresh" icon="el-icon-refresh-right" type="text">清空筛选条件</el-button>
    </div>
    <div @keyup.enter.native="init" v-if="$slots.search" class="hs-table__search">
      <div class="hs-table__search-form">
        <slot name="search" />
      </div>
      <el-button
        @click="init"
        class="hs-table__search-button"
        size="small"
        type="primary"
        :icon="searchButtonContent ? '' : 'el-icon-search'"
      >{{ searchButtonContent }}</el-button>
    </div>
    <!-- table操作区 -->
    <div v-if="$slots.operation" class="hs-table__operation">
      <slot name="operation" />
    </div>
    <!-- table -->
    <div class="hs-table__table">
      <slot />
    </div>
    <!-- 分页 -->
    <div v-if="isPagination" class="hs-table__pagination">
      <el-pagination
        background
        :style="{textAlign: paginationPosition}"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pages.page"
        :page-sizes="[10, 20, 30, 50, 100, 200]"
        :page-size="pages.p_size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pages.total"
      />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "hs-table",
  props: {
    // 是否开启分页
    isPagination: {
      type: Boolean,
      default: true
    },
    // 请求地址
    url: {
      type: String,
      default: ""
    },
    // 分页工具及数据存储
    pages: {
      type: Object,
      required: true
    },
    // 搜索筛选数据
    // 由于重置表单时，触发emit事件为异步事件，所以无法获取实时参数，所以接受函数
    getFormModel: {
      type: Function,
      default: () => () => {}
    },
    // pagination的水平方向
    paginationPosition: {
      type: String,
      default: "right"
    },
    // 是否显示重置按钮
    isRefresh: {
      type: Boolean,
      default: false
    },
    // 搜索按钮名称
    searchButtonContent: {
      type: String,
      default: ""
    },
    // 自定义处理数据
    processData: {
      type: Function,
      default: data => data
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {
    /**
     * 监听url变化
     */
    url(val) {
      this.init();
    }
  },
  methods: {
    /**
     * 组件初始化
     */
    init() {
      this.loadData();
    },
    /**
     * 加载数据
     */
    async loadData() {
      this.pages.init();
      let params = {
        page: this.pages.page,
        p_size: this.pages.p_size,
        ...this.getFormModel()
      };
      let res = await this.$http.get(this.url, { params });
      if (!res || !res.curr_page_info) {
        this.pages.update({
          page: params.page,
          state: 0
        });
      } else {
        let list = this.processData(res.curr_page_info);

        if (Object.prototype.toString.call(list) !== "[object Array]") {
          throw new Error(
            "Function: processData, The return type is not an array"
          );
        }

        this.pages.update({
          page: params.page,
          total: res.match_total,
          list,
          state: res.curr_page_info.length === 0 ? 2 : 1
        });
      }
    },
    /**
     * 更改pageSize
     */
    handleSizeChange(val) {
      this.pages.update({
        p_size: val,
        list: []
      });
      this.loadData();
    },
    /**
     * 更改page
     */
    handleCurrentChange(val) {
      this.pages.update({
        page: val,
        list: []
      });
      this.loadData();
    },
    /**
     * 重置表单
     */
    refresh() {
      this.$emit("refresh");
      this.init();
    }
  }
};
</script>
 
<style lang="scss">
.hs-table__wrap {
  .hs-table__refresh {
    text-align: right;
    margin: 0;
    .el-button {
      padding: 0;
    }
  }
  & > div {
    margin: 0 0 10px;
  }
  .hs-table__search {
    position: relative;
    overflow: hidden;
    box-shadow: $hs__box-shadow;
    padding: 5px 60px 5px 0;
    .hs-table__search-form {
      width: 100%;
      overflow: auto;
    }
    .hs-table__search-button {
      margin-top: 3px;
      font-size: 20px;
      padding: 6px 11px;
      position: absolute;
      right: 4px;
      top: 4px;
    }
  }
  .hs-table__tabs {
    .el-tabs__item {
      font-size: $hs__font-size_huge;
      font-weight: bold;
      color: $hs__font-color_gray;
      line-height: 25px;
    }
    .el-tabs__item.is-active {
      color: $hs__font-color_active;
    }
  }
  .hs-table__table {
    box-shadow: $hs__box-shadow;
    .el-table__empty-text {
      width: 100%;
    }
    .el-table__row {
      .cell {
        a {
          font-size: $hs__font-size_normal;
          color: $hs__font-color_black;
          font-weight: 500;
        }
        font-size: $hs__font-size_normal;
        color: $hs__font-color_black;
        font-weight: 500;
      }
      .el-input__inner {
        font-weight: 500;
      }
    }
    .el-select {
      .el-input__inner {
        font-weight: 500;
      }
    }
  }
  .hs-table__pagination {
    margin: 24px 0 0;
  }
}
</style>
