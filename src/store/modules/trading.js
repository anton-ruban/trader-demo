// initial state
const state = {
  isOpenTradingPanelDialog: false,
  isOpenConfirmOrderDialog: false,
  isAddStopPanel: false,
  isShowDetails: false,
  tradeOptions: {
    type: {
      value: '限价',
      options: ['限价', '市价'],
    },
    buySell: {
      value: '买入',
      options: ['买入', '卖出'],
    },
    validPeriod: {
      value: '当日有效订单',
      options: ['当日有效订单'],
    },
    amount: { stepValue: 1, count: 0},
    price: {stepValue: 0.01, count: 110.05},
    stopLimitPrice: {stepValue: 0.01, count: 110.05},
    takeProfit: {stepValue: 0.01, count: 0},
    stopLoss: {stepValue: 0.01, count: 0},
  },
  newTrade: {}
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  updateNewTrade(state, newTrade) {
    state.newTrade = newTrade;
  },
  toggleConfirmOrderDialog(state, isOpen) {
    state.isOpenConfirmOrderDialog = isOpen;
  },
  toggleTradingPanelDialog(state, isOpen) {
    if (!isOpen) {
      state.isOpenConfirmOrderDialog = false;
    }
    state.isOpenTradingPanelDialog = isOpen;
  },
  toggleAddStopPanel(state, isOpen) {
    state.isAddStopPanel = isOpen;
  },
  toggleShowDetails(state, isOpen) {
    state.isShowDetails = isOpen;
  },
  selectNewTradingOption(state, {newTradingKey, value}) {
    state.tradeOptions[newTradingKey].value = value;
  },
  selectNewTradingCount(state, {newTradingKey, newCount}) {
    state.tradeOptions[newTradingKey].count = newCount;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
