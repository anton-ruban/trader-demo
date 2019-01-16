// initial state
const state = {
  isLoggedIn: true,
  products: {
    headers: [
      {
        text: '产品',
        align: 'left',
        value: 'product'
      },
      { text: '卖出数量', value: 'sellAmount', align: 'right'},
      { text: '卖出价', value: 'sellingPrice', align: 'right' },
      { text: '买入价', value: 'buyingPrice', align: 'right' },
      { text: '买入数量', value: 'buyAmount', align: 'right' },
      { text: '市价', value: 'marketPrice', align: 'right' },
      { text: '%', value: 'percent', align: 'right' },
      { text: '净涨跌', value: 'fallAndRaise', align: 'right' }
    ],
    data: [
      {
        value: false,
        product: 'UK 100',
        sellAmount: 0,
        sellingPrice: 6906.20,
        buyingPrice: 6906.500,
        buyAmount: 0,
        marketPrice: 'TSE',
        percent: '0.00%',
        fallAndRaise: 0.00,
      },
      {
        value: false,
        product: 'CK Hutchison Holdings Ltd',
        sellAmount: 0,
        sellingPrice: 77.500,
        buyingPrice: 77.500,
        buyAmount: 0,
        marketPrice: 'TSE',
        percent: '0.00%',
        fallAndRaise: 0.00,
      },
    ]
  },
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
  overview: {
    bid: {
      label: 'Bid',
      value: 6924.90
    },
    ask: {
      label: 'Ask',
      value: 6926.40,
    },
    netChange: {
      label: 'Net change',
      value: 39.45
    },
    percentChange: {
      label: '% change',
      value: '0.53%'
    },
    open: {
      label: 'Open',
      value: 6899.7,
    },
    low: {
      label: 'Low',
      value: 6891.76,
    },
    high: {
      label: 'High',
      value: 6946.7,
    },
    prevClose: {
      label: 'Prev. close',
      value: 6887.7,
    },
    lastUpdate: {
      label: 'Last update',
      value: '15:07:28',
    },
    bidSize: {
      label: 'Bid Size',
      value: 180
    },
    askSize: {
      label: 'Ask Size',
      value: 30,
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
