import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './styles/main.styl'
import iconStyles from './styles/icon.styl'
Vue.config.productionTip = false
Vue.use(styles,iconStyles);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
