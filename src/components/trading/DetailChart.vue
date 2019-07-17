<template>
  <div class="detail-chart">
    <div class="tool-box">
      <SearchDropDown placeholder="搜索产品" class="tool-item"/>
      <v-overflow-btn
        :items="ranges"
        value="5 Minutes : 12 Hours"
        hide-details
        class="ipe-overflow-button tool-item"
        height="25"
        single-line
      ></v-overflow-btn>
      <v-btn icon depressed small class="tool-item action-btn" @click="handleRefreshClick()">
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon depressed small class="tool-item action-btn" @click="toggleChartSettingsDialog(true)">
        <v-icon>settings</v-icon>
      </v-btn>
    </div>
    <highcharts :constructor-type="'stockChart'" :options="chartOptions" ref="highcharts"></highcharts>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SearchDropDown from '@/components/controls/SearchDropDown';

export default {
  name: 'DetailChart',
  components: {
    SearchDropDown
  },
  methods: {
    toggleChartSettingsDialog(e) {
      this.$store.commit('settings/toggleChartSettingsDialog', e);
    },
    selectWatchDetailTab(e) {
      this.$store.commit('tabs/selectWatchDetailTab', e);
    },
    resizeChart(w) {
      let chart = this.$refs.highcharts.chart;
      chart.setSize(w, 'auto');
    },
    handleRefreshClick() {
      let chart = this.$refs.highcharts.chart;
      // chart.series[0].setData(TEMP_DATA, false);
      // chart.redraw();
      chart.zoom();
    }
  },
  data() {
    return {
      ranges: [
        '5 Minutes : 12 Hours',
        '30 Minutes : 5 Days',
        '1 Hour : 10 Days',
        '1 Day : 3 Months',
      ],
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
.detail-chart {
  background: var(--bg-color-inner-panel);
  .tool-box {
    display: flex;
    padding: 8px;
    padding-bottom: 0;
    .tool-item {
      margin-right: 8px;
      &.ipe-overflow-button {
        max-width: 213px;
      }
      &.action-btn {
        margin: 0 8px 0 0;
        width: 25px;
        height: 25px;
        .v-icon {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
