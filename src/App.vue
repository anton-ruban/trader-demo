<template>
  <v-app :dark="isDark">
    <div id="app">
      <router-view></router-view>
      <TradingPanelDialog/>
      <ConfirmOrderDialog/>
      <SettingsDialog/>
      <RechargeDialog/>
      <WithdrawDialog/>
      <EditPriceAlertDialog/>
      <TradingConditionsDialog/>
      <AccountDetailsDialog/>
      <ClosePositionDialog/>
      <CancelOrderDialog/>
      <PlatformTradingSetupDialog/>
      <OrderDetailsDialog/>
      <AddCoinAddressDialog/>
      <CoinAddressManageDialog/>
      <KycIdentifyDialog/>
      <ModifyPasswordDialog/>
      <ChartSettingsDialog/>
      <TwoFactorVerificationDialog/>
      <BindingDialog/>
      <FundPasswordDialog/>
      <GoogleVerificationDialog/>
      <GetVerificationCodeDialog/>
    </div>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';
import TradingPanelDialog from './components/dialogs/TradingPanelDialog.vue';
import ConfirmOrderDialog from './components/dialogs/ConfirmOrderDialog.vue';
import SettingsDialog from './components/dialogs/SettingsDialog.vue';
import ChartSettingsDialog from './components/dialogs/ChartSettingsDialog.vue';
import RechargeDialog from './components/dialogs/RechargeDialog.vue';
import WithdrawDialog from './components/dialogs/WithdrawDialog.vue';
import EditPriceAlertDialog from './components/dialogs/EditPriceAlertDialog.vue';
import AccountDetailsDialog from './components/dialogs/AccountDetailsDialog.vue';
import TradingConditionsDialog from './components/dialogs/TradingConditionsDialog.vue';
import ClosePositionDialog from './components/dialogs/ClosePositionDialog.vue';
import CancelOrderDialog from './components/dialogs/CancelOrderDialog.vue';
import OrderDetailsDialog from './components/dialogs/OrderDetailsDialog.vue';
import PlatformTradingSetupDialog from './components/dialogs/PlatformTradingSetupDialog.vue';
import AddCoinAddressDialog from './components/dialogs/AddCoinAddressDialog.vue';
import CoinAddressManageDialog from './components/dialogs/CoinAddressManageDialog.vue';
import KycIdentifyDialog from './components/dialogs/KycIdentifyDialog.vue';
import TwoFactorVerificationDialog from './components/dialogs/TwoFactorVerificationDialog.vue';
import ModifyPasswordDialog from './components/dialogs/ModifyPasswordDialog.vue';
import BindingDialog from './components/dialogs/BindingDialog.vue';
import GetVerificationCodeDialog from './components/dialogs/GetVerificationCodeDialog.vue';
import FundPasswordDialog from './components/dialogs/FundPasswordDialog.vue';
import GoogleVerificationDialog from './components/dialogs/GoogleVerificationDialog.vue';

export default {
  name: 'app',
  components: {
    TradingPanelDialog,
    ConfirmOrderDialog,
    SettingsDialog,
    RechargeDialog,
    WithdrawDialog,
    EditPriceAlertDialog,
    TradingConditionsDialog,
    AccountDetailsDialog,
    ChartSettingsDialog,
    ClosePositionDialog,
    CancelOrderDialog,
    OrderDetailsDialog,
    PlatformTradingSetupDialog,
    AddCoinAddressDialog,
    CoinAddressManageDialog,
    KycIdentifyDialog,
    TwoFactorVerificationDialog,
    BindingDialog,
    ModifyPasswordDialog,
    FundPasswordDialog,
    GetVerificationCodeDialog,
    GoogleVerificationDialog,
  },
  computed: {
    ...mapState('settings', {
      isDark: state => state.isDark
    }),
  },
}
</script>

<style lang="scss">
@import 'styles/imports';
#app {
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 300px;
  overflow: auto;
}

// fix conflict css of multipan and vuetify popover
.multipane > div {
  position: initial;
}
</style>
