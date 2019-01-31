// initial state
const state = {
  isOpenRechargeDialog: false,
  isOpenWithdrawDialog: false,
  portfolioRecords: {
    headers: [
      {
        text: '产品',
        align: 'left',
        value: 'product'
      },
      { text: '货币', value: 'currency', align: 'right' },
      { text: '数量', value: 'amount', align: 'right' },
      { text: '开市价', value: 'open', align: 'right' },
      { text: '现价', value: 'currentPrice', align: 'right' },
      { text: '盈亏百分比%', value: 'profitAndLossPercent', align: 'right' },
      { text: '当日涨跌幅%', value: 'dayChangePercent', align: 'right' },
      { text: '盈/亏', value: 'pl', align: 'right' },
      { text: '总敞口', value: 'totalExposure', align: 'right' },
      { text: '总敞口%', value: 'totalExposurePercent', align: 'right' },
    ],
    data: [
      {
        value: false,
        product: 'XAU/USD',
        currency: 'CNY',
        amount: 2,
        open: 1278.31,
        currentPrice: 1278.32,
        profitAndLossPercent: '0.60%',
        dayChangePercent: '0.79%',
        pl: 986,
        totalExposure: 181.936,
        totalExposurePercent: '40.35%'
      },
      {
        value: false,
        product: 'XAU/CNH',
        currency: 'CNY',
        amount: 2,
        open: 8703.21,
        currentPrice: 8703.25,
        profitAndLossPercent: '0.60%',
        dayChangePercent: '0.79%',
        pl: 986,
        totalExposure: 181.936,
        totalExposurePercent: '40.35%'
      },
    ]
  },
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  toggleRechargeDialog(state, isOpen) {
    state.isOpenRechargeDialog = isOpen;
  },
  toggleWithdrawDialog(state, isOpen) {
    state.isOpenWithdrawDialog = isOpen;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
