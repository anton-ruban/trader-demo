// initial state
const state = {
  selectedOverviewId: 'overview1',
  positions: {
    headers: [
      {
        text: '产品',
        align: 'left',
        value: 'product'
      },
      { text: '状态', value: 'status', align: 'right' },
      { text: '多/空', value: 'ls', align: 'right' },
      { text: '数量', value: 'amount', align: 'right' },
      { text: '开市价', value: 'open', align: 'right' },
      { text: '关闭', value: 'close', align: 'right' },
      { text: '止损', value: 'stop', align: 'center' },
      { text: '限价', value: 'limit', align: 'center' },
      { text: '盈/亏', value: 'pl', align: 'right' },
      { text: '盈/亏 (USD)', value: 'plUSD', align: 'right' },
      { text: '盈亏百分比%', value: 'price', align: 'right' },
      { text: '风险敞口', value: 'exposure', align: 'right' },
      { text: '', value: '', align: 'right' }
    ],
    data: [
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: -986,
        plUSD: -984,
        price: -8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: -986,
        plUSD: -984,
        price: -8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'US Tech 100 NAS',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 6080.60,
        close: 6574.14,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
    ]
  },
  overviews: {
    overview1: {
      latestPrice: {
        label: '最新价',
        value: 6924.90
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 6899.7,
      },
      low: {
        label: '最低价',
        value: 6891.76,
      },
      high: {
        label: '最高价',
        value: 6946.7,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 180
      }
    }
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
  selectOverview(state, overviewId) {
    state.selectedOverviewId = overviewId
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
