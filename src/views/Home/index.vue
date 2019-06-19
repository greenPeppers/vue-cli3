<template>
  <div class="home">
    <el-button @click="getUserInfo('get user info')">默认按钮</el-button>
    <el-button @click="message">Message</el-button>
    <!-- <self-message>asfafafafasf</self-message> -->
    <div @click="click" v-sendData="{name: userInfo.name}">{{userInfo.name}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { GETUSERINFO } from "@/store/modules/user/actionsType";
import { Message } from "element-ui";

export default {
  name: "home",

  data() {
    return {};
  },

  created() {
    this.getData();
  },

  computed: {
    /**
     * 用户信息
     */
    ...mapState("user", {
      userInfo: state => state.userInfo.data
    })
  },

  methods: {
    /**
     * 获取用户信息
     */
    ...mapActions("user", {
      getUserInfo: GETUSERINFO
    }),

    /**
     * 获取数据
     */
    async getData() {
      let res = await this.$http.get(this.$api.getUserInfo);
      console.log("res", res);
    },

    message() {
      this.$message('哈哈哈哈哈')
    },

    click() {
      console.log('click');
    },
  }
};
</script>
