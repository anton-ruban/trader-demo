// initial state
const state = {
  selectedContractsId: 'contracts1',
  selectedContractId: 'contract1',
  contracts: {
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
    data: {
      contracts1: [
        {
          id: 'contract1',
          value: false,
          product: 'UK 100',
          sellAmount: 0,
          sellingPrice: 6906.20,
          buyingPrice: 6906.500,
          buyAmount: 0,
          icon: 'fu.png',
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
        {
          id: 'contract2',
          value: false,
          product: 'UK 100',
          sellAmount: 0,
          sellingPrice: 6906.20,
          buyingPrice: 6906.500,
          icon: 'fu.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
      ],
      contracts2: [
        {
          id: 'contract3',
          value: false,
          product: 'CK Hutchison Holdings Ltd',
          sellAmount: 0,
          sellingPrice: 77.500,
          buyingPrice: 77.500,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          icon: 'fx.png',
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
        {
          id: 'contract4',
          value: false,
          product: 'CK Hutchison Holdings Ltd',
          sellAmount: 0,
          sellingPrice: 77.500,
          buyingPrice: 77.500,
          buyAmount: 0,
          marketPrice: 'TSE',
          icon: 'fx.png',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
      ],
      contracts3: [
        {
          id: 'contract15',
          value: false,
          product: 'XAU/USD',
          sellAmount: 0,
          sellingPrice: 1315.21,
          buyingPrice: 1314.84,
          buyAmount: 0,
          icon: 'fu.png',
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview12',
          description: 'BTC • USD'
        },
        {
          id: 'contract16',
          value: false,
          product: 'XAG/USD',
          sellAmount: 0,
          sellingPrice: 14.52,
          buyingPrice: 14.43,
          icon: 'fu.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview13',
          description: 'BTC • USD'
        },
        {
          id: 'contract17',
          value: false,
          product: 'AUX/CNY',
          icon: 'fu.png',
          sellAmount: 0,
          sellingPrice: 287.51,
          buyingPrice: 287.45,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview14',
          description: 'BTC • USD'
        },
        {
          id: 'contract18',
          value: false,
          product: 'AUY/CNY',
          icon: 'fu.png',
          sellAmount: 0,
          sellingPrice: 287.35,
          buyingPrice: 287.31,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview15',
          description: 'BTC • USD'
        },
      ],
    }
  },
  selectedAlertId: 'alert1',
  alerts: {
    headers: [
      {
        text: '金融工具',
        align: 'left',
        value: 'instrument'
      },
      { text: '类型', value: 'type', align: 'right'},
      { text: '现价', value: 'current', align: 'right' },
      { text: '价格', value: 'price', align: 'right' },
      { text: '与现价差额', value: 'distance', align: 'right' },
      { text: '', value: 'actions', align: 'right' },
    ],
    data: [
      {
        id: 'alert1',
        instrument: 'Hydro One Ltd',
        desc: 'A:xnys-usd',
        type: '% Change',
        bid: 71.890,
        ask: 71.91,
        net_change: 1.62,
        percent_change: 2.3,
        condition: '<=',
        current: '-0.17%',
        price: '-0.04%',
        distance: 0.13,
        icon: 'fu.png',
      },
      {
        id: 'alert2',
        instrument: 'Hydro One Ltd',
        desc: 'A:xnys-usd',
        type: '% Change',
        bid: 71.890,
        ask: 71.91,
        net_change: 1.62,
        percent_change: 2.3,
        condition: '<=',
        current: '-0.17%',
        price: '-0.04%',
        distance: 0.13,
        icon: 'fu.png'
      },
    ]
  },
  alertOptions: {
    alert_type: {
      selectedIndex: 0,
      options: ['% Change', 'Bid Price', 'Ask Price'],
    },
    condition: {
      selectedIndex: 0,
      options: ['<=', '>='],
    },
    price: {stepValue: 0.01, count: 0.15},
    active: {
      selectedIndex: 0,
      options: ['On', 'Off'],
    },
    repeating: {
      selectedIndex: 0,
      options: ['On', 'Off'],
    },
    expiry_date: {
      selectedIndex: 0,
      options: ['1W', '2W', '3W'],
    }
  },
}

// getters
const getters = {
  selectedContract: state => {
    const result = state.contracts.data[state.selectedContractsId].find(contract => contract.id === state.selectedContractId);
    return result;
  },
  selectedAlert: state => {
    const result = state.alerts.data.find(alert => alert.id === state.selectedAlertId);
    return result;
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  selectContractsId(state, contractsId) {
    state.selectedContractsId = contractsId;
  },
  selectContract(state, contractId) {
    state.selectedContractId = contractId;
  },
  selectAlert(state, alertId) {
    state.selectedAlertId = alertId;
  },
  selectAlertOption(state, {optionKey, selectedIndex}) {
    state.alertOptions[optionKey].selectedIndex = selectedIndex;
  },
  selectAlertCount(state, {optionKey, newCount}) {
    state.alertOptions[optionKey].count = newCount;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
