import { createRouter, createWebHistory } from 'vue-router';

import HomeVue from '../components/HomeVue.vue';
import ConnexionVue from "../components/ConnexionVue.vue";
import store from "../store";
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
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token){
        next({name: 'connexion'});
    } else {
        next();
    }
})
export default router;
