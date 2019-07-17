<template>
  <v-dialog :value="isOpenWithdrawDialog" width="600" @input="toggleWithdrawDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="充值" hideBack @close="toggleWithdrawDialog(false)" />
      <div class="dialog-body">
        <div class="column-section">
          <h1>BTC</h1>
          <div class="value-row">
            <span>数量:</span>
            10.0000000
          </div>
          <div class="value-row">
            <span>冻结:</span>
            0.00000000
          </div>
          <div class="value-row">
            <span>可用:</span>
            10.00000000
          </div>
          <div class="value-row">
            <span>24小时提现额度:</span>
            2.000000
          </div>
          <div class="value-row">
            <span>手续费:</span>
            0.0005000
          </div>
          <div class="warn-block">
            <v-icon>warning</v-icon>
            <div>最小提现金额0.001BTC。一旦您提交提现申请，我们将给你发送一封体现确认邮件，请您点击邮件中的确认链接。</div>
          </div>
        </div>
        <div class="column-section">
          <div class="field-label">BTC提现</div>
          <v-overflow-btn
            :items="withdrawItems"
            class="ipe-overflow-button"
            height="25"
            label="Select..."
          ></v-overflow-btn>
          <v-text-field
            placeholder="数量"
            class="ipe-text-field amount-input"
            label="数量"
          ></v-text-field>
          <div class="action-row">
            <v-btn depressed color="success" @click="openAddCoinAddressDialog()">添加提币地址</v-btn>
            <v-btn depressed outline>提现</v-btn>
          </div>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'WithdrawDialog',
  data() {
    return {
      withdrawItems: ['1', '2'],
    }
  },
  components: {
    TitleBar,
  },
  methods: {
    toggleWithdrawDialog (e) {
      this.$store.commit('account/toggleWithdrawDialog', e);
    },
    openAddCoinAddressDialog() {
      this.$store.commit('account/toggleAddCoinAddressDialog', true);
    }
  },
  computed: {
    ...mapState('account', {
      isOpenWithdrawDialog: state => state.isOpenWithdrawDialog,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-layout {
  background: var(--bg-color-inner-panel);
}
.dialog-body {
  display: flex;
  height: 320px;
  .column-section {
    width: 50%;
    padding: 16px;
    .value-row {
      margin-top: 10px;
      span {
        margin-right: 4px;
        font-weight: 700;
      }
    }
    .warn-block {
      display: flex;
      align-items: flex-start;
      width: 280px;
      margin-top: 20px;
      i {
        font-size: 15px;
        margin-right: 4px;
      }
    }
    .field-label {
      margin-bottom: 5px;
    }
    .action-row {
      display: flex;
      justify-content: flex-end;
    }
    .amount-input {
      margin-top: 10px;
    }
  }
}
</style>
