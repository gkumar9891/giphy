import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css';
import axios from 'axios';
import store from './store/main.js';

axios.defaults.baseURL = import.meta.env.VITE_GIFY_BASE_URL; 

createApp(App).use(store).mount('#app');