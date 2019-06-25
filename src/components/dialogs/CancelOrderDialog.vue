<template>
  <v-dialog :value="isOpenCancelOrderDialog" width="380" @input="toggleCancelOrderDialog($event)">
    <v-layout class="white" column>
      <TitleBar :title="$t('cancel_order')" hideBack @close="toggleCancelOrderDialog(false)"/>
      <div class="dialog-body">
        <div class="summary">
          <img src="../../assets/fu.png"/>
          <div class="text">
            <span class="company-name">{{selectedOrder.product}}</span>
            <span class="desc">APU9 AUD</span>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="details">
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">{{$t('limit')}}</span>
            <span>Buy 200 @ 16.300</span>
          </div>
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">{{$t('current_price')}}</span>
            <span>16.590</span>
          </div>
          <v-divider></v-divider>
        </div>
        <v-btn class="order-button" small depressed color="#39d" @click="cancelOrder()">{{$t('cancel_order')}}</v-btn>
        <div class="section-divider">
          <v-divider></v-divider>
          <a @click="isShowDetails = !isShowDetails">{{isShowDetails ? '隐藏详细信息' : '显示详细信息'}}</a>
          <v-divider></v-divider>
        </div>
        <div class="details" v-if="isShowDetails">
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">成本</span>
            <span>10 CNY</span>
          </div>
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">佣金</span>
            <span>9 CNY</span>
          </div>
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">手续费</span>
            <span>1 CNY</span>
          </div>
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">名义值</span>
            <span>0 CNY</span>
          </div>
          <v-divider></v-divider>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'CancelOrderDialog',
  components: {
    TitleBar,
  },
  data() {
    return {
      isShowDetails: false,
    };
  },
  methods: {
    toggleCancelOrderDialog (e) {
      this.$store.commit('orders/toggleCancelOrderDialog', e);
    },
    selectNewOrderOption (newOrderKey, e) {
      this.$store.commit('positions/selectNewOrderOption', {newOrderKey, value: e});
    },
    selectNewOrderCount (newOrderKey, e) {
      this.$store.commit('positions/selectNewOrderCount', {newOrderKey, newCount: e});
    },
    cancelOrder() {
      this.$store.commit('orders/cancelOrder');
      this.toggleCancelOrderDialog(false);
    }
  },
  computed: {
    ...mapState('orders', {
      selectedOrder: state => state.selectedOrder,
      isOpenCancelOrderDialog: state => state.isOpenCancelOrderDialog,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-body {
  padding: 8px;
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
  .edit-list {
    margin-bottom: 8px;
    .edit-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      padding-left: 8px;
      color: #888;
      background: #ebebeb;
    }
  }
  .section-divider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    margin-bottom: 8px;
    a {
      margin: 0 8px;
      color: #39d;
    }
  }
  .details {
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
  .order-button {
    margin: 0;
    width: 100%;
    color: #fff;
    font-weight: bold;
    margin-bottom: 8px;
  }
}
</style>
