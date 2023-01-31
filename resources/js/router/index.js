import { createRouter, createWebHistory } from 'vue-router';

import HomeVue from '../components/HomeVue.vue';
import ConnexionVue from "../components/ConnexionVue.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeVue
    },
    {
        path: '/connexion',
        name: 'connexion',
        component: ConnexionVue
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
export default router;
