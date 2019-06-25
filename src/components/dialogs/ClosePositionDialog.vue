<template>
  <v-dialog :value="isOpenClosePositionDialog" width="380" @input="toggleClosePositionDialog($event)">
    <v-layout class="white" column>
      <TitleBar title="交易面板" hideBack @close="toggleClosePositionDialog(false)"/>
      <div class="dialog-body">
        <div class="summary">
          <img src="../../assets/fu.png"/>
          <div class="text">
            <span class="company-name">{{selectedPosition.product}}</span>
            <span class="desc">APU9 AUD</span>
          </div>
          <v-btn icon small><v-icon>info</v-icon></v-btn>
        </div>
        <v-divider></v-divider>
        <div class="edit-list">
          <div class="edit-row">
            <div class="label">类型</div>
            <SelectByArrow :options="positionOptions.type.options" :value="positionOptions.type.value" @change="selectNewPositionOption('type', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">{{$t('lots')}}</div>
            <Counter :stepValue="positionOptions.lots.stepValue" :count="positionOptions.lots.count" @change="selectNewPositionCount('lots', $event)"></Counter>
          </div>
          <div class="edit-row" v-if="positionOptions.type.value !== '市价'">
            <div class="label">{{$t('price')}}</div>
            <Counter :stepValue="positionOptions.price.stepValue" :count="positionOptions.price.count" @change="selectNewPositionCount('price', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">{{$t('duration')}}</div>
            <SelectByArrow :options="positionOptions.duration.options" :value="positionOptions.duration.value" @change="selectNewPositionOption('duration', $event)"></SelectByArrow>
          </div>
        </div>
        <v-btn class="order-button" small depressed color="#39d" @click="closePosition()">{{$t('close_position')}}</v-btn>
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
import SelectByArrow from '../controls/SelectByArrow.vue';
import Counter from '../controls/Counter.vue';
import { mapState } from 'vuex';

export default {
  name: 'TradingPanelDialog',
  components: {
    TitleBar,
    SelectByArrow,
    Counter
  },
  data() {
    return {
      isShowDetails: false,
    };
  },
  methods: {
    toggleClosePositionDialog (e) {
      this.$store.commit('positions/toggleClosePositionDialog', e);
    },
    selectNewPositionOption (newPositionKey, e) {
      this.$store.commit('positions/selectNewPositionOption', {newPositionKey, value: e});
    },
    selectNewPositionCount (newPositionKey, e) {
      this.$store.commit('positions/selectNewPositionCount', {newPositionKey, newCount: e});
    },
    closePosition() {
      this.$store.commit('positions/closePosition');
      this.toggleClosePositionDialog(false);
    }
  },
  computed: {
    ...mapState('positions', {
      selectedPosition: state => state.selectedPosition,
      positionOptions: state => state.positionOptions,
      isOpenClosePositionDialog: state => state.isOpenClosePositionDialog,
    }),
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
