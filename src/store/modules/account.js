// initial state
const state = {
  isOpenRechargeDialog: false,
  isOpenWithdrawDialog: false,
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  toggleRechargeDialog(state, isOpen) {
    state.isOpenRechargeDialog = isOpen;
  },
  toggleWithdrawDialog(state, isOpen) {
    state.isOpenWithdrawDialog = isOpen;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
