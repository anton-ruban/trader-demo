// initial state
const state = {
  isOpenTradingPanelDialog: false,
  isOpenConfirmOrderDialog: false,
  isAddStopPanel: false,
  isShowDetails: false,
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  toggleConfirmOrderDialog(state, isOpen) {
    state.isOpenConfirmOrderDialog = isOpen;
  },
  toggleTradingPanelDialog(state, isOpen) {
    state.isOpenTradingPanelDialog = isOpen;
  },
  toggleAddStopPanel(state, isOpen) {
    state.isAddStopPanel = isOpen;
  },
  toggleShowDetails(state, isOpen) {
    state.isShowDetails = isOpen;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
