import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import firebase from 'firebase/app';

// 自訂元件
import timestampFilter from './filters/timestamp.js';

Vue.filter('timeFormat', timestampFilter);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp({
	apiKey: 'AIzaSyCDZdydIbVWtMRNgCLHwKSU7cG6x2k7KRI',
	authDomain: 'portfolio-cart.firebaseapp.com',
	databaseURL: 'https://portfolio-cart.firebaseio.com',
	projectId: 'portfolio-cart',
	storageBucket: 'portfolio-cart.appspot.com',
	messagingSenderId: '586318803995',
	appId: '1:586318803995:web:ee7a09468e9eed3754b4be',
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
