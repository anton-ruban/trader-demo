<template>
  <div class="category-view">
    <div class="head">
      <NewsProviderPicker />
      <SearchInput placeholder="搜索"/>
    </div>
    <ul>
      <li>
        <div :class="[{ 'active': newsItem.id === selectedNewsItemId }, 'category-item']" v-for="newsItem in selectedNews" :key="newsItem.id" @click="selectNewsItem(newsItem.id)">
          <span class="time">{{new Date(newsItem.timestamp) | moment("hh:mm")}}</span>
          <img :src='"../../assets/" + getProviderById(newsItem.providerId).type + ".png"'/>
          <span class="news-title">{{newsItem.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import NewsProviderPicker from '../popovers/NewsProviderPicker.vue';
import SearchInput from '../controls/SearchInput.vue';

export default {
  name: 'NewsCategory',
  components: {
    NewsProviderPicker,
    SearchInput
  },
  methods: {
    selectNewsItem(e) {
      this.$store.commit('news/selectNewsItem', e);
    },
  },
  computed: {
    ...mapGetters('news', {
      selectedNews: 'selectedNews',
      getProviderById: 'getProviderById',
    }),
    ...mapState('news', {
      selectedNewsItemId: state => state.selectedNewsItemId,
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.category-view {
  background: var(--bg-color-inner-panel);
  height: 100%;
  .head {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color-row);
    padding-right: 8px;
  }
  ul {
    padding: 0;
    li {
      list-style-type: none;
      .category-item {
        display: flex;
        align-items: center;
        padding: 4px 8px;
        cursor: pointer;
        border-bottom: 1px solid var(--border-color-row);
        &:hover, &.active {
          background: var(--bg-color-hover);
        }
        .time {
          font-size: 11px;
          margin-right: 4px;
          color: #999;
        }
        .news-title {
          color: var(--text-color-active);
          margin-left: 4px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
