import { createRouter, createWebHistory } from "vue-router";

import HomeVue from "../components/HomeVue.vue";
import ConnexionVue from "../components/ConnexionVue.vue";
import InscriptionVue from "../components/InscriptionVue.vue";
import AccountSettingsVue from "../components/AccountSettingsVue.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeVue,
        meta: {
            requiresMenu: true,
        },
        beforeEnter: (to, form, next) => {
            axios
                .get("/api/authenticated")
                .then(() => {
                    return next();
                })
                .catch(() => {
                    return next("/connexion");
                });
        },
    },
    {
        path: "/connexion",
        name: "connexion",
        component: ConnexionVue,
        meta: {
            requiresMenu: false,
        },
    },
    {
        path: "/account-settings",
        name: "account-settings",
        component: AccountSettingsVue,
        meta: {
            requiresMenu: true,
        },
    },
    {
        path: "/inscription",
        name: "inscription",
        component: InscriptionVue,
        meta: {
            requiresMenu: false,
        },
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
