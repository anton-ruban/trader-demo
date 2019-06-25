<template>
  <div class="bottom-panel">
    <div class="head">
      <div>
        <Tab :tabs="bottomTabs" :selectedTabIndex="selectedBottomTabIndex" @change="selectBottomTab($event)" @subChange="selectBottomTabSubItem($event)"/>
      </div>
      <div>
        <button class="ipe-btn" type="button" title="Settings">
          <i class="fa fa-cog"></i>
        </button>
      </div>
    </div>
    <div class="content">
      <div class="content-section" v-if="selectedBottomTabIndex === 0">
        <PositionsTable/>
      </div>
      <div class="content-section ipe-table" v-if="selectedBottomTabIndex === 1">
        <OrdersTable/>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import Tab from '../controls/Tab.vue';
import PositionsTable from './tables/PositionsTable.vue';
import OrdersTable from './tables/OrdersTable.vue';
export default {
  name: 'BottomPanel',
  components: {
    PositionsTable,
    OrdersTable,
    Tab,
  },
  computed: {
    ...mapState('tabs', {
      bottomTabs: state => state.bottomTabs,
      selectedBottomTabIndex: state => state.selectedBottomTabIndex
    }),
  },
  methods: {
    selectBottomTab(e) {
      this.$store.commit('tabs/selectBottomTab', e);
    },
    selectBottomTabSubItem(e) {
      this.$store.commit('tabs/selectBottomTabSubItem', e);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bottom-panel {
  width: 100%;
  .head {
    border: 0;
    background-color: #ccc;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    justify-content: space-between;
    height: 32px;
    button {
      background: transparent;
      color: #888;
      font-size: 15px;
      text-transform: none;
      &:hover {
        color: #111;
      }
    }
  }
  .content {
    padding: 8px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: #ccc;
    height: calc(100% - 32px);
    .content-section {
      background: #fff;
      width: 100%;
      height: calc(100% - 8px);
      overflow: auto;
    }
  }
}
</style>
