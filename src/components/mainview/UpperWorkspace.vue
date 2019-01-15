<template>
  <multipane class="upper-workspace" layout="vertical">
    <div :style="{ width: '50%', maxWidth: '90%', minWidth: '300px', minHeight: '100%' }">
      <WatchPanel/>
    </div>
    <multipane-resizer></multipane-resizer>
    <div :style="{ flexGrow: 1, zIndex: 0, }">
      <WatchDetailPanel/>
    </div>
  </multipane>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
import WatchPanel from './WatchPanel.vue';
import WatchDetailPanel from './WatchDetailPanel.vue';

export default {
  name: 'MainView',
  components: {
    Multipane,
    MultipaneResizer,
    WatchPanel,
    WatchDetailPanel
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
  z-index: 0;
}
</style>
