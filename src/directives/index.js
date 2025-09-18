import Vue from 'vue';
import error from './modules/error.js';

function importDirectives() {
  Vue.directive('error', error);
}

export default importDirectives;