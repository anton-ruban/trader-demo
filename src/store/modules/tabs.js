// initial state
const state = {
  selectedWatchDetailTabIndex: 0,
  watchDetailTabs: [
    '概览',
    '图表',
    '期权链'
  ],
  selectedWatchTabIndex: 0,
  watchTabs: [
    '观察列表', '提示'
  ]
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  selectWatchDetailTab(state, index) {
    state.selectedWatchDetailTabIndex = index;
  },
  selectWatchTab(state, index) {
    state.selectedWatchTabIndex = index;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
