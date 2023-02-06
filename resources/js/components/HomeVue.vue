<template>
    <div class="flex">
        <SideBarVue></SideBarVue>
        <HeaderVue></HeaderVue>
    </div>
</template>

<script>
import SideBarVue from "@/components/SideBarVue.vue";
import HeaderVue from "@/components/HeaderVue.vue";
export default {
    name: "HomeVue",
    components: {
        SideBarVue,
        HeaderVue,
    },
    mounted() {
        /*axios.get('/user').then((response) => {
            console.log(response);
        })*/
    },
    methods: {
        deco() {
            localStorage.removeItem("token");
            this.$router.go();
        },
    },
};
</script>

<style scoped></style>
