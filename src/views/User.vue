<template>
  <div class="user">
      <div class="left">
          <ul>
              <li><router-link to="/User/UserAdd">增加用户</router-link></li>
              <li><router-link to="/User/UserList">用户列表</router-link></li>
          </ul>
      </div>
      <div class="right">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:"User"
}
</script>

<style lang="less" scoped>
    .user{
        display: flex;
        .left{
            width: 200px;
            min-height: 400px;
            border-right: 1px solid #eee;
            li{
                line-height: 2;
            }
        }
        .right{
            flex: 1;
        }
    }
</style>