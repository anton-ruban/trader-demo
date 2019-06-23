import _ from 'lodash';
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
          closed: true,
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
          id: 'contract5',
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
          id: 'contract6',
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
          id: 'contract7',
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
          id: 'contract8',
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
      contracts4: [
        {
          id: 'contract5',
          value: false,
          product: 'BTC/USDT',
          sellAmount: 0,
          sellingPrice: 3632.52,
          buyingPrice: 3632.24,
          buyAmount: 0,
          marketPrice: 'TSE',
          icon: 'fx.png',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'BTC • USD'
        },
        {
          id: 'contract6',
          value: false,
          product: 'ETH/USDT',
          sellAmount: 0,
          sellingPrice: 120.63,
          buyingPrice: 120.48,
          buyAmount: 0,
          marketPrice: 'TSE',
          icon: 'fx.png',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview2',
          description: 'ETH • USD'
        },
        {
          id: 'contract9',
          value: false,
          product: 'LTC/USDT',
          sellAmount: 0,
          sellingPrice: 44.14,
          buyingPrice: 44.09,
          icon: 'fx.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview5',
          description: 'LTC • USD'
        },
        {
          id: 'contract7',
          value: false,
          product: 'EOS/USDT',
          sellAmount: 0,
          sellingPrice: 2.7544,
          buyingPrice: 2.7318,
          buyAmount: 0,
          marketPrice: 'TSE',
          icon: 'fx.png',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview3',
          description: 'EOS • USD'
        },
        {
          id: 'contract19',
          value: false,
          product: 'XRP/USTD',
          sellAmount: 0,
          sellingPrice: 0.3025,
          buyingPrice: 0.3012,
          icon: 'fx.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview16',
          description: 'BTC • USD'
        },
        {
          id: 'contract20',
          value: false,
          product: 'DASH/USDT',
          sellAmount: 0,
          sellingPrice: 79.41,
          buyingPrice: 79.25,
          icon: 'fx.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview17',
          description: 'BTC • USD'
        },
        {
          id: 'contract10',
          value: false,
          product: 'BCH/USDT',
          sellAmount: 0,
          sellingPrice: 123.26,
          buyingPrice: 123.02,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          icon: 'fx.png',
          fallAndRaise: 0.00,
          overviewId: 'overview6',
          description: 'BCH • USD'
        },
        {
          id: 'contract21',
          value: false,
          product: 'BNB/USDT',
          sellAmount: 0,
          sellingPrice: 9.6275,
          buyingPrice: 9.6223,
          buyAmount: 0,
          marketPrice: 'TSE',
          icon: 'fx.png',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview18',
          description: 'BTC • USD'
        },
        {
          id: 'contract22',
          value: false,
          product: 'ADA/USDT',
          sellAmount: 0,
          sellingPrice: 0.0421,
          buyingPrice: 0.0413,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          icon: 'fx.png',
          fallAndRaise: 0.00,
          overviewId: 'overview19',
          description: 'BTC • USD'
        },
        {
          id: 'contract12',
          value: false,
          product: 'BSV/USDT',
          sellAmount: 0,
          sellingPrice: 64.92,
          buyingPrice: 64.84,
          buyAmount: 0,
          icon: 'fx.png',
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview8',
          description: 'BSV • USD'
        },
      ],
      contracts5: [
        {
          id: 'contract23',
          value: false,
          product: 'USDT/BTC',
          sellAmount: 0,
          sellingPrice: 0.000275312,
          buyingPrice: 0.000275291,
          icon: 'fu.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview20',
          description: 'BTC • USD'
        },
        {
          id: 'contract24',
          value: false,
          product: 'ETH/BTC',
          sellAmount: 0,
          sellingPrice: 0.033209631,
          buyingPrice: 0.033168336,
          buyAmount: 0,
          icon: 'fu.png',
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview21',
          description: 'BTC • USD'
        },
        {
          id: 'contract25',
          value: false,
          product: 'LTC/BTC',
          sellAmount: 0,
          sellingPrice: 0.012151812,
          buyingPrice: 0.012138047,
          icon: 'fu.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview22',
          description: 'BTC • USD'
        },
        {
          id: 'contract26',
          value: false,
          product: 'EOS/BTC',
          sellAmount: 0,
          sellingPrice: 0.000758291,
          buyingPrice: 0.000752069,
          buyAmount: 0,
          icon: 'fu.png',
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview23',
          description: 'BTC • USD'
        },
        {
          id: 'contract27',
          value: false,
          product: 'XRP/BTC',
          sellAmount: 0,
          sellingPrice: 0.00008328,
          icon: 'fu.png',
          buyingPrice: 0.00008292,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview24',
          description: 'BTC • USD'
        },
        {
          id: 'contract28',
          value: false,
          product: 'DASH/BTC',
          sellAmount: 0,
          sellingPrice: 0.021861699,
          buyingPrice: 0.021817651,
          icon: 'fu.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview25',
          description: 'BTC • USD'
        },
        {
          id: 'contract29',
          value: false,
          product: 'BCH/BTC',
          sellAmount: 0,
          sellingPrice: 0.033933674,
          buyingPrice: 0.033867602,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview26',
          icon: 'fu.png',
          description: 'BTC • USD'
        },
        {
          id: 'contract30',
          value: false,
          product: 'BNB/BTC',
          sellAmount: 0,
          sellingPrice: 0.002650466,
          buyingPrice: 0.002649035,
          buyAmount: 0,
          marketPrice: 'TSE',
          icon: 'fu.png',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview27',
          description: 'BTC • USD'
        },
        {
          id: 'contract31',
          value: false,
          product: 'ADA/BTC',
          sellAmount: 0,
          sellingPrice: 0.00001159,
          buyingPrice: 0.00001137,
          buyAmount: 0,
          icon: 'fu.png',
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview28',
          description: 'BTC • USD'
        },
        {
          id: 'contract32',
          value: false,
          product: 'BSV/BTC',
          sellAmount: 0,
          sellingPrice: 0.017872579,
          buyingPrice: 0.017850555,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          icon: 'fu.png',
          overviewId: 'overview29',
          description: 'BTC • USD'
        },
      ],
      contracts6: [
        {
          id: 'contract33',
          value: false,
          product: 'BTC/ETH',
          sellAmount: 0,
          sellingPrice: 30.13164116,
          buyingPrice: 30.12931857,
          buyAmount: 0,
          icon: 'fu.png',
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview30',
          description: 'BTC • USD'
        },
        {
          id: 'contract34',
          value: false,
          product: 'USDT/ETH',
          sellAmount: 0,
          sellingPrice: 0.008300133,
          buyingPrice: 0.008289812,
          icon: 'fu.png',
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview31',
          description: 'BTC • USD'
        },
        {
          id: 'contract35',
          value: false,
          product: 'LTC/ETH',
          sellAmount: 0,
          icon: 'fu.png',
          sellingPrice: 0.366139936,
          buyingPrice: 0.365725188,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview32',
          description: 'BTC • USD'
        },
        {
          id: 'contract36',
          value: false,
          product: 'EOS/ETH',
          icon: 'fu.png',
          sellAmount: 0,
          sellingPrice: 0.022847663,
          buyingPrice: 0.022660197,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview33',
          description: 'BTC • USD'
        },
        {
          id: 'contract36',
          value: false,
          product: 'XRP/ETH',
          sellAmount: 0,
          sellingPrice: 0.002509228,
          buyingPrice: 0.002498445,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview34',
          icon: 'fu.png',
          description: 'BTC • USD'
        },
        {
          id: 'contract37',
          value: false,
          product: 'DASH/ETH',
          sellAmount: 0,
          sellingPrice: 0.658703496,
          buyingPrice: 0.657376301,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          icon: 'fu.png',
          fallAndRaise: 0.00,
          overviewId: 'overview35',
          description: 'BTC • USD'
        },
        {
          id: 'contract38',
          value: false,
          product: 'BCH/ETH',
          sellAmount: 0,
          sellingPrice: 1.022437891,
          buyingPrice: 1.020447099,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          icon: 'fu.png',
          fallAndRaise: 0.00,
          overviewId: 'overview36',
          description: 'BTC • USD'
        },
        {
          id: 'contract39',
          value: false,
          product: 'BNB/ETH',
          sellAmount: 0,
          sellingPrice: 0.079859815,
          buyingPrice: 0.079816681,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          icon: 'fu.png',
          fallAndRaise: 0.00,
          overviewId: 'overview37',
          description: 'BTC • USD'
        },
      ]
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
      value: '% Change',
      options: ['% Change', 'Bid Price', 'Ask Price'],
    },
    condition: {
      value: '<=',
      options: ['<=', '>='],
    },
    price: {stepValue: 0.01, count: 0.15},
    active: {
      value: 'On',
      options: ['On', 'Off'],
    },
    repeating: {
      value: 'On',
      options: ['On', 'Off'],
    },
    expiry_date: {
      value: '1W',
      options: ['1W', '2W', '3W'],
    }
  },
}

// getters
const getters = {
  selectedContract: state => {
    let result = state.contracts.data[state.selectedContractsId].find(contract => contract.id === state.selectedContractId);

    if (!result) {
      result = state.contracts.data[state.selectedContractsId][0]
    }
    return result;
  },
  selectedAlert: state => {
    const result = state.alerts.data.find(alert => alert.id === state.selectedAlertId);
    return result;
  },
  filteredContracts: state => query => {
    const contracts = _.uniqBy(_.flatten(_.values(state.contracts.data)), 'id');
    return contracts.filter(contract => contract.product.toLowerCase().includes(query.toLowerCase()));
  },
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
  selectAlertOption(state, {optionKey, value}) {
    state.alertOptions[optionKey].value = value;
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
