<template>
  <v-dialog :value="isOpenAccountDetailsDialog" width="380" @input="toggleAccountDetailsDialog($event)">
    <v-card>
      <v-layout column>
        <TitleBar :title="$t('account_details')" hideBack @close="toggleAccountDetailsDialog(false)"/>
        <div class="dialog-body">
          <div class="details">
            <div class="sub-head">{{$t('details')}}</div>
            <div class="item-row">
              <span class="label">{{$t('client_id')}}</span>
              <span>9526246</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('account_name')}}</span>
              <span>TRIAL_9526246</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('account_id')}}</span>
              <span>TRIAL_9526246</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('currency')}}</span>
              <span>USD</span>
            </div>
            <v-divider></v-divider>
            <div class="sub-head">{{$t('cash_and_positions')}}</div>
            <div class="item-row">
              <span class="label">{{$t('cash_balance')}}</span>
              <span>100,000.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('transactions_not_booked')}}</span>
              <span>0.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('cash_available')}}</span>
              <span>100,000.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('value_of_stocks_etfs_bonds_funds')}}</span>
              <span>0.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('pl_of_margin_posiitions')}}</span>
              <span>0.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('cost_to_close')}}</span>
              <span>0.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('value_of_positions')}}</span>
              <span>0.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('account_value')}}</span>
              <span>100,000.00</span>
            </div>
            <v-divider></v-divider>
            <div class="sub-head">{{$t('margin')}}</div>
            <div class="item-row">
              <span class="label">{{$t('not_available_as_margin_collateral')}}</span>
              <span>0.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('initial_margin_reserved')}}</span>
              <span>0.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('initial_margin_available')}}</span>
              <span>100,000.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('maintenance_margin_reserved')}}</span>
              <span>0.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('maintenance_margin_available')}}</span>
              <span>100,000.00</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('margin_utilisation')}}</span>
              <span>0.00%</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('user_cash_positions_for_margin_trading')}}</span>
              <a>Yes</a>
            </div>
            <v-divider></v-divider>
          </div>
        </div>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'ConfirmOrderDialog',
  components: {
    TitleBar,
  },
  methods: {
    toggleAccountDetailsDialog (e) {
      this.$store.commit('account/toggleAccountDetailsDialog', e);
    },
  },
  computed: {
    ...mapState('account', {
      isOpenAccountDetailsDialog: state => state.isOpenAccountDetailsDialog,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-body {
  padding: 8px;
  height: 560px;
  position: relative;
  overflow: auto;
  .details {
    .sub-head {
      margin-top: 8px;
      color: var(--text-color-active);
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
