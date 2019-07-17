<template>
  <vue-good-table
    :columns="positionsColumns"
    :fixed-header="true"
    :row-style-class="rowStyleClassFn"
    styleClass="vgt-table condensed ipe-vgt-table"
    :groupOptions="{enabled: true}"
    :rows="positions.rows">
    
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
      <div v-else-if="props.column.field === 'close'">
        {{ props.formattedRow[props.column.field] }} <img src="../../../assets/real-time.png" class="realtime-icon"/>
      </div>
      <v-btn depressed small v-else-if="props.column.field === 'stop' && !props.row.closed">
        ADD
      </v-btn>
      <v-btn depressed small v-else-if="props.column.field === 'limit' && !props.row.closed">
        ADD
      </v-btn>
      <v-btn depressed small v-else-if="props.column.field === 'action' && !props.row.closed" @click="openClosePositionDialog(props.row)">
        CLOSE
      </v-btn>
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
  name: 'PositionsTable',
  computed: {
    ...mapGetters('positions', {
      isExpandedRow: 'isExpandedRow',
    }),
    ...mapState('positions', {
      positions: state => state.positions,
    }),
  },
  methods: {
    rowStyleClassFn(row) {
      return !this.isExpandedRow(row) ? 'ipe-hidden' : '';
    },
    togglePositionGroup(row) {
      this.$store.commit('positions/togglePositionGroup', row.product)
    },
    openClosePositionDialog(row) {
      this.$store.commit('positions/selectPosition', row);
      this.$store.commit('positions/toggleClosePositionDialog', true);
    },
    sumPlUSD(rowObj) {
      let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        sum += rowObj.children[i].plUSD;
      }
      return sum;
    },
    countProduct(rowObj) {
      return `${rowObj.product} (${rowObj.children.length})`;
    },
  },
  data(){
    return {
      positionsColumns: [
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
          label: '状态',
          field: 'status',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th'
        },
        {
          label: '多/空',
          field: 'ls',
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
          label: '开市价',
          field: 'open',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th',
          type: 'number'
        },
        {
          label: '关闭',
          field: 'close',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th',
          type: 'number'
        },
        {
          label: '止损',
          field: 'stop',
          tdClass: 'ipe-column-td text-lg-right',
          thClass: 'ipe-column-th text-lg-right'
        },
        {
          label: '限价',
          field: 'limit',
          tdClass: 'ipe-column-td text-lg-right',
          thClass: 'ipe-column-th text-lg-right'
        },
        {
          label: '盈/亏',
          field: 'pl',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th',
          type: 'number'
        },
        {
          label: '盈/亏 (USD)',
          field: 'plUSD',
          headerField: this.sumPlUSD,
          type: 'number',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th'
        },
        {
          label: '盈亏百分比%',
          field: 'price',
          type: 'percentage',
          tdClass: 'ipe-column-td',
          thClass: 'ipe-column-th'
        },
        {
          label: '风险敞口',
          field: 'exposure',
          tdClass: 'ipe-column-td text-lg-right',
          thClass: 'ipe-column-th text-lg-right'
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
</style>
