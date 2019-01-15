// initial state
const state = {
  isOpenDetails: false,
  marketPrices: {
    headers: [
      {
        text: '挂单量',
        align: 'right',
        value: 'pendingOrder1'
      },
      { text: '卖出价', value: 'sellingPrice', align: 'right' },
      { text: '', value: 'graph' },
      { text: '买入价', value: 'buyingPrice'},
      { text: '挂单量', value: 'pendingOrder2', align: 'right' }
    ],
    data: [
      {
        value: false,
        pendingOrder1: 500,
        sellingPrice: 93.770,
        buyingPrice: 93.800,
        pendingOrder2: 600,
      }
    ]
  }
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  toggleDetails(state, isOpen) {
    state.isOpenDetails = isOpen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
