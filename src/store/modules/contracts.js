// initial state
const state = {
  selectedContractsId: 'contracts3',
  selectedContractId: 'contract5',
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
          product: 'BTC/USDT',
          sellAmount: 0,
          sellingPrice: 3574.19,
          buyingPrice: 3574.18,
          buyAmount: 0,
          marketPrice: 'TSE',
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
          sellingPrice: 116.31,
          buyingPrice: 116.19,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview2',
          description: 'ETH • USD'
        },
        {
          id: 'contract7',
          value: false,
          product: 'EOS/USDT',
          sellAmount: 0,
          sellingPrice: 2.4324,
          buyingPrice: 2.4323,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview3',
          description: 'EOS • USD'
        },
        {
          id: 'contract8',
          value: false,
          product: 'XRP/USDT',
          sellAmount: 0,
          sellingPrice: 0.3169,
          buyingPrice: 0.3168,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview4',
          description: 'XRP • USD'
        },
        {
          id: 'contract9',
          value: false,
          product: 'LTC/USDT',
          sellAmount: 0,
          sellingPrice: 32.73,
          buyingPrice: 32.71,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview5',
          description: 'LTC • USD'
        },
        {
          id: 'contract10',
          value: false,
          product: 'BCH/USDT',
          sellAmount: 0,
          sellingPrice: 128.12,
          buyingPrice: 128.11,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview6',
          description: 'BCH • USD'
        },
        {
          id: 'contract11',
          value: false,
          product: 'ETC/USDT',
          sellAmount: 0,
          sellingPrice: 4.2599,
          buyingPrice: 4.2598,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview7',
          description: 'ETC • USD'
        },
        {
          id: 'contract12',
          value: false,
          product: 'BSV/USDT',
          sellAmount: 0,
          sellingPrice: 74.92,
          buyingPrice: 74.91,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview8',
          description: 'BSV • USD'
        },
        {
          id: 'contract13',
          value: false,
          product: 'IOTA/USDT',
          sellAmount: 0,
          sellingPrice: 0.2888,
          buyingPrice: 0.2886,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview9',
          description: 'IOTA • USD'
        },
        {
          id: 'contract14',
          value: false,
          product: 'FT/USDT',
          sellAmount: 0,
          sellingPrice: 0.01556,
          buyingPrice: 0.01555,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview10',
          description: 'FT • USD'
        },
      ]
    }
  },
}

// getters
const getters = {
  selectedContract: state => {
    const result = state.contracts.data[state.selectedContractsId].find(contract => contract.id === state.selectedContractId);
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
