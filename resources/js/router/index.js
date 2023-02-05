import {createRouter, createWebHistory} from 'vue-router';

import HomeVue from '../components/HomeVue.vue';
import ConnexionVue from "../components/ConnexionVue.vue";
import InscriptionVue from "../components/InscriptionVue.vue";
import store from "../store";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.common['Accept'] = 'application/json';
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeVue,
        meta: {requiresAuth: true}
    },
    {
        path: '/connexion',
        name: 'connexion',
        component: ConnexionVue
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
router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
        axios.get('/api/authenticated').then(() => { //Réussie
            next();
        }).catch(() => {
            next({name: 'connexion'})
        })
    } else {
        next();
    }
})
export default router;
