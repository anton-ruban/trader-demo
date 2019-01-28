<template>
  <div class="main-view">
    <div class="head">
      <Tab :tabs="newsTabs" :selectedTabIndex="selectedNewsTabIndex" @change="selectNewsTab($event)"/>
    </div>
    <multipane class="workspace" layout="vertical">
      <div :style="{ width: '50%', maxWidth: '90%', minWidth: '300px', minHeight: '100%' }">
        <NewsCategory/>
      </div>
      <multipane-resizer></multipane-resizer>
      <div :style="{ flexGrow: 1, zIndex: 0, }">
        ddd
      </div>
    </multipane>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Multipane, MultipaneResizer } from 'vue-multipane';
import Tab from '../controls/Tab.vue';
import NewsCategory from './NewsCategory.vue';

export default {
  name: 'TradingView',
  components: {
    Multipane,
    Tab,
    MultipaneResizer,
    NewsCategory,
  },
  computed: {
    ...mapState('tabs', {
      newsTabs: state => state.newsTabs,
      selectedNewsTabIndex: state => state.selectedNewsTabIndex
    }),
  },
  methods: {
    selectNewsTab(e) {
      this.$store.commit('tabs/selectNewsTab', e);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-view {
  margin-left: 8px;
  margin-right: 8px;
  flex-grow: 1;
  width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  .head {
    background: #ccc;
    padding: 0 8px;
  }
}
.workspace {
  width: 100%;
  background: #ccc;
  flex: 1;
  padding: 0 8px 8px 8px;
}
.multipane-resizer {
  margin-left: 0 !important;
  width: 8px !important;
  left: 0 !important;
  background: #ccc;
  height: auto;
}
</style>
