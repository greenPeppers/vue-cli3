<template>
  <div class="hs-page__wrap">
    <div v-if="breadcrumb" class="page__breadcrumb">
      <hs-breadcrumb/>
    </div>
    <div v-if="$slots.modal" class="page__modal">
      <div class="page__modal-header">
        <div class="page__modal-action" v-if="$slots.actionLeft">
          <slot name="actionLeft"/>
        </div>
        <div class="page__modal-action" v-if="$slots.actionRight">
          <slot name="actionRight"/>
        </div>
      </div>
      <slot name="modal"/>
    </div>
    <div class="page__content">
      <slot/>
    </div>
    <div v-if="$slots.dialog">
      <slot name="dialog"/>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "hs-page",
  props: {
    // 是否开启面包屑
    breadcrumb: {
      type: Boolean,
      default: false
    },
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
.hs-page__wrap {
  // padding: 0px 32px;
  height: 100%;
  overflow: auto;
  .page__modal {
    // padding: 16px;
    box-shadow: $hs__box-shadow;
    .page__modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .page__modal-action {
        flex: 0 0 auto;
      }
    }
  }
  & > div {
    margin: 10px 0 0;
  }
}
</style>