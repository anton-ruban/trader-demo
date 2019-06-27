<template>
  <div class="account-view">
    <div class="head">
      <Tab :tabs="accountTabs" :selectedTabIndex="selectedAccountTabIndex" @change="selectAccountTab($event)"/>
    </div>
    <div class="content-body" v-if="selectedAccountTabIndex === 0">
      <SafeConfiguration/>
    </div>
    <div class="content-body" v-if="selectedAccountTabIndex === 1">
      <PersonCenter />
    </div>
    <Portfolio v-if="selectedAccountTabIndex === 2" />
    <Other v-if="selectedAccountTabIndex === 4" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Tab from '../controls/Tab.vue';
import SafeConfiguration from './SafeConfiguration';
import PersonCenter from './PersonCenter';
import Portfolio from './Portfolio';
import Other from './Other';

export default {
  name: 'AccountView',
  components: {
    Tab,
    SafeConfiguration,
    PersonCenter,
    Portfolio,
    Other,
  },
  computed: {
    ...mapState('tabs', {
      accountTabs: state => state.accountTabs,
      selectedAccountTabIndex: state => state.selectedAccountTabIndex
    }),
  },
  methods: {
    selectAccountTab(e) {
      this.$store.commit('tabs/selectAccountTab', e);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.account-view {
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
  .content-body {
    width: 800px;
    border: 1px solid #ddd;
    padding: 16px;
    margin: 50px auto;
    background: #fff;
  }
}

</style>
