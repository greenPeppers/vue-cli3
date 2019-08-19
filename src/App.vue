<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  components: {
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
