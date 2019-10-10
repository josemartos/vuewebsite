import Vue from 'vue';
import App from './App.vue';

// General styles
import 'styles/main.scss';

new Vue({
  el: '#app',
  render: function(h) {
    return h(App);
  }
});
