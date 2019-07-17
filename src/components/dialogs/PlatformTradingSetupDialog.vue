<template>
  <v-dialog :value="isOpenPlatformTradingSetupDialog" width="420" @input="togglePlatformTradingSetupDialog($event)">
    <v-card>
      <v-layout column>
        <TitleBar :title="$t('platform_trading_setup')" hideBack @close="togglePlatformTradingSetupDialog(false)"/>
        <div class="dialog-body">
          <v-radio-group v-model="tradeClickMode" hide-details color="red">
            <v-radio value="one_click" :ripple="false" :class="['ipe-radio', 'click-option', {'opacity-item': tradeClickMode !== 'one_click'}]">
              <template v-slot:label>
                <div class="option-label">
                  <div>1-click trading</div>
                  <p>Trades and orders are placed directly with a single click.</p>
                  <img src="../../assets/one_click.png"/>
                  <p>This mode bypasses the 2-click safety mechanism for speed of execution. You take full responsibility for unintended trades and orders.</p>
                </div>
              </template>
            </v-radio>
            <v-divider/>
            <v-radio value="dbl_click" :ripple="false" :class="['ipe-radio', 'click-option', {'opacity-item': tradeClickMode !== 'dbl_click'}]">
              <template v-slot:label>
                <div class="option-label">
                  <div>2-click trading</div>
                  <p>Trades and orders require confirmation.</p>
                  <img src="../../assets/two_click.png"/>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
          <v-divider/>
          <v-btn class="accept-button" small depressed color="primary" @click="handleAcceptClick()" :disabled="tradeClickMode === currentClickMode">{{$t('accept')}}</v-btn>
        </div>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'PlatformTradingSetupDialog',
  components: {
    TitleBar,
  },
  methods: {
    togglePlatformTradingSetupDialog (e) {
      this.$store.commit('settings/togglePlatformTradingSetupDialog', e);
    },
    ...mapGetters('settings', ['tradingClickMode']),
    handleAcceptClick() {
      this.$store.commit('settings/updateTradingClickMode', this.tradeClickMode);
      this.togglePlatformTradingSetupDialog(false);
    }
  },
  data() {
    return {
      tradeClickMode: '',
      oldMode: ''
    }
  },
  mounted() {
    this.tradeClickMode = this.tradingClickMode();
  },
  computed: {
    ...mapState('settings', {
      isOpenPlatformTradingSetupDialog: state => state.isOpenPlatformTradingSetupDialog,
      currentClickMode: state => state.settings.platform.tradingClickMode,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-body {
  padding: 8px;
  padding-bottom: 0;
  .accept-button {
    margin: 0;
    width: 100%;
    color: #fff;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .click-option {
    padding: 8px 0 16px;
    &.opacity-item {
      opacity: 0.7;
    }
    .option-label {
      color: var(--text-color-active);
    }
    p {
      margin: 3px 0 8px;
    }
  }
}
</style>
