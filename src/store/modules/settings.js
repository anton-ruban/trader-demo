// initial state
const state = {
  isOpenSettingsDialog: false,
  selectedCategoryKey: 'platform',
  settings: {
    platform: {
      label: '平台',
      options: {
      }
    },
    region: {
      label: '区域',
      options: {}
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
}

// actions
const actions = {
}

// mutations
const mutations = {
  toggleSettingsDialog(state, isOpen) {
    state.isOpenSettingsDialog = isOpen;
  },
  selectSettingsCategory(state, categoryKey) {
    state.selectedCategoryKey = categoryKey;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
