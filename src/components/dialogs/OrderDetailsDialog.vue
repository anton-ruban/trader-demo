<template>
  <v-dialog :value="isOpenOrderDetailsDialog" width="380" @input="toggleOrderDetailsDialog($event)">
    <v-card>
      <v-layout column>
        <TitleBar :title="$t('order_details')" hideBack @close="toggleOrderDetailsDialog(false)"/>
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
            <div class="item-row">
              <span class="label">{{$t('status')}}</span>
              <span>Working</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('order_id')}}</span>
              <span>77963581</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('duration')}}</span>
              <span>{{selectedOrder.duration}}</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('filled_remaining')}}</span>
              <span>0 (2)</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">{{$t('placed')}}</span>
              <span>23-Jun-2019 19:38:05</span>
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
  name: 'OrderDetailsDialog',
  components: {
    TitleBar,
  },
  methods: {
    toggleOrderDetailsDialog (e) {
      this.$store.commit('orders/toggleOrderDetailsDialog', e);
    },
    selectNewOrderOption (newOrderKey, e) {
      this.$store.commit('positions/selectNewOrderOption', {newOrderKey, value: e});
    },
    selectNewOrderCount (newOrderKey, e) {
      this.$store.commit('positions/selectNewOrderCount', {newOrderKey, newCount: e});
    },
    orderDetails() {
      this.$store.commit('orders/orderDetails');
      this.toggleOrderDetailsDialog(false);
    }
  },
  computed: {
    ...mapState('orders', {
      selectedOrder: state => state.selectedOrder,
      isOpenOrderDetailsDialog: state => state.isOpenOrderDetailsDialog,
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
      background: var(--bg-color-dark);
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
}
</style>
