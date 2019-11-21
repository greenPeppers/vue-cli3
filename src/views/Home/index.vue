<template>
  <div ref="home" class=''>
    home
  </div>
</template>
 
<script>
 
export default {
  data() {
    return{
      
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    
  },
  computed: {
    
  },
  filters: {
    
  },
  components: {
    
  },
  watch: {
    
  },
  methods: {
    async getData() {
      let res = await this.$http.get('http://localhost:2222/getData')
      console.log(`res`, res);
    }
  },
}
</script>
 
<style lang='scss'>
  
</style>