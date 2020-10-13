<template>
  <div id="nav">
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <van-tabbar>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="orders-o">课程页</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>


<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/mine">Mine</router-link>-->
<!--    <router-link to="/profile">Profile</router-link>-->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
