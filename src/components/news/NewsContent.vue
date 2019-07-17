<template>
  <div class="content-view">
    <div class="abs-view">
      <div class="head">
        <span class="time">{{new Date(selectedNewsItem.timestamp) | moment("YYYY MMM DD hh:mm")}}</span>
        <img :src='"../../assets/" + getProviderById(selectedNewsItem.providerId).type + ".png"'/>
        <span class="provider-name">{{getProviderById(selectedNewsItem.providerId).name}}</span>
      </div>
      <div class="content-body">
        <h1>{{selectedNewsItem.title}}</h1>
        <p v-html="selectedNewsItem.detail"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NewsContent',
  components: {
  },
  computed: {
    ...mapGetters('news', {
      selectedNewsItem: 'selectedNewsItem',
      getProviderById: 'getProviderById',
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content-view {
  background: var(--bg-color-inner-panel);
  height: 100%;
  position: relative;
  .abs-view {
    position: absolute;
    .head {
      display: flex;
      align-items: center;
      padding: 16px 16px;
      font-size: 11px;
      .time {
        margin-right: 4px;
        color: #999;
      }
      .provider-name {
        margin-left: 4px;
        color: var(--text-color-active);
      }
    }
    .content-body {
      padding: 16px;
      h1 {
        font-size: 24px;
        margin-bottom: 1em;
      }
      p {
        line-height: 1.5;
        font-size: 14px;
      }
    }
  }
}
</style>
