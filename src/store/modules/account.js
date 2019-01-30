// initial state
const state = {
  isOpenRechargeDialog: false,
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
