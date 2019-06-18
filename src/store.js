import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMaximized: false
  },
  mutations: {
    changeMaximized (state, payload = false) {
      state.isMaximized = payload
    }
  },
  actions: {

  }
})
