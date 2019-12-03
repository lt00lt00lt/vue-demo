<template>
  <div class="home">
    <button @click="goNews()">跳转到首页</button>
    <button @click="goContent()">跳转到新闻详情</button>
    <button @click="goAbout()">跳转到关于页面</button>
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
    //通过JS实现动态路由跳转
    goNews() {
      this.$router.push({ path: "/" });
    },
    goContent() {
      this.$router.push({ path: "content/495" });
    },
    goAbout() {
      this.$router.push({ name: "about" });
    }
  }
};
</script>
