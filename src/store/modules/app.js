import * as types from '../types'

const state = {
  isMaximized: false
}

const mutations = {
  [types.APP_CHANGE_MAXIMIZED] (state, payload = false) {
    state.isMaximized = payload
  }
}

const actions = {}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
