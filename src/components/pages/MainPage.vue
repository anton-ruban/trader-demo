<template>
  <div class="main-container">
    <Header />
    <!-- <TradingView /> -->
    <router-view></router-view>
    <Footer />
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
</template>

<script>
import Header from '../header/Header.vue';
import Footer from '../footer/Footer.vue';
import TradingPanelDialog from '../../components/dialogs/TradingPanelDialog.vue';
import ConfirmOrderDialog from '../../components/dialogs/ConfirmOrderDialog.vue';
import SettingsDialog from '../../components/dialogs/SettingsDialog.vue';
import ChartSettingsDialog from '../../components/dialogs/ChartSettingsDialog.vue';
import RechargeDialog from '../../components/dialogs/RechargeDialog.vue';
import WithdrawDialog from '../../components/dialogs/WithdrawDialog.vue';
import EditPriceAlertDialog from '../../components/dialogs/EditPriceAlertDialog.vue';
import AccountDetailsDialog from '../../components/dialogs/AccountDetailsDialog.vue';
import TradingConditionsDialog from '../../components/dialogs/TradingConditionsDialog.vue';
import ClosePositionDialog from '../../components/dialogs/ClosePositionDialog.vue';
import CancelOrderDialog from '../../components/dialogs/CancelOrderDialog.vue';
import OrderDetailsDialog from '../../components/dialogs/OrderDetailsDialog.vue';
import PlatformTradingSetupDialog from '../../components/dialogs/PlatformTradingSetupDialog.vue';
import AddCoinAddressDialog from '../../components/dialogs/AddCoinAddressDialog.vue';
import CoinAddressManageDialog from '../../components/dialogs/CoinAddressManageDialog.vue';
import KycIdentifyDialog from '../../components/dialogs/KycIdentifyDialog.vue';
import TwoFactorVerificationDialog from '../../components/dialogs/TwoFactorVerificationDialog.vue';
import ModifyPasswordDialog from '../../components/dialogs/ModifyPasswordDialog.vue';
import BindingDialog from '../../components/dialogs/BindingDialog.vue';
import GetVerificationCodeDialog from '../../components/dialogs/GetVerificationCodeDialog.vue';
import FundPasswordDialog from '../../components/dialogs/FundPasswordDialog.vue';
import GoogleVerificationDialog from '../../components/dialogs/GoogleVerificationDialog.vue';

export default {
  name: 'MainPage',
  components: {
    Header,
    Footer,
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
  }
}
</script>

<style lang="scss">
  .main-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
