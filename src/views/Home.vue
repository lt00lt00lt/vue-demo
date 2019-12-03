<template>
  <div class="home">
    <button @click="goNews()">跳转到新闻列表</button>
    <button @click="goContent()">跳转到新闻详情</button>
    <News />
  </div>
</template>

<script>
// @ is an alias to /src
import News from "@/components/News";

export default {
  name: "home",
  components: {
    News
  },
  methods: {
    //通过JS实现路由跳转
    goNews() {
      this.$router.push({ path: "home" });
    },
    goContent() {
      this.$router.push({ path: "content/495" });
    }
  }
};
</script>
