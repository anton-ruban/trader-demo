<template>
  <multipane class="upper-workspace" layout="vertical">
    <div :style="{ width: '50%', maxWidth: '90%', minHeight: '100%' }">
      <InstrumentPanel/>
    </div>
    <multipane-resizer></multipane-resizer>
    <div :style="{ flexGrow: 1 }">
      <TradingChartPanel/>
    </div>
  </multipane>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
import InstrumentPanel from './InstrumentPanel.vue';
import TradingChartPanel from './TradingChartPanel.vue';

export default {
  name: 'MainView',
  components: {
    Multipane,
    MultipaneResizer,
    InstrumentPanel,
    TradingChartPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.upper-workspace {
  width: 100%;
  height: 100%;
}
.multipane-resizer {
  margin: 0; left: 0; /* reset default styling */
  width: 8px;
  background: #eee;
}
</style>
