// initial state
const state = {
  selectedWatchDetailTabIndex: 0,
  watchDetailTabs: [
    {name: '概览'},
    {name: '图表'},
    {name: '期权链'}
  ],
  selectedWatchTabIndex: 0,
  watchTabs: [
    {name: '观察列表'},
    // {name: '提示'}
  ],
  selectedBottomTabIndex: 0,
  bottomTabs: [
    {name: '仓位'},
    {
      name: '订单',
      selectedSubItemIndex: 0,
      subItems: [
        {name: '活动委托'},
        {name: '已成交'},
        {name: '委托历史'}
      ]
    }
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
  },
  selectBottomTab(state, index) {
    state.selectedBottomTabIndex = index;
    if (state.bottomTabs[index].subItems) {
      state.bottomTabs[index].selectedSubItemIndex = 0;
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
