<template>
  <vue-good-table
    :columns="ordersColumns"
    :fixed-header="true"
    :row-style-class="rowStyleClassFn"
    styleClass="vgt-table condensed ipe-vgt-table"
    :groupOptions="{enabled: true}"
    :rows="orders.data">
    
    <template slot="table-header-row" slot-scope="props">
      <button v-if="props.column.field === 'expanded'" @click="togglePositionGroup(props.row)">
        {{props.row.expanded ? '-' : '+'}}
      </button>
      <span v-else class="header-span">
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>
    
    <template slot="table-row" slot-scope="props">
      <div v-if="props.column.field === 'product'">
        <img src="../../../assets/fu.png" class="product-icon" width="16"/>{{ props.formattedRow[props.column.field] }}
      </div>
      <div v-else-if="props.column.field === 'action'" class="flex-item">
        <v-btn depressed small v-if="!props.row.canceld" @click="openCancelOrderDialog(props.row)">
          CANCEL
        </v-btn>
        <button class="ipe-btn info-button-box" type="button" @click="openOrderDetailsDialog(props.row)">
          <i class="fa fa-info"></i>
        </button>
      </div>
      <span :class="[{ positive: props.row.pl > 0 }, 'text-xs-right', 'colored-text']" v-else-if="props.column.field === 'pl'">
        {{props.formattedRow[props.column.field]}} USD
      </span>
      <span :class="[{ positive: props.row.plUSD > 0 }, 'text-xs-right', 'colored-text']" v-else-if="props.column.field === 'plUSD'">
        {{props.formattedRow[props.column.field]}}
      </span>
      <span :class="[{ positive: props.row.price > 0 }, 'text-xs-right', 'colored-text']" v-else-if="props.column.field === 'price'">
        {{props.formattedRow[props.column.field]}}
      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>
  </vue-good-table>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
export default {
  name: 'OrdersTable',
  computed: {
    ...mapGetters('orders', {
      isExpandedRow: 'isExpandedRow',
    }),
    ...mapState('orders', {
      orders: state => state.orders,
    }),
    ...mapState('tabs', {
      bottomTabs: state => state.bottomTabs,
    }),
  },
  methods: {
    rowStyleClassFn(row) {
      return !this.isExpandedRow(row) ? 'ipe-hidden' : '';
    },
    togglePositionGroup(row) {
      this.$store.commit('orders/toggleOrderGroup', row.product)
    },
    openCancelOrderDialog(row) {
      this.$store.commit('orders/selectOrder', row);
      this.$store.commit('orders/toggleCancelOrderDialog', true);
    },
    openOrderDetailsDialog(row) {
      this.$store.commit('orders/selectOrder', row);
      this.$store.commit('orders/toggleOrderDetailsDialog', true);
    },
    countProduct(rowObj) {
      return `${rowObj.product} (${rowObj.children.length})`;
    },
  },
  data(){
    return {
      ordersColumns: [
        {
          label: '',
          field: 'expanded',
          width: '20px',
          type: 'boolean',
          tdClass: 'ipe-column-td text-lg-center',
          thClass: 'ipe-column-th'
        },
        {
          label: '产品',
          field: 'product',
          headerField: this.countProduct,
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th'
        },
        {
          label: '类型',
          field: 'type',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th'
        },
        {
          label: '买入/卖出',
          field: 'buySell',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th'
        },
        {
          label: '数量',
          field: 'amount',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th',
          type: 'number'
        },
        {
          label: '价格',
          field: 'price',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th',
          type: 'number'
        },
        {
          label: '现价',
          field: 'current',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th',
          type: 'number'
        },
        {
          label: '止损',
          field: 'stop',
          tdClass: 'ipe-column-td text-xs-center',
          thClass: 'ipe-column-th text-xs-center'
        },
        {
          label: '限价',
          field: 'limit',
          tdClass: 'ipe-column-td text-xs-center',
          thClass: 'ipe-column-th text-xs-center'
        },
        {
          label: '有效期',
          field: 'duration',
          tdClass: 'ipe-column-td text-xs-right',
          thClass: 'ipe-column-th text-xs-right',
        },
        {
          label: '下单日期',
          field: 'created',
          tdClass: 'ipe-column-td text-xs-right',
          thClass: 'ipe-column-th text-xs-right',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'DD-MMM-YYYY',
        },
        {
          label: '',
          field: 'action',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th'
        }
      ],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
.flex-item {
  display: flex;
  align-items: center;
  .info-button-box {
    width: 24px;
    padding: 0;
    height: 20px;
    margin-left: 5px;

    &:hover {
      background: #d5d5d5;
      color: var(--text-color-active);
    }
  }
}
</style>
