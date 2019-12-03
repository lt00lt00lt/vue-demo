<template>
  <div>
    <h2>新闻列表</h2>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <router-link :to="'/content/'+item.aid">{{index}} --- {{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//引入Axios用于交互数据
import Axios from "axios";
/**
 * 新闻列表组件
 * @author LongTeng 2019-12-03
 */
export default {
  name: "News",
  data() {
    return {
      list: []
    };
  },
  methods: {
    getData() {
      let api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      Axios.get(api)
        .then(res => {
          this.list = res.data.result;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped lang="less">
@import "index";
</style>