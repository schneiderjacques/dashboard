<template>
    <!-- only show if meta requiresMenu is true  -->
    <div class="flex">
        <SideBarVue v-if="$route.meta.requiresMenu"></SideBarVue>
        <HeaderVue v-if="$route.meta.requiresMenu"></HeaderVue>
        <div
            class="ml-[260px] mt-[64px] w-[calc(100vw-260px)] h-[calc(100vh-64px)] bg-[#f4f5fa]"
        >
            <router-view />
        </div>
    </div>
</template>
<script>
import SideBarVue from "@/components/SideBarVue.vue";
import HeaderVue from "@/components/HeaderVue.vue";
export default {
    name: "App",
    components: { HeaderVue, SideBarVue },
};
</script>

<style scoped></style>
