import Vue from 'nativescript-vue'
import App from './components/App.vue'


import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

//TNSFontIcon.debug = true;

TNSFontIcon.paths = {
	fa: './assets/font-awesome.css',
};
TNSFontIcon.loadCss();


import store from './store'


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
