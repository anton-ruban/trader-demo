<template>
  <div class="trading-view">
    <multipane class="workspace" layout="horizontal">
      <div :style="{ height: '50%', maxHeight: '90%', overflow: 'hidden', }">
        <UpperWorkspace />
      </div>
      <multipane-resizer></multipane-resizer>
      <div :style="{ flexGrow: 1, zIndex: 0 }" class="panel-container">
        <BottomPanel />
      </div>
    </multipane>
  </div>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
import UpperWorkspace from './UpperWorkspace.vue';
import BottomPanel from './BottomPanel.vue';
export default {
  name: 'TradingView',
  components: {
    Multipane,
    MultipaneResizer,
    UpperWorkspace,
    BottomPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.trading-view {
  height: calc(100% - 49px - 24px - 42px);
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
}
.workspace {
  height: 100%;
  width: 100%;
}
.panel-container {
  display: flex;
  width: 100%;
  height: 0;
}
.multipane-resizer {
  margin-top: 0 !important;
  height: 8px !important;
  top: 0 !important;
  background: var(--bg-color-page);
}
</style>
