import Vue from 'vue';
import _ from 'lodash';

// initial state
const state = {
  selectedPosition: {},
  isOpenClosePositionDialog: false,
  positionOptions: {
    type: {
      value: '限价',
      options: ['限价', '市价'],
    },
    duration: {
      value: 'G.T.C',
      options: ['G.T.C', 'Day Order', 'One Week'],
    },
    lots: { stepValue: 1, count: 2},
    price: {stepValue: 0.001, count: 6000},
  },
  positions: {
    rows: [
      {
        product: "Future",
        expanded: true,
        plUSD: "",
        children: [
          {
            value: false,
            product: 'XAU/USD',
            status: '开市价',
            ls: '买入',
            amount: 2,
            open: 1278.31,
            close: 1278.32,
            stop: null,
            closed: false,
            limit: null,
            pl: 986,
            plUSD: 984,
            price: 0.08,
            parent: 'Future',
            exposure: '13.145USD'
          },
          {
            value: false,
            product: 'XAU/CNH',
            status: '开市价',
            ls: '买入',
            amount: 2,
            open: 8703.21,
            close: 8703.25,
            closed: false,
            stop: null,
            limit: null,
            parent: 'Future',
            pl: 986,
            plUSD: 984,
            price: 0.08,
            exposure: '13.145USD'
          },
          {
            value: false,
            product: 'USD/CNH',
            status: '开市价',
            ls: '买入',
            amount: 2,
            open: 6.8063,
            closed: false,
            close: 6.8065,
            stop: null,
            limit: null,
            parent: 'Future',
            pl: -986,
            plUSD: -984,
            price: -0.08,
            exposure: '13.145USD'
          },
        ]
      },
      {
        product: "Forex",
        plUSD: "",
        expanded: true,
        children: [
          {
            value: false,
            product: 'XAU/USD',
            status: '开市价',
            ls: '买入',
            amount: 2,
            closed: false,
            open: 1278.31,
            close: 1278.32,
            stop: null,
            limit: null,
            pl: 986,
            plUSD: 984,
            price: 0.08,
            parent: 'Forex',
            exposure: '13.145USD'
          },
          {
            value: false,
            product: 'XAU/CNH',
            status: '开市价',
            ls: '买入',
            amount: 2,
            open: 8703.21,
            close: 8703.25,
            stop: null,
            limit: null,
            closed: false,
            parent: 'Forex',
            pl: 986,
            plUSD: 984,
            price: 0.08,
            exposure: '13.145USD'
          },
        ]
      },
    ],
  },
}

// getters
const getters = {
  isExpandedRow: state => row => {
    const parentProductName = row.parent;
    const parentRow = state.positions.rows.find(row => row.product === parentProductName);
    return parentRow.expanded;
  },
}

// actions
const actions = {
}

// mutations
const mutations = {
  togglePositionGroup(state, productName) {
    const idx = _.findIndex(state.positions.rows, row => row.product === productName);
    Vue.set(state.positions.rows[idx], 'expanded', !state.positions.rows[idx].expanded);
  },
  toggleClosePositionDialog(state, isOpen) {
    state.isOpenClosePositionDialog = isOpen;
  },
  selectPosition(state, row) {
    state.selectedPosition = row;
  },
  selectNewPositionOption(state, {newPositionKey, value}) {
    state.positionOptions[newPositionKey].value = value;
  },
  selectNewPositionCount(state, {newPositionKey, newCount}) {
    state.positionOptions[newPositionKey].count = newCount;
  },
  closePosition(state) {
    const idx = _.findIndex(state.positions.rows, row => row.product === state.selectedPosition.parent);
    const positionIdx = _.findIndex(state.positions.rows[idx].children, position => position.product === state.selectedPosition.product);
    Vue.set(state.positions.rows[idx].children[positionIdx], 'closed', true);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
