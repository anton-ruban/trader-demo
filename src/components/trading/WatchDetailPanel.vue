<template>
  <div class="trading-chart-panel">
    <div class="head">
      <Tab :tabs="watchDetailTabs" :selectedTabIndex="selectedWatchDetailTabIndex" @change="selectWatchDetailTab($event)"/>
    </div>
    <div class="content">
      <template v-if="selectedWatchDetailTabIndex === 0">
        <Overview />
        <div class="divider"></div>
        <div class="scroll-panel">
          <DeepMarketPrice />
          <div class="divider"></div>
          <div class="chart-section">
            <div class="chart-view">
              <highcharts :constructor-type="'stockChart'" :options="chartOptions" ref="highcharts"></highcharts>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="selectedWatchDetailTabIndex === 1">
        <div class="chart-section">
          <div class="chart-view">
            <DetailChart/>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Overview from './Overview.vue';
import DeepMarketPrice from './DeepMarketPrice.vue';
import DetailChart from './DetailChart.vue';
import Tab from '../controls/Tab.vue';

export default {
  name: 'WatchDetailPanel',
  components: {
    Overview,
    DeepMarketPrice,
    DetailChart,
    Tab
  },
  methods: {
    selectWatchDetailTab(e) {
      this.$store.commit('tabs/selectWatchDetailTab', e);
    },
    resizeChart(w) {
      let chart = this.$refs.highcharts.chart;
      chart.setSize(w, 'auto');
    }
  },
  computed: {
    ...mapGetters('settings', {
      chartOptions: 'chartOptions',
    }),
    ...mapState('tabs', {
      watchDetailTabs: state => state.watchDetailTabs,
      selectedWatchDetailTabIndex: state => state.selectedWatchDetailTabIndex
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.trading-chart-panel {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color-panel);
  display: flex;
  flex-direction: column;
  .head {
    border: 0;
    background-color: var(--bg-color-panel);
    padding-left: 8px;
    padding-right: 8px;
    height: 32px;
  }
  .content {
    margin: 8px;
    margin-top: 0;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    .divider {
      margin-top: 8px;
    }
    .scroll-panel {
      flex: 1 1 auto;
      overflow: auto;
    }
    .chart-section {
      position: relative;
      .chart-view {
        position: absolute;
        width: 100%;
      }
    }
  }
}
</style>
