/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

import Vue from 'vue';
import App from '../vue/App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
})
