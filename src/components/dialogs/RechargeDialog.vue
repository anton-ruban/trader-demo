<template>
  <v-dialog :value="isOpenRechargeDialog" width="600" @input="toggleRechargeDialog($event)">
    <v-card>
      <v-layout class="dialog-layout" column>
        <TitleBar title="充值" hideBack @close="toggleRechargeDialog(false)" />
        <div class="dialog-body">
          <div class="column-section">
            <h1>BTC</h1>
            <div class="value-row">
              <span>冻结:</span>
              0.00000000000000000000000
            </div>
            <div class="value-row">
              <span>可用:</span>
              0.00000000000000000000000
            </div>
            <div class="warn-block">
              <v-icon>warning</v-icon>
              <div>请勿向右侧地址充值非BTC资产，否则将不可找回。使用BTC地址充值要2个网络额:0.001BTC,充值金额低于0.001 BTC将不会被记录。</div>
            </div>
          </div>
          <div class="column-section">
            <div class="field-label">BTC充值地址</div>
            <v-text-field
              value="17283092039d98fasdf02jfg02329f"
              class="ipe-text-field"
              disabled
            ></v-text-field>
            <img src="../../assets/verification.png"/>
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
  name: 'RechargeDialog',
  components: {
    TitleBar,
  },
  methods: {
    toggleRechargeDialog (e) {
      this.$store.commit('account/toggleRechargeDialog', e);
    },
  },
  computed: {
    ...mapState('account', {
      isOpenRechargeDialog: state => state.isOpenRechargeDialog,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-body {
  display: flex;
  height: 270px;
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
      margin-top: 50px;
      i {
        font-size: 15px;
        margin-right: 4px;
      }
    }
    .field-label {
      margin-bottom: 5px;
    }
  }
}
</style>
