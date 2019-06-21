<template>
  <v-dialog :value="isOpenTradingConditionsDialog" width="380" @input="toggleTradingConditionsDialog($event)">
    <v-layout class="white" column>
      <TitleBar :title="$t('general.trading_conditions')" hideBack @close="toggleTradingConditionsDialog(false)" />
      <div class="dialog-body">
        <div class="summary">
          <img src="../../assets/fu.png"/>
          <div class="text">
            <span class="company-name">{{selectedAlert.instrument}}</span>
            <span class="desc">{{selectedAlert.desc}}</span>
          </div>
          <v-btn icon small><v-icon>search</v-icon></v-btn>
        </div>
        <div>
          <v-tabs fixed-tabs height="32" slider-color="#111" class="ipe-tab">
            <v-tab
              v-for="item in TRADING_CONDITIONS_TAB_ITEMS"
              :key="item.id"
            >
              {{item.text}}
            </v-tab>
            <v-tab-item>
              <v-divider></v-divider>
              <div class="details">
                <label class="sub-head">{{$t('transaction_costs')}}</label>
                <v-divider></v-divider>
                <div v-for="(value, key) in transaction_costs" :key="key">
                  <div class="item-row">
                    <span class="label">{{$t(key)}}</span>
                    <span>{{value}}</span>
                  </div>
                  <v-divider></v-divider>
                </div>
              </div>
            </v-tab-item>
            <v-tab-item>
              <v-divider></v-divider>
              <div class="details">
                <div class="sub-head">{{$t('margin')}}</div>
                <v-divider></v-divider>
                <div v-for="(value, key) in margin" :key="key">
                  <div class="item-row">
                    <span class="label">{{$t(key)}}</span>
                    <span>{{value}}</span>
                  </div>
                  <v-divider></v-divider>
                </div>
                <div class="sub-head">{{$t('instrument')}}</div>
                <v-divider></v-divider>
                <div v-for="(value, key) in instrument" :key="key">
                  <div class="item-row">
                    <span class="label">{{$t(key)}}</span>
                    <span>{{value}}</span>
                  </div>
                  <v-divider></v-divider>
                </div>
                <div class="sub-head center-head">{{$t('trading_times_cest')}}</div>
                <div class="sub-head">21-Jun-2019</div>
                <div v-for="(value, key) in trading_times" :key="key">
                  <div class="item-row">
                    <span class="label">{{$t(key)}}</span>
                    <span>{{value}}</span>
                  </div>
                  <v-divider></v-divider>
                </div>
              </div>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import {TRADING_CONDITIONS_TABS} from '@/constants';
import _ from 'lodash';
import TitleBar from '../controls/TitleBar.vue';

export default {
  name: 'TradingConditionsDialog',
  components: {
    TitleBar,
  },
  data() {
    return {
      TRADING_CONDITIONS_TAB_ITEMS: _.values(TRADING_CONDITIONS_TABS),
    }
  },
  methods: {
    toggleTradingConditionsDialog (e) {
      this.$store.commit('overview/toggleTradingConditionsDialog', e);
    },
    selectAlertOption(optionKey, value) {
      this.$store.commit('contracts/selectAlertOption', {optionKey, value});
    },
    selectAlertCount (optionKey, e) {
      this.$store.commit('contracts/selectAlertCount', {optionKey, newCount: e});
    }
  },
  computed: {
    ...mapState('overview', {
      isOpenTradingConditionsDialog: state => state.isOpenTradingConditionsDialog,
      transaction_costs: state => state.transaction_costs,
      margin: state => state.margin,
      instrument: state => state.instrument,
      trading_times: state => state.trading_times,
    }),
    ...mapState('contracts', {
      alertOptions: state => state.alertOptions,
    }),
    ...mapGetters('contracts', {
      selectedAlert: 'selectedAlert',
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-body {
  padding: 8px;
  height: 560px;
  overflow: auto;
  .summary {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 4px;
      line-height: 1;
      .company-name {
        font-size: 12px;
      }
      .desc {
        color: #888;
        margin-top: 3px;
      }
    }
    .v-btn {
      margin: 0;
      color: #888;
      i {
        font-size: 18px;
      }
    }
  }
  .details {
    margin-top: 8px;
    .sub-head {
      margin-top: 8px;
      color: #111;
      &.center-head {
        text-align: center;
      }
    }
    .item-row {
      display: flex;
      align-items: center;
      height: 21px;
      justify-content: space-between;
      .label {
        color: #888;
      }
    }
  }
}
</style>
