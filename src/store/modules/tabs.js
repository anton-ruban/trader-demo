// initial state
const state = {
  selectedWatchDetailTabIndex: 0,
  watchDetailTabs: [
    {name: '概览'},
    {name: '图表'},
    {name: '期权链'}
  ],
  selectedWatchTabIndex: 0,
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
  ],
  selectedNewsTabIndex: 0,
  newsTabs: [
    {name: '新闻'},
    {name: '市场分析'}
  ],
  selectedAccountTabIndex: 0,
  accountTabs: [
    {name: '安全设置'},
    {name: '个人中心'},
    {name: '投资组合'},
    {name: '历史报告'},
    {name: '其他'}
  ],
  selectedPersonCenterTabIndex: 0,
  personCenterTabs: [
    {id: 0, name: '总资产'},
    {id: 1, name: 'Huobi'},
    {id: 2, name: 'Fcoin'}
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
  selectPersonCenterTab(state, index) {
    state.selectedPersonCenterTabIndex = index;
  },
  selectWatchTab(state, index) {
    state.selectedWatchTabIndex = index;
  },
  selectBottomTab(state, index) {
    state.selectedBottomTabIndex = index;
    if (state.bottomTabs[index].subItems) {
      state.bottomTabs[index].selectedSubItemIndex = 0;
    }
  },
  selectBottomTabSubItem(state, {tabIndex, subItemIndex}) {
    state.selectedBottomTabIndex = tabIndex;
    if (state.bottomTabs[tabIndex].subItems) {
      state.bottomTabs[tabIndex].selectedSubItemIndex = subItemIndex;
    }
  },
  selectAccountTab(state, index) {
    state.selectedAccountTabIndex = index;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
