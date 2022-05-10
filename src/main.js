import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css';
import axios from 'axios';
import store from './store/main.js';

axios.defaults.baseURL = 'https://api.giphy.com/v1/'; 

createApp(App).use(store).mount('#app');