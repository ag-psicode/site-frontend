import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estimateForm: {
      name: '',
      phone: '',
      email: '',
      message: '',
      interests: [],
    }
  },
  mutations: {
    setField (state, { fieldName, value }) {
      state.estimateForm[fieldName] = value;
    }
  },
  actions: {
    setField ({ commit }, payload) {
      commit('setField', payload);
    }
  }
})