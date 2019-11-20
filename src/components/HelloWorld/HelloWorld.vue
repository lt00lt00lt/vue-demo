<template>
  <div>
    <h2>Hello {{msg}} !</h2>
    <button @click="getData()">获取数据</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: ["msg"],
  methods: {
    getData() {
      axios({
        url: "api/seniorFind/duty?pageNum=1&pageSize=3",
        method: "POST"
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="less">
@import "HelloWorld";
</style>