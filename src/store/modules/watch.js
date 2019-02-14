// initial state
const state = {
  isOpenContractDialog: false,
  isOpenWatchlistPicker: false,
  watchlist: {
    selectedWatch: null,
    myWatchlists: [
      {
        id: 'watch3',
        title: '我的观察列表',
        contractId: 'contracts3'
      },
      {
        id: 'watch4',
        title: 'Popular Products',
        contractId: 'contracts3'
      }
    ],
    standardWatchlist: [
      {
        id: 'watch12',
        type: 'fu',
        title: 'Precious Gold',
        contractId: 'contracts3'
      },
      {
        id: 'watch13',
        type: 'fu',
        title: 'USDT',
        contractId: 'contracts4'
      },
      {
        id: 'watch14',
        type: 'fu',
        title: 'BTC',
        contractId: 'contracts5'
      },
      {
        id: 'watch15',
        type: 'fu',
        title: 'ETH',
        contractId: 'contracts6'
      },
      {
        id: 'watch16',
        type: 'fu',
        title: 'BitMEX',
        contractId: 'contracts7'
      },
      {
        id: 'watch17',
        type: 'fu',
        title: 'FCoin',
        contractId: 'contracts8'
      },
      {
        id: 'watch18',
        type: 'fu',
        title: 'Digifinex',
        contractId: 'contracts9'
      },
      {
        id: 'watch19',
        type: 'fu',
        title: 'FX',
        contractId: 'contracts10'
      },
    ],
    recent: [
      {
        id: 'watch7',
        type: 'fx',
        title: 'FX Top 10',
        contractId: 'contracts1'
      },
      {
        id: 'watch11',
        type: 'fx',
        title: 'FX Top 20',
        contractId: 'contracts2'
      }
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
