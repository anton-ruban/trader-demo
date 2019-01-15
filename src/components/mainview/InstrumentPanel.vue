<template>
  <div class="instrument-panel">
    <div class="head">
      <div>
        <span class="panel-title active">Watchlists</span>
        <span class="panel-title">Alerts</span>
      </div>
      <OpenContractDialogOpener />
    </div>
    <div class="content">
      <div class="content-section">
        <div class="content-head">
          <WatchlistPicker />
          <v-btn depressed small color="#d5d5d5">EDIT</v-btn>
        </div>
        <div class="content-body">
          <v-data-table
            :headers="products.headers"
            :items="products.data"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <td valign="middle"><img src="../../assets/cfd.png" width="16" class="instrument-icon"/>{{ props.item.instrument }}</td>
              <td class="text-xs-right"><div>{{ props.item.bid }}</div></td>
              <td class="text-xs-right">{{ props.item.bidSize }}</td>
              <td class="text-xs-right">{{ props.item.ask }}</td>
              <td class="text-xs-right">{{ props.item.askSize }}</td>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import WatchlistPicker from '../popovers/WatchlistPicker.vue';
import OpenContractDialogOpener from '../dialogs/OpenContractDialogOpener.vue';
export default {
  name: 'InstrumentPanel',
  components: {
    WatchlistPicker,
    OpenContractDialogOpener
  },
  computed: {
    ...mapState('others', {
      products: state => state.products,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.instrument-panel {
  width: 100%;
  height: 100%;
  .head {
    border: 0;
    background-color: #ccc;
    padding-left: 8px;
    padding-right: 8px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .panel-title {
      padding-right: 16px;
      color: #777;
      max-width: 100%;
      overflow: hidden;
      line-height: 32px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: #111;
      }
      &.active {
        color: #111;
      }
    }
  }
  .content {
    padding: 8px;
    padding-top: 0;
    background-color: #ccc;
    height: calc(100% - 32px);
    .content-section {
      background: #fff;
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
        height: calc(100% - 32px);
        overflow: auto;
        .instrument-icon {
          margin-right: 4px;
          vertical-align: -20%;
        }
      }
    }
  }
}
</style>
