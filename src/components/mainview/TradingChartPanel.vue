<template>
  <div class="trading-chart-panel">
    <div class="head">
      <span class="panel-title active">Overview</span>
      <span class="panel-title">Charts</span>
    </div>
    <div class="content">
      <Overview />
      <div class="divider"></div>
        <DeepMarketPrice />
      <div class="divider"></div>
      <div class="chart-section">
        <VueTradingView :options="{
          symbol: 'BITFINEX:BTCUSD',
          width: '100%',
          height: 300,
          theme: 'light',
          style: 2,
          withdateranges: true,
        }"/>
      </div>
    </div>
  </div>
</template>

<script>
import Overview from './Overview.vue';
import VueTradingView from 'vue-trading-view';
import DeepMarketPrice from './DeepMarketPrice.vue';

export default {
  name: 'TradingChartPanel',
  components: {
    Overview,
    VueTradingView,
    DeepMarketPrice,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.trading-chart-panel {
  width: 100%;
  height: 100%;
  .head {
    border: 0;
    background-color: #ccc;
    padding-left: 8px;
    padding-right: 8px;
    height: 32px;
    .panel-title {
      padding-right: 16px;
      color: #777;
      max-width: 100%;
      overflow: hidden;
      line-height: 32px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: #111;
      }
      &.active {
        color: #111;
      }
    }
  }
  .content {
    padding: 8px;
    padding-top: 0;
    background-color: #ccc;
    height: calc(100% - 32px);
    .divider {
      margin-top: 8px;
    }
    .chart-section {
      width: 100%;
      height: calc(100% - 110px);
      background: #fff;
    }
  }
}
</style>
