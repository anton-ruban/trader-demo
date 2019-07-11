import Vue from 'vue';
// initial state
const state = {
  isOpenSettingsDialog: false,
  isOpenChartSettingsDialog: false,
  isOpenPlatformTradingSetupDialog: false,
  settings: {
    platform: {
      label: '平台',
      tradingClickMode: "one_click",
    },
    region: {
      label: '区域',
      options: {}
    },
    trading_products: {
      label: 'Trading Products',
      options: {},
    },
    chart: {
      label: '图表',
      options: {}
    },
    notification: {
      label: '通知',
      options: {
        grouping: {
          items: ['单独显示', '分组显示'],
          value: '单独显示'
        },
        email: ''
      }
    },
    contact: {
      label: '联系方式',
      options: {}
    }
  }
}

// getters
const getters = {
  tradingClickMode: state => {
    return state.settings.platform.tradingClickMode;
  },
}

// actions
const actions = {
}

// mutations
const mutations = {
  toggleSettingsDialog(state, isOpen) {
    state.isOpenSettingsDialog = isOpen;
  },
  toggleChartSettingsDialog(state, isOpen) {
    state.isOpenChartSettingsDialog = isOpen;
  },
  togglePlatformTradingSetupDialog(state, isOpen) {
    state.isOpenPlatformTradingSetupDialog = isOpen;
  },
  updateTradingClickMode(state, clickMode) {
    Vue.set(state.settings.platform, 'tradingClickMode', clickMode);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
