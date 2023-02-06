<template>
    <div
        class="h-screen top-0 transform translate-x-0 w-[260px] max-h-full bg-[#f4f5fa] fixed"
    >
        <router-link
            to="/"
            class="pr-[20px] pl-[24px] pb-[8px] pt-[20px] flex items-center flex-[1_1_auto]"
        >
            <img
                class="h-[30px] w-[30px] mr-[12px]"
                src="../../../public/logo.svg"
            />
            <h2
                class="uppercase text-primary-color text-xl font-bold tracking-[.3px] flex-[1_1_auto]"
            >
                materio
            </h2>
        </router-link>
        <div class="pr-[20px] block py-[8px] static">
            <router-link
                to="/"
                class="flex items-center outline-none px-[16px] cursor-pointer bg-gradient-to-r from-[#c48eff] to-primary-base rounded-r-[32px] shadow-[0_5px_10px_-4px_rgb(94_86_105_/_42%)] text-white caret-white h-[44px] mt-[0.375rem] min-h-[44px] pl-[22px]"
            >
                <div
                    class="inline-flex min-w-[24px] my-[12px] mr-[12px] text-current caret-current cursor-pointer"
                >
                    <span
                        data-v-6b6ad184=""
                        aria-hidden="true"
                        class="m-auto inline-flex text-[24px] justify-center relative select-none align-middle"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            role="img"
                            aria-hidden="true"
                            class="w-[24px] h-[24px] fill-current"
                        >
                            <path
                                d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
                            ></path></svg
                    ></span>
                </div>
                <div
                    data-v-6b6ad184=""
                    class="leading-[1.2] text-base flex-[1_1_100%] overflow-hidden overflow-ellipsis whitespace-nowrap text-current caret-current"
                >
                    Dashboard
                </div>
            </router-link>

            <router-link
                to="/"
                class="flex items-center outline-none px-[16px] cursor-pointer text-primary-color caret-white h-[44px] mt-[0.375rem] min-h-[44px] pl-[22px] rounded-r-[32px] hover:bg-primary-color-opac"
            >
                <div
                    class="inline-flex min-w-[24px] my-[12px] mr-[12px] text-current caret-current cursor-pointer"
                >
                    <span
                        data-v-6b6ad184=""
                        aria-hidden="true"
                        class="m-auto inline-flex text-[24px] justify-center relative select-none align-middle"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            role="img"
                            aria-hidden="true"
                            class="w-[24px] h-[24px] fill-current"
                        >
                            <path
                                d="M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M10 6A2 2 0 0 1 12 8A2 2 0 0 1 10 10A2 2 0 0 1 8 8A2 2 0 0 1 10 6M17 12C16.84 12 16.76 12.08 16.76 12.24L16.5 13.5C16.28 13.68 15.96 13.84 15.72 14L14.44 13.5C14.36 13.5 14.2 13.5 14.12 13.6L13.16 15.36C13.08 15.44 13.08 15.6 13.24 15.68L14.28 16.5V17.5L13.24 18.32C13.16 18.4 13.08 18.56 13.16 18.64L14.12 20.4C14.2 20.5 14.36 20.5 14.44 20.5L15.72 20C15.96 20.16 16.28 20.32 16.5 20.5L16.76 21.76C16.76 21.92 16.84 22 17 22H19C19.08 22 19.24 21.92 19.24 21.76L19.4 20.5C19.72 20.32 20.04 20.16 20.28 20L21.5 20.5C21.64 20.5 21.8 20.5 21.8 20.4L22.84 18.64C22.92 18.56 22.84 18.4 22.76 18.32L21.72 17.5V16.5L22.76 15.68C22.84 15.6 22.92 15.44 22.84 15.36L21.8 13.6C21.8 13.5 21.64 13.5 21.5 13.5L20.28 14C20.04 13.84 19.72 13.68 19.4 13.5L19.24 12.24C19.24 12.08 19.08 12 19 12H17M10 13C7.33 13 2 14.33 2 17V20H11.67C11.39 19.41 11.19 18.77 11.09 18.1H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.43 14.9 10.87 14.94 11.3 15C11.5 14.36 11.77 13.76 12.12 13.21C11.34 13.08 10.6 13 10 13M18.04 15.5C18.84 15.5 19.5 16.16 19.5 17.04C19.5 17.84 18.84 18.5 18.04 18.5C17.16 18.5 16.5 17.84 16.5 17.04C16.5 16.16 17.16 15.5 18.04 15.5Z"
                            ></path></svg
                    ></span>
                </div>
                <div
                    data-v-6b6ad184=""
                    class="leading-[1.2] text-base flex-[1_1_100%] overflow-hidden overflow-ellipsis whitespace-nowrap text-current caret-current"
                >
                    Acount Settings
                </div>
            </router-link>

            <router-link
                @click="isAccordionOpen = !isAccordionOpen"
                to="/"
                :aria-expanded="isAccordionOpen"
                class="flex items-center outline-none px-[16px] cursor-pointer text-primary-color caret-white h-[44px] mt-[0.375rem] min-h-[44px] pl-[22px] rounded-r-[32px] hover:bg-primary-color-opac"
            >
                <div
                    class="inline-flex min-w-[24px] my-[12px] mr-[12px] text-current caret-current cursor-pointer"
                >
                    <span
                        data-v-6b6ad184=""
                        aria-hidden="true"
                        class="m-auto inline-flex text-[24px] justify-center relative select-none align-middle"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            role="img"
                            aria-hidden="true"
                            class="w-[24px] h-[24px] fill-current"
                        >
                            <path
                                d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                            ></path>
                        </svg>
                    </span>
                </div>
                <div
                    data-v-6b6ad184=""
                    class="leading-[1.2] text-base flex-[1_1_100%] overflow-hidden overflow-ellipsis whitespace-nowrap text-current caret-current"
                >
                    Pages
                </div>
                <div
                    class="ml-[16px] -rotate-90 transition-all"
                    :class="{
                        '-rotate-90': !isAccordionOpen,
                        'rotate-0': isAccordionOpen,
                    }"
                >
                    <span aria-hidden="true" class=""
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            role="img"
                            aria-hidden="true"
                            class="w-[24px] h-[24px] fill-current"
                        >
                            <path
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            ></path></svg
                    ></span>
                </div>
            </router-link>

            <transition
                enter-active-class="transition ease-out duration-1000"
                enter-from-class="h-0"
                enter-to-class="h-auto"
                leave-active-class="transition ease-in duration-800"
                leave-from-class="h-auto"
                leave-to-class="h-0"
            >
                <div
                    class="overflow-hidden"
                    v-bind:style="{ height: isAccordionOpen ? 'auto' : '0' }"
                >
                    <router-link
                        to="/"
                        class="flex items-center outline-none px-[16px] cursor-pointer text-primary-color caret-white h-[44px] mt-[0.375rem] min-h-[44px] pl-[22px] rounded-r-[32px] hover:bg-primary-color-opac"
                    >
                        <div
                            class="inline-flex min-w-[24px] my-[12px] mr-[12px] text-current caret-current cursor-pointer"
                        >
                            <span
                                data-v-6b6ad184=""
                                aria-hidden="true"
                                class="m-auto inline-flex text-[24px] justify-center relative select-none align-middle"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    aria-hidden="true"
                                    class="w-[14px] h-[14px] fill-current"
                                >
                                    <path
                                        d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                    ></path></svg
                            ></span>
                        </div>
                        <div
                            data-v-6b6ad184=""
                            class="leading-[1.2] text-base flex-[1_1_100%] overflow-hidden overflow-ellipsis whitespace-nowrap text-current caret-current"
                        >
                            Login
                        </div>
                    </router-link>
                    <router-link
                        to="/"
                        class="flex items-center outline-none px-[16px] cursor-pointer text-primary-color caret-white h-[44px] mt-[0.375rem] min-h-[44px] pl-[22px] rounded-r-[32px] hover:bg-primary-color-opac"
                    >
                        <div
                            class="inline-flex min-w-[24px] my-[12px] mr-[12px] text-current caret-current cursor-pointer"
                        >
                            <span
                                data-v-6b6ad184=""
                                aria-hidden="true"
                                class="m-auto inline-flex text-[24px] justify-center relative select-none align-middle"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    aria-hidden="true"
                                    class="w-[14px] h-[14px] fill-current"
                                >
                                    <path
                                        d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                    ></path></svg
                            ></span>
                        </div>
                        <div
                            data-v-6b6ad184=""
                            class="leading-[1.2] text-base flex-[1_1_100%] overflow-hidden overflow-ellipsis whitespace-nowrap text-current caret-current"
                        >
                            Register
                        </div>
                    </router-link>
                    <router-link
                        to="/"
                        class="flex items-center outline-none px-[16px] cursor-pointer text-primary-color caret-white h-[44px] mt-[0.375rem] min-h-[44px] pl-[22px] rounded-r-[32px] hover:bg-primary-color-opac"
                    >
                        <div
                            class="inline-flex min-w-[24px] my-[12px] mr-[12px] text-current caret-current cursor-pointer"
                        >
                            <span
                                data-v-6b6ad184=""
                                aria-hidden="true"
                                class="m-auto inline-flex text-[24px] justify-center relative select-none align-middle"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    aria-hidden="true"
                                    class="w-[14px] h-[14px] fill-current"
                                >
                                    <path
                                        d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                    ></path></svg
                            ></span>
                        </div>
                        <div
                            data-v-6b6ad184=""
                            class="leading-[1.2] text-base flex-[1_1_100%] overflow-hidden overflow-ellipsis whitespace-nowrap text-current caret-current"
                        >
                            Error
                        </div>
                    </router-link>
                </div>
            </transition>

            <h2 class="mt-4px">Test</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBarVue",
    data() {
        return {
            isAccordionOpen: false,
        };
    },
};
</script>

<style scoped></style>
