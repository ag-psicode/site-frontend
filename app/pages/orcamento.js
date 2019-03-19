/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

import Vue from 'vue'
import Vuex from 'vuex'
import App from '../vue/App.vue'
import store from '../vue/store/EstimatesForm.js'

Vue.use(Vuex);
new Vue({
  el: '#app',
  store,
  render: h => h(App),
})