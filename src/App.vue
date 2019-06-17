<template>
  <v-app>
    <div id="app">
      <router-view></router-view>
      <TradingPanelDialog/>
      <ConfirmOrderDialog/>
      <SettingsDialog/>
      <RechargeDialog/>
      <WithdrawDialog/>
    </div>
  </v-app>
</template>

<script>
import TradingPanelDialog from './components/dialogs/TradingPanelDialog.vue';
import ConfirmOrderDialog from './components/dialogs/ConfirmOrderDialog.vue';
import SettingsDialog from './components/dialogs/SettingsDialog.vue';
import RechargeDialog from './components/dialogs/RechargeDialog.vue';
import WithdrawDialog from './components/dialogs/WithdrawDialog.vue';

export default {
  name: 'app',
  components: {
    TradingPanelDialog,
    ConfirmOrderDialog,
    SettingsDialog,
    RechargeDialog,
    WithdrawDialog
  }
}
</script>

<style lang="scss">
@import 'styles/imports';
#app {
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 300px;
  background-color: #f5f9fe;
  overflow: auto;
}

// fix conflict css of multipan and vuetify popover
.multipane > div {
  position: initial;
}
</style>
