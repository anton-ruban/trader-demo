<template>
  <v-dialog :value="isOpenEditPriceAlert" width="380" @input="toggleEditPriceAlert($event)">
    <v-layout class="white" column>
      <TitleBar :title="$t('general.edit_price_alert')" hideBack @close="toggleEditPriceAlert(false)" />
      <div class="dialog-body">
        <div class="summary">
          <img src="../../assets/fu.png"/>
          <div class="text">
            <span class="company-name">{{selectedAlert.instrument}}</span>
            <span class="desc">{{selectedAlert.desc}}</span>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="summary-table">
          <div class="item">
            <div class="label">{{$t('general.bid')}}</div>
            <div class="value">{{selectedAlert.bid}}</div>
          </div>
          <div class="item">
            <div class="label">{{$t('general.ask')}}</div>
            <div class="value">{{selectedAlert.ask}}</div>
          </div>
          <div class="item">
            <div class="label">{{$t('general.net_change')}}</div>
            <div class="value">{{selectedAlert.net_change}}</div>
          </div>
          <div class="item">
            <div class="label">{{$t('general.percent_change')}}</div>
            <div class="value">{{selectedAlert.percent_change}}</div>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="edit-list">
          <div class="edit-row">
            <div class="label">{{$t('general.alert_type')}}</div>
            <SelectByArrow :options="alertOptions.alert_type.options" :value="alertOptions.alert_type.value" @change="selectAlertOption('alert_type', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">{{$t('general.condition')}}</div>
            <SelectByArrow :options="alertOptions.condition.options" :value="alertOptions.condition.value" @change="selectAlertOption('condition', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">{{$t('general.price')}}</div>
            <Counter :stepValue="alertOptions.price.stepValue" :count="alertOptions.price.count" @change="selectAlertCount('price', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">{{$t('general.active')}}</div>
            <SelectByArrow :options="alertOptions.active.options" :value="alertOptions.active.value" @change="selectAlertOption('active', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">{{$t('general.repeating')}}</div>
            <SelectByArrow :options="alertOptions.repeating.options" :value="alertOptions.repeating.value" @change="selectAlertOption('repeating', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">{{$t('general.expiry_date')}}</div>
            <SelectByArrow :options="alertOptions.expiry_date.options" :value="alertOptions.expiry_date.value" @change="selectAlertOption('expiry_date', $event)"></SelectByArrow>
          </div>
        </div>
        <v-btn class="apply-button" small depressed color="#39d" @click="toggleEditPriceAlert(false)">{{$t('general.apply')}}</v-btn>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import SelectByArrow from '../controls/SelectByArrow.vue';
import Counter from '../controls/Counter.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'EditPriceAlertDialog',
  components: {
    TitleBar,
    SelectByArrow,
    Counter
  },
  methods: {
    toggleEditPriceAlert (e) {
      this.$store.commit('watch/toggleEditPriceAlert', e);
    },
    selectAlertOption(optionKey, value) {
      this.$store.commit('contracts/selectAlertOption', {optionKey, value});
    },
    selectAlertCount (optionKey, e) {
      this.$store.commit('contracts/selectAlertCount', {optionKey, newCount: e});
    }
  },
  computed: {
    ...mapState('watch', {
      isOpenEditPriceAlert: state => state.isOpenEditPriceAlert,
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
  .apply-button {
    margin: 0;
    width: 100%;
    color: #fff;
    font-weight: bold;
    margin-bottom: 8px;
  }
}
</style>
