import Vue from 'vue';
import _ from 'lodash';
// initial state
const state = {
  isOpenCancelOrderDialog: false,
  selectedOrder: {},
  orders: {
    headers: [
      {
        text: '产品',
        align: 'left',
        value: 'product'
      },
      { text: '类型', value: 'type', align: 'left'},
      { text: '买入/卖出', value: 'buySell', align: 'left' },
      { text: '数量', value: 'quantity', align: 'right' },
      { text: '价格', value: 'price', align: 'right' },
      { text: '现价', value: 'currentPrice', align: 'right' },
      { text: '止损', value: 'stopLoss', align: 'center' },
      { text: '限价', value: 'limitPrice', align: 'center' },
      { text: '有效期', value: 'validPeriod', align: 'right' },
      { text: '下单日期', value: 'orderDate', align: 'right' }
    ],
    data: []
  },
}

// getters
const getters = {
  isExpandedRow: state => row => {
    const parentRow = state.orders.data.find(item => item.product === row.parent);
    return parentRow.expanded;
  },
}

// actions
const actions = {
}

// mutations
const mutations = {
  toggleOrderGroup(state, productName) {
    const idx = _.findIndex(state.orders.data, item => item.product === productName);
    Vue.set(state.orders.data[idx], 'expanded', !state.orders.data[idx].expanded);
  },
  toggleCancelOrderDialog(state, isOpen) {
    state.isOpenCancelOrderDialog = isOpen;
  },
  addOrder(state, newOrder) {
    const idx = _.findIndex(state.orders.data, item => item.product === newOrder.parent);

    if (idx > -1) {
      state.orders.data[idx].children.push(newOrder);
    } else {
      state.orders.data.push({
        product: newOrder.parent,
        expanded: true,
        children: [newOrder],
      });
    }
  },
  selectOrder(state, row) {
    state.selectedOrder = row;
  },
  cancelOrder(state) {
    const idx = _.findIndex(state.orders.data, item => item.product === state.selectedOrder.parent);
    const orderIdx = _.findIndex(state.orders.data[idx].children, order => order.product === state.selectedOrder.product);
    Vue.set(state.orders.data[idx].children[orderIdx], 'canceled', true);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
