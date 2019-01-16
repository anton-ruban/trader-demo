<template>
  <v-dialog :value="isOpenTradingPanelDialog" width="380" @input="toggleTradingPanelDialog($event)">
    <v-layout class="white" column>
      <TitleBar title="交易面板" hideBack @close="toggleTradingPanelDialog(false)" />
      <div class="dialog-body">
        <div class="summary">
          <img src="../../assets/cfd.png"/>
          <div class="text">
            <span class="company-name">Canadian Pacific Railway Ltd</span>
            <span class="desc">CP:xtse•CAD</span>
          </div>
          <v-btn icon small><v-icon>info</v-icon></v-btn>
          <v-btn icon small><v-icon>money</v-icon></v-btn>
          <v-btn icon small><v-icon>search</v-icon></v-btn>
        </div>
        <v-divider></v-divider>
        <div class="summary-table">
          <div class="item">
            <div class="label">卖出价</div>
            <div class="value">255.270</div>
          </div>
          <div class="item">
            <div class="label">买入价</div>
            <div class="value">255.270</div>
          </div>
          <div class="item">
            <div class="label">最新价</div>
            <div class="value">255.270</div>
          </div>
          <div class="item">
            <div class="label">净涨跌</div>
            <div class="value">255.270</div>
          </div>
          <div class="item">
            <div class="label">涨跌幅%</div>
            <div class="value">255.270</div>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="clock-info">
          <div>
            <v-icon>query_builder</v-icon>
            15 分钟延时 – 18:41:25
          </div>
          <div>
            Toronto Stock Exchange
            <AvailableStatus />
          </div>
        </div>
        <div class="edit-list">
          <div class="edit-row">
            <div class="label">类型</div>
            <SelectByArrow :options="['止损', '浮动止损', '止损限价']" value="止损"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">买入/卖出</div>
            <SelectByArrow :options="['买入']" value="买入"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">数量</div>
            <Counter stepValue="1" value="0"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">价格</div>
            <Counter stepValue="0.01" value="110.05"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">止损限价价格</div>
            <Counter stepValue="0.01" value="110.05"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">有效期</div>
            <SelectByArrow :options="['取消前有效(G.T.C.)']" value="取消前有效(G.T.C.)"></SelectByArrow>
          </div>
        </div>
        <div class="section-divider">
          <v-divider></v-divider>
          <a>添加止盈/止损</a>
          <v-divider></v-divider>
        </div>
        <v-btn class="order-button" small depressed color="#39d">建立订单</v-btn>
        <div class="section-divider">
          <v-divider></v-divider>
          <a>隐藏详细信息</a>
          <v-divider></v-divider>
        </div>
        <div class="details">
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">佣金</span>
            <span>0 CAD</span>
          </div>
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">名义值</span>
            <span>0 CAD</span>
          </div>
          <v-divider></v-divider>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import AvailableStatus from '../controls/AvailableStatus.vue';
import SelectByArrow from '../controls/SelectByArrow.vue';
import Counter from '../controls/Counter.vue';
import { mapState } from 'vuex';

export default {
  name: 'TradingPanelDialog',
  components: {
    TitleBar,
    AvailableStatus,
    SelectByArrow,
    Counter
  },
  methods: {
    toggleTradingPanelDialog (e) {
      this.$store.commit('others/toggleTradingPanelDialog', e);
    }
  },
  computed: {
    ...mapState('others', {
      isOpenTradingPanelDialog: state => state.isOpenTradingPanelDialog
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
  .summary-table {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .item {
      text-align: center;
      padding: 4px 8px;
      .label {
        margin-bottom: 4px;
        color: #888;
        font-size: 11px;
      }
    }
  }
  .clock-info {
    display: flex;
    align-items: center;
    color: #888;
    height: 20px;
    font-size: 11px;
    justify-content: space-between;
    margin-bottom: 8px;
    i {
      font-size: 14px;
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
