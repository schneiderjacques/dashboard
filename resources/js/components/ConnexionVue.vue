<template>
    <div class="flex justify-center items-center w-full h-screen bg-primary-background">
        <div class="w-100 h-2/3 bg-white py-3.5 px-4 shadow-card flex flex-col items-center">
            <div class="flex items-center py-8">
                <img src="/logo.svg">
                <h2 class="ml-3 text-primary-color font-semibold ">Materio</h2>
            </div>
            <div class="flex flex-col w-full py-5 px-4">
                <p class="text-2xl font-semibold text-primary-color mb-2">Welcome to Materio! 👋🏻</p>
                <p class="mb-2 text-subtitle-color text-[14px] font-normal leading-6">Please sign-in to your account and start the adventure</p>
            </div>
            <div class="px-[20px] py-[16px] w-full text-subtitle-color">
                <div class="relative mb-4">
                    <input id="email" name="email" type="text"
                           class="w-full h-[56px] text-current rounded-[5px] pl-2.5 text-gray-900 placeholder-transparent border-[1px] border-gray-300 peer focus:outline-none focus:border-primary-base focus:placeholder-primary-color focus:placeholder-opacity-50"
                           placeholder="john@doe.com"/>
                    <label for="email"
                           class="absolute text-current
                           bg-white cursor-text left-2.5 px-1
                           text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 transform -translate-y-1/2 peer-focus:-top-0 peer-focus:text-primary-base peer-focus:text-sm">Email
                    </label>
                </div>
                <div class="relative mb-2">
                    <input id="password" name="password" :type="showPassword ? 'text' : 'password'"
                           class="w-full h-[56px] rounded-[5px] pl-2.5 tracking-widest text-gray-900 placeholder-transparent border-[1px] border-gray-300 peer focus:outline-none focus:border-primary-base focus:placeholder-primary-color focus:placeholder-opacity-50 text-current"
                           placeholder="***********"/>
                    <label for="password"
                           class="absolute text-current
                           bg-white cursor-text left-2.5 px-1
                           text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 transform -translate-y-1/2 peer-focus:-top-0 peer-focus:text-primary-base peer-focus:text-sm">Password
                    </label>
                    <button type="button" aria-label="append icon" @click="showPassword = !showPassword"
                            class="absolute text-current top-1/2 transform -translate-y-1/2 right-[10px] h-[24px] w-[24px] cursor-pointer outline-none">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" v-if="!showPassword"
                             class="fill-current">
                            <path
                                d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" v-if="showPassword"
                             class="fill-current">
                            <path
                                d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
                        </svg>
                    </button>
                </div>


                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-center relative">
                        <input name="remember" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        <label for="remember" class="text-current ml-2 font-medium ">Remember Me</label>
                    </div>
                    <router-link to="/inscription">
                        <a class="text-anchor-base font-medium text-[14px] leading-6">Forgot Password?</a>
                    </router-link>
                </div>



            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ConnexionVue",
    data() {
        return {
            showPassword: false
        }
    }
}
</script>

<style scoped>

</style>
