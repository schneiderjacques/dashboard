import {createRouter, createWebHistory} from 'vue-router';

import HomeVue from '../components/HomeVue.vue';
import ConnexionVue from "../components/ConnexionVue.vue";
import InscriptionVue from "../components/InscriptionVue.vue";
import store from "../store";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeVue,
        beforeEnter: (to, form, next) => {
            axios.get('/api/authenticated').then(() => {
                return next()
            }).catch(() => {
                return next('/connexion');
            })
        }

    },
    {
        path: '/connexion',
        name: 'connexion',
        component: ConnexionVue,

    },
    {
        path: '/inscription',
        name: 'inscription',
        component: InscriptionVue
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
