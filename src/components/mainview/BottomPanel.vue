<template>
  <div class="bottom-panel">
    <div class="head">
      <div>
        <span class="panel-title active">仓位</span>
        <span class="panel-title">订单</span>
      </div>
      <div>
        <button class="btn" type="button" title="Settings">
          <i class="fa fa-cog"></i>
        </button>
      </div>
    </div>
    <div class="content">
      <div class="content-section">
        <v-data-table
          :headers="positions.headers"
          :items="positions.data"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td><img src="../../assets/cfd.png" class="product-icon" width="16"/>{{ props.item.product }}</td>
            <td class="text-xs-right">{{ props.item.status }}</td>
            <td class="text-xs-right">{{ props.item.ls }}</td>
            <td class="text-xs-right">{{ props.item.amount }}</td>
            <td class="text-xs-right">{{ props.item.open }}</td>
            <td class="text-xs-right">{{ props.item.close }} <img src="../../assets/real-time.png" class="realtime-icon"/></td>
            <td class="text-xs-center"><v-btn depressed small color="#e5e5e5">ADD</v-btn></td>
            <td class="text-xs-center"><v-btn depressed small color="#e5e5e5">ADD</v-btn></td>
            <td v-bind:class="[{ positive: props.item.pl > 0 }, 'text-xs-right', 'colored-text']">{{ props.item.pl }} USD</td>
            <td v-bind:class="[{ positive: props.item.plUSD > 0 }, 'text-xs-right', 'colored-text']">{{ props.item.plUSD }} USD</td>
            <td v-bind:class="[{ positive: props.item.price > 0 }, 'text-xs-right', 'colored-text']">{{ props.item.price }} USD</td>
            <td class="text-xs-right">{{ props.item.exposure }}</td>
            <td>
              <v-btn depressed small color="#e5e5e5">CLOSE</v-btn>
            </td>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  name: 'BottomPanel',
  components: {
  },
  computed: {
    ...mapState('others', {
      positions: state => state.positions,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bottom-panel {
  width: 100%;
  .head {
    border: 0;
    background-color: #ccc;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    justify-content: space-between;
    height: 32px;
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
    button {
      background: transparent;
      color: #888;
      font-size: 15px;
      text-transform: none;
      &:hover {
        color: #111;
      }
    }
  }
  .content {
    padding: 8px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: #ccc;
    height: calc(100% - 32px);
    .content-section {
      background: #fff;
      width: 100%;
      height: calc(100% - 8px);
      overflow: auto;
      .product-icon {
        vertical-align: -20%;
        margin-right: 4px;
      }
      .realtime-icon {
        vertical-align: -20%;
      }
      .v-btn {
        margin: 2px 0;
        height: 20px;
        font-size: 11px;
        font-weight: bold;
      }
      .colored-text {
        color: #e93e33;
        &.positive {
          color: #00a800;
        }
      }
    }
  }
}
</style>
