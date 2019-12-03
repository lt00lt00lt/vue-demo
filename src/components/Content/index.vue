<template>
  <div>
    <h4>{{list.title}}</h4>
    <div v-html="list.content"></div>
  </div>
</template>

<script>
import Axios from "axios";
/**
 * 新闻详情组件
 * @author LongTeng 2019-12-03
 */
export default {
  name: "Content",
  data() {
    return {
      list: []
    };
  },
  methods: {
    getData(aid) {
      let api = `http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=${aid}`;
      Axios.get(api)
        .then(res => {
          this.list = res.data.result[0];
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    //获取动态路由传值
    let aid = this.$route.params.aid;
    //调用请求数据的方法
    this.getData(aid);
  }
};
</script>

<style lang="less" scoped>
</style>