// initial state
const state = {
  isOpenContractDialog: false,
  isOpenWatchlistPicker: false,
  watchlist: {
    selectedWatch: null,
    standardWatchlist: [
      {
        id: 'watch0',
        type: 'fu',
        title: '数字币期货',
        contractId: 'contracts1'
      }, {
        id: 'watch1',
        type: 'fx',
        title: '数字币现货',
        contractId: 'contracts2'
      }, {
        id: 'watch2',
        type: 'fu',
        title: '商品期货',
        contractId: 'contracts3'
      },
    ],
    recent: [
      {
        id: 'watch1',
        type: 'fx',
        title: '数字币现货',
        contractId: 'contracts2'
      }, {
        id: 'watch2',
        type: 'fu',
        title: '商品期货',
        contractId: 'contracts3'
      },
    ]
  }
}

// getters
const getters = {
  selectedStandardWatch: state => {
    return state.watchlist.selectedWatch;
  }
}

// actions
const actions = {
  selectWatch ({ commit }, watch) {
    commit('selectWatch', watch);

    if ((!watch || !watch.children || watch.children.length === 0)) {
      commit('contracts/selectContractsId', watch.contractId, { root: true })
      commit('toggleWatchlistPicker', false);
    }
  }
}

// mutations
const mutations = {
  selectWatch(state, watch) {
    state.watchlist.selectedWatch = watch;
  },
  toggleWatchlistPicker(state, isOpen) {
    state.isOpenWatchlistPicker = isOpen;

    if (!isOpen) {
      state.watchlist.selectedWatch = null;
    }
  },
  toggleOpenContractDialog(state, isOpen) {
    state.isOpenContractDialog = isOpen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
