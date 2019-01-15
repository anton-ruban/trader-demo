import shop from '../../api/shop'

// initial state
const state = {
  watchlist: {
    selectedStandardWatchId: null,
    myWatchlists: [
      {
        id: 3,
        title: '我的观察列表',
      },
      {
        id: 4,
        title: 'Popular Products',
      }
    ],
    standardWatchlist: [
      {
        id: 0,
        type: 'fx',
        title: 'Forex',
        children: [
          {
            id: 7,
            type: 'fx',
            title: 'FX Top 10'
          },
          {
            type: 'fx',
            title: 'FX Top 20'
          }
        ]
      },
      {
        id: 1,
        type: 'cfd',
        title: 'CFDs by region',
        children: [
          {
            id: 8,
            type: 'cfd',
            title: 'CFDs Asian'
          },
          {
            id: 9,
            type: 'cfd',
            title: 'CFDs Australia'
          },
          {
            id: 10,
            type: 'cfd',
            title: 'CFDs Austria'
          }
        ]
      },
      {
        id: 2,
        type: 'bonds',
        title: 'Bonds Online',
      },
    ],
    recent: [
      {
        id: 5,
        type: 'bonds',
        title: 'Bonds Online',
      },
      {
        id: 6,
        type: 'cfd',
        title: 'CFDs Austria'
      }
    ]
  }
}

// getters
const getters = {
  selectedStandardWatch: state => {
    if (state.watchlist.selectedStandardWatchId === null) {
      return null;
    }

    return state.watchlist.standardWatchlist.find(item => item.id === state.watchlist.selectedStandardWatchId);
  }
}

// actions
const actions = {
  selectStandardWatchId ({ state, commit }, id) {
    const standardWatch = state.watchlist.standardWatchlist.find(item => item.id === id);

    if ((standardWatch && standardWatch.children && standardWatch.children.length > 0) || id === null) {
      commit('selectStandardWatchId', id);
    } else {
      commit('toggleWatchlistPicker', false);
    }
  }
}

// mutations
const mutations = {
  selectStandardWatchId (state, id) {
    state.watchlist.selectedStandardWatchId = id
  },
  toggleWatchlistPicker (state, isOpen) {
    state.isOpenWatchlistPicker = isOpen;

    if (!isOpen) {
      state.watchlist.selectedStandardWatchId = null;
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
