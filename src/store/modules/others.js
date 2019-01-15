// initial state
const state = {
  isLoggedIn: true,
  products: {
    headers: [
      {
        text: 'Instrument',
        align: 'left',
        value: 'instrument'
      },
      { text: 'Bid', value: 'bid', align: 'right' },
      { text: 'Bid Size', value: 'bidSize', align: 'right' },
      { text: 'Ask', value: 'ask', align: 'right' },
      { text: 'Ask Size', value: 'askSize', align: 'right' }
    ],
    data: [
      {
        value: false,
        instrument: 'UK 100',
        bid: 6906.20,
        bidSize: 120,
        ask: 6908.20,
        askSize: 150
      },
      {
        value: false,
        instrument: 'CK Hutchison Holdings Ltd',
        bid: 77.500,
        bidSize: 21000,
        ask: 77.550,
        askSize: 10000
      },
    ]
  },
  positions: {
    headers: [
      {
        text: 'Instrument',
        align: 'left',
        value: 'instrument'
      },
      { text: 'Status', value: 'status', align: 'right' },
      { text: 'L/S', value: 'ls', align: 'right' },
      { text: 'Amount', value: 'amount', align: 'right' },
      { text: 'Open', value: 'open', align: 'right' },
      { text: 'Close', value: 'close', align: 'right' },
      { text: 'Stop', value: 'stop', align: 'center' },
      { text: 'Limit', value: 'limit', align: 'center' },
      { text: 'P/L', value: 'pl', align: 'right' },
      { text: 'P/L (USD)', value: 'plUSD', align: 'right' },
      { text: '% Price', value: 'price', align: 'right' },
      { text: 'Exposure', value: 'exposure', align: 'right' },
      { text: '', value: '', align: 'right' }
    ],
    data: [
      {
        value: false,
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
        instrument: 'US Tech 100 NAS',
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
  positions: state => state.positions,
  overview: state => state.overview,
  isLoggedIn: state => state.isLoggedIn,
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
