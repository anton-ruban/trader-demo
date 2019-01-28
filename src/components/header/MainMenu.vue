<template>
  <div class="main-menu">
    <div>
      <nav>
        <router-link to="/main/trading">交易</router-link>
        <router-link to="/main/news">新闻与研究</router-link>
        <!-- <router-link to="/main/">账户</router-link> -->
      </nav>
    </div>
    <div class="search-container">
      <SearchDropDown placeholder="搜索产品"/>
    </div>
  </div>
</template>

<script>
import SearchDropDown from '../controls/SearchDropDown.vue';
export default {
  name: 'MainMenu',
  components: {
    SearchDropDown,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-menu {
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  .search-container {
    margin: 0 16px;
  }
}
nav {
  display: flex;
  flex: 1 0 auto;

  a {
    font-size: 14px;
    text-transform: uppercase;
    background: transparent;
    line-height: 1em;
    font-weight: bold;
    text-align: center;
    display: block;
    color: #888;
    width: 100%;
    white-space: nowrap;
    padding: 6.5px 8px;
    &:hover {
      color: #111;
    }
    &.router-link-active {
      color: #111;
    }
  }
}
</style>
