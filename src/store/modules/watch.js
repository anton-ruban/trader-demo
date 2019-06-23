// initial state
const state = {
  isOpenContractDialog: false,
  isOpenEditPriceAlert: false,
  isOpenWatchlistPicker: false,
  watchlist: {
    selectedWatch: null,
    standardWatchlist: [
      {
        id: 'watch0',
        type: 'fu',
        title: '数字币期货',
        children: [
          {
            id: 'watch13',
            type: 'fu',
            title: '商品期货',
            contractId: 'contracts1'
          },
          {
            id: 'watch14',
            type: 'fu',
            title: '货币期货',
            contractId: 'contracts2'
          },
        ]
      }, {
        id: 'watch1',
        type: 'fx',
        title: '数字币现货',
        children: [
          {
            id: 'watch7',
            type: 'fx',
            title: 'FX Top 10',
            contractId: 'contracts3'
          },
          {
            id: 'watch11',
            type: 'fx',
            title: 'FX Top 20',
            contractId: 'contracts4'
          }
        ]
      }, {
        id: 'watch2',
        type: 'fu',
        title: '商品期货',
        children: [
          {
            id: 'watch13',
            type: 'fu',
            title: '商品期货',
            contractId: 'contracts5'
          },
          {
            id: 'watch14',
            type: 'fu',
            title: '货币期货',
            contractId: 'contracts6'
          },
        ]
      },
    ],
    recent: [
      {
        id: 'watch1',
        type: 'fx',
        title: '数字币现货',
        contractId: 'contracts1'
      }, {
        id: 'watch2',
        type: 'fu',
        title: '商品期货',
        contractId: 'contracts2'
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
  },
  toggleEditPriceAlert(state, isOpen) {
    state.isOpenEditPriceAlert = isOpen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
