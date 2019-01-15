import Vue from 'vue'
import Vuex from 'vuex'
import watch from './modules/watch'
import others from './modules/others'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    watch,
    others
  },
})
