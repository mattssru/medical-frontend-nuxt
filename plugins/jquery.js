// plugins/jquery.js
import Vue from "vue";
import jQuery from "jquery";

global.jQuery = jQuery;
global.$ = jQuery;

Vue.prototype.$jQuery = jQuery;
Vue.prototype.$ = jQuery;
