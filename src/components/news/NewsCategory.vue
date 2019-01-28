<template>
  <div class="category-view">
    <div class="head">
      <WatchlistPicker />
      <SearchInput placeholder="搜索"/>
    </div>
    <ul>
      <li>
        <div class="category-item">
          <span class="time">21:58</span>
          <span class="title">Trump-backed spending deal to end US shutdown passes Senate</span>
        </div>
        <div class="category-item">
          <span class="time">21:58</span>
          <span class="title">Trump-backed spending deal to end US shutdown passes Senate</span>
        </div>
        <div class="category-item">
          <span class="time">21:58</span>
          <span class="title">Trump-backed spending deal to end US shutdown passes Senate</span>
        </div>
        <div class="category-item">
          <span class="time">21:58</span>
          <span class="title">Trump-backed spending deal to end US shutdown passes Senate</span>
        </div>
        <div class="category-item">
          <span class="time">21:58</span>
          <span class="title">Trump-backed spending deal to end US shutdown passes Senate</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import WatchlistPicker from '../popovers/WatchlistPicker.vue';
import SearchInput from '../controls/SearchInput.vue';
export default {
  name: 'NewsCategory',
  components: {
    WatchlistPicker,
    SearchInput
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.category-view {
  background: #fff;
  .head {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-right: 8px;
  }
}
</style>
