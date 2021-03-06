<template>
  <div class="product-panel">
    <div class="head">
      <div>
        <Tab :tabs="WATCH_TABS" :selectedTabIndex="selectedWatchTabIndex" @change="selectWatchTab($event)"/>
      </div>
      <OpenContractDialogOpener />
    </div>
    <div class="content">
      <div class="content-section" v-if="selectedWatchTabIndex === 0">
        <div class="content-head">
          <WatchlistPicker />
        </div>
        <div class="content-body ipe-table">
          <v-data-table
            :headers="contracts.headers"
            :items="contracts.data[selectedContractsId]"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <tr @click.stop="selectRow(props.item)" @dblclick="handleRowSelect(props.item)" :class="[{'active': selectedContractId === props.item.id}]">
                <td valign="middle"><img :src="require(`@/assets/${props.item.icon}`)" width="16" class="product-icon"/>{{ props.item.product }}</td>
                <td class="text-xs-right">{{ props.item.sellAmount > 0 ? props.item.sellAmount : '-' }}</td>
                <td class="text-xs-right"><div class="clickable-div" @click="handleRowSelect(props.item)" v-if="!props.item.closed">{{ props.item.sellingPrice }}</div></td>
                <td class="text-xs-right"><div class="clickable-div" @click="handleRowSelect(props.item)" v-if="!props.item.closed">{{ props.item.buyingPrice }}</div></td>
                <td class="text-xs-right">{{ props.item.buyAmount > 0 ? props.item.buyAmount : '-' }}</td>
                <td class="text-xs-right">{{ props.item.marketPrice }}<AvailableStatus /></td>
                <td class="text-xs-right">{{ props.item.percent }}</td>
                <td class="text-xs-right">{{ props.item.fallAndRaise }}</td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </div>
      <div class="content-section" v-if="selectedWatchTabIndex === 1">
        <div class="content-body ipe-table">
          <v-data-table
            :headers="alerts.headers"
            :items="alerts.data"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <tr @click.stop="selectRow(props.item)" @dblclick="toggleEditPriceAlert(true)" :class="[{'active': selectedAlertId === props.item.id}]">
                <td valign="middle"><img :src="require(`@/assets/${props.item.icon}`)" width="16" class="product-icon"/>{{ props.item.instrument }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <td class="text-xs-right">{{ props.item.current }}</td>
                <td class="text-xs-right">{{ props.item.price }}<AvailableStatus /></td>
                <td class="text-xs-right">{{ props.item.distance }}</td>
                <td class="text-xs-right">
                  <v-btn depressed small @click="toggleEditPriceAlert(true)">编辑</v-btn>
                  <v-btn depressed small>删除</v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {WATCH_TABS} from '@/constants';
import WatchlistPicker from '../popovers/WatchlistPicker.vue';
import OpenContractDialogOpener from '../dialogs/OpenContractDialogOpener.vue';
import AvailableStatus from '../controls/AvailableStatus.vue';
import Tab from '../controls/Tab.vue';

export default {
  name: 'InstrumentPanel',
  components: {
    WatchlistPicker,
    OpenContractDialogOpener,
    AvailableStatus,
    Tab
  },
  methods: {
    handleRowSelect(item) {
      if (!item.closed) {
        this.$store.commit('trading/toggleTradingPanelDialog', true);
      }
    },
    toggleEditPriceAlert(e) {
      this.$store.commit('watch/toggleEditPriceAlert', e);
    },
    selectWatchTab(e) {
      this.$store.commit('tabs/selectWatchTab', e);
    },
    selectRow(e) {
      if (this.selectedWatchTabIndex === 0) {
        this.$store.commit('contracts/selectContract', e.id);
        this.$store.commit('overview/selectOverview', e.overviewId);
      } else {
        this.$store.commit('contracts/selectAlert', e.id);
      }
    }
  },
  data() {
    return {
      WATCH_TABS: WATCH_TABS
    }
  },
  computed: {
    ...mapState('contracts', {
      alerts: state => state.alerts,
      contracts: state => state.contracts,
      selectedContractsId: state => state.selectedContractsId,
      selectedContractId: state => state.selectedContractId,
      selectedAlertId: state => state.selectedAlertId,
    }),
    ...mapState('tabs', {
      selectedWatchTabIndex: state => state.selectedWatchTabIndex
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product-panel {
  width: 100%;
  height: 100%;
  .head {
    border: 0;
    background-color: var(--bg-color-panel);
    padding-left: 8px;
    padding-right: 8px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content {
    padding: 8px;
    padding-top: 0;
    background-color: var(--bg-color-panel);
    height: calc(100% - 32px);
    .content-section {
      background: var(--bg-color-inner-panel);
      width: 100%;
      height: 100%;
      .content-head {
        display: flex;
        justify-content: space-between;
        .v-btn {
          font-weight: bold;
          font-size: 12px;
        }
      }
      .content-body {
        height: calc(100% - 40px);
        overflow: auto;
        .active {
          background: var(--bg-color-hover);
        }
        .clickable-div {
          cursor: pointer;
          background: var(--bg-color-row-button);
          padding-right: 5px;
          border-radius: 2px;
          &:hover {
            background: var(--bg-color-row-button-hover);
          }
        }
        .product-icon {
          margin-right: 4px;
          vertical-align: -20%;
        }
        .v-btn {
          margin: 2px 5px;
          height: 20px;
          font-size: 11px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
