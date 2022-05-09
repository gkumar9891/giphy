import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.giphy.com/v1/'; 

createApp(App).mount('#app')
