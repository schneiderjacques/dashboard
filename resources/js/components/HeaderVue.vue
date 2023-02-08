<template>
    <div
        class="h-[64px] mt-0 transform translate-y-0 left-[260px] right-0 bg-primary-background absolute"
    >
        <div class="w-full h-full my-auto mx-auto flex items-center">
            <div class="flex items-center justify-between mr-[24px] ml-[24px]">
                <div
                    class="flex justify-between items-center flex-auto border-solid border-gray-300 focus:border-primary-base border-[1px] h-[40px] rounded-[28px]"
                >
                    <div
                        class="h-full w-full px-[24px] flex justify-between items-center"
                    >
                        <span
                            aria-hidden="true"
                            class="text-gray-500 cursor-pointer"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                role="img"
                                aria-hidden="true"
                                width="20"
                                height="20"
                                class="fill-current text-current"
                            >
                                <path
                                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                                ></path></svg
                        ></span>
                        <input
                            type="text"
                            class="border-none outline-none bg-primary-background h-full focus:outline-none focus:border-none border-transparent focus:border-transparent focus:ring-0"
                        />
                    </div>
                </div>
            </div>
            <div class="flex-grow-[1]"></div>
            <a class="text-anchor-base cursor-pointer w-[48px]">
                <span class="flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-hidden="true"
                        class="fill-subtitle-color w-[24px] h-[24px]"
                    >
                        <path
                            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                        ></path>
                    </svg>
                </span>
            </a>
            <button class="text-anchor-base cursor-pointer">
                <span
                    class="w-[48px] h-[48px] flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-hidden="true"
                        class="fill-subtitle-color w-[24px] h-[24px]"
                    >
                        <path
                            d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
                        ></path>
                    </svg>
                </span>
            </button>
            <button class="text-anchor-base cursor-pointer">
                <span
                    class="w-[48px] h-[48px] flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-hidden="true"
                        class="fill-subtitle-color w-[24px] h-[24px]"
                    >
                        <path
                            d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z"
                        ></path>
                    </svg>
                </span>
            </button>
            <div class="ml-[16px] mr-[16px] cursor-pointer">
                <img
                    class="w-[40px] rounded-full"
                    src="../../../public/connexion/profile.png"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderVue",
};
</script>

<style scoped></style>
