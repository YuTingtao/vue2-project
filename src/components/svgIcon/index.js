import Vue from 'vue'
import SvgIcon from './index.vue'

Vue.component('svg-icon', SvgIcon)

const req = require.context('@/assets/icon', true, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);
