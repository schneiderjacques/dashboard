import './bootstrap';

import {createApp} from 'vue'

import App from './App.vue'
import router from './router/index'
import setAuthHeaders from "@/utils/setAuthHeaders";
if (localStorage.getItem('token')){
    setAuthHeaders(localStorage.getItem('token'));
} else {
    setAuthHeaders(false);
}
createApp(App).use(router).mount("#app")
