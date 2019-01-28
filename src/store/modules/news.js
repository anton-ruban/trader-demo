// initial state
const state = {
  isOpenNewsProviderPicker: false,
  selectedProviderId: null,
  selectedNewsItemId: null,
  providers: [
    {
      id: "provider0",
      name: 'NewsEdge Corporate',
      type: 'edge',
    }, {
      id: "provider1",
      name: 'NewsEdge Macro',
      type: 'edge',
    }, {
      id: "provider2",
      name: 'RANsquawk',
      type: 'ran',
    }
  ],
  news: [
    {
      id: 'news0',
      timestamp: 1515594600000,
      title: "Facebook has 'new tools' against EU election meddling",
      providerId: "provider0",
      detail: 'Britain\'s long goodbye to the European Union often seems to be spoken in unintelligible code.<br/>\
      Most know the process as Brexit -- a child of the term Grexit that was coined by economists when it looked like debt-laden Greece would exit the eurozone in 2012.<br/>\
      Greece stuck around but Britain is leaving the EU thanks to a 2016 referendum that soon spawned its own lexicon.<br/>\
      Here is a look at some of the terms -- both real and invented -- politicos are using to describe a split that could very well run past its March 29 deadline.'
    },
    {
      id: 'news1',
      timestamp: 1515594600000,
      title: "Hard, soft and BRINO: the Brexit glossary",
      providerId: "provider1",
      detail: 'Britain\'s long goodbye to the European Union often seems to be spoken in unintelligible code.\
      Most know the process as Brexit -- a child of the term Grexit that was coined by economists when it looked like debt-laden Greece would exit the eurozone in 2012.\
      Greece stuck around but Britain is leaving the EU thanks to a 2016 referendum that soon spawned its own lexicon.\
      Here is a look at some of the terms -- both real and invented -- politicos are using to describe a split that could very well run past its March 29 deadline.'
    },
    {
      id: 'news2',
      timestamp: 1515594600000,
      title: "Siemens, Alstom make new EU concessions to save merger",
      providerId: "provider2",
      detail: 'Germany\'s Siemens and France\'s Alstom have made new concessions in an effort to convince the European Commission to approve their tie-up that would create a rail manufacturing giant, Alstom said Monday.\
      Alstom said in a statement that it and Siemens had "decided to further modify the remedies so as to answer the concerns raised" by the Commission over the deal\'s impact on competition.'
    },
  ]
}

// getters
const getters = {
  getProviderById: state => id => {
    return state.providers.find(provider => provider.id === id);
  },
  selectedNews: state => {
    if (!state.selectedProviderId) return state.news;

    return state.news.filter(newsItem => newsItem.providerId === state.selectedProviderId);
  },
  selectedNewsItem: state => {
    
    let result = state.news.find(newsItem => newsItem.id === state.selectedNewsItemId);

    if (!result) return state.news[0];
    return result;
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  toggleNewsProviderPicker(state, isOpen) {
    state.isOpenNewsProviderPicker = isOpen;
  },
  selectProvider(state, providerId) {
    state.selectedProviderId = providerId;
  },
  selectNewsItem(state, newsItemId) {
    state.selectedNewsItemId = newsItemId;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
