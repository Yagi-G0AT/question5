import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const config = {
 apiKey: 'AIzaSyCWSJegxUcovv6Ox1wAFCtRyY4sgK1LOzQ',
 projectId: 'test-2e2da',
 authDomain: 'authDomain.firebaseapp.com',
 databaseURL: 'https://databaseURL.firebaseio.com',
 storageBucket: 'storageBucket.appspot.com',
}

firebase.initializeApp(config); 17.

export default firebase;
new Vue({
 router,
 store,
 render: h => h(App)
}).$mount('#app')