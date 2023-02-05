<template>
    <img class="absolute block -z-[1px] bottom-0 left-0" src="../../../public/connexion/bg.png" alt="rayon gris">
    <div class="flex justify-center items-center w-full h-screen bg-primary-background">
        <div class="w-100 relative h-auto bg-white py-3.5 px-4 shadow-card flex flex-col items-center">
            <div class="flex items-center py-2 mt-4">
                <img src="/logo.svg">
                <h2 class="ml-3 text-primary-color font-semi-bold uppercase ">Materio</h2>
            </div>
            <div class="flex flex-col w-full py-4 px-4">
                <p class="text-2xl font-semibold text-primary-color mb-2">Welcome to Materio! 👋🏻</p>
                <p class="mb-2 text-subtitle-color text-[14px] font-normal leading-6">Please sign-in to your account and
                    start the adventure</p>
            </div>
            <div class="px-[20px] py-[16px] w-full text-subtitle-color">
                    <div class="relative mb-4">
                        <input id="email" name="email" type="text" required
                               class="w-full h-[56px] text-current rounded-[5px] pl-2.5 text-gray-900 placeholder-transparent border-[1px] border-gray-300 peer focus:outline-none focus:border-primary-base focus:placeholder-primary-color focus:placeholder-opacity-50"
                               placeholder="john@doe.com" v-model="email"
                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                        <label for="email"
                               class="absolute text-current
                           bg-white cursor-text left-2.5 px-1
                           text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 transform -translate-y-1/2 peer-focus:-top-0 peer-focus:text-primary-base peer-focus:text-sm">Email
                        </label>
                    </div>
                    <div class="relative mb-2">
                        <input id="password" name="password" :type="showPassword ? 'text' : 'password'"
                               pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,20}$"
                               class="w-full h-[56px] rounded-[5px] pl-2.5 tracking-widest text-gray-900 placeholder-transparent border-[1px] border-gray-300 peer focus:outline-none focus:border-primary-base focus:placeholder-primary-color focus:placeholder-opacity-50 text-current"
                               placeholder="***********" v-model="password" required/>
                        <label for="password"
                               class="absolute text-current
                           bg-white cursor-text left-2.5 px-1
                           text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 transform -translate-y-1/2 peer-focus:-top-0 peer-focus:text-primary-base peer-focus:text-sm">Password
                        </label>
                        <button type="button" aria-label="append icon" @click="showPassword = !showPassword"
                                class="absolute text-current top-1/2 transform -translate-y-1/2 right-[10px] h-[24px] w-[24px] cursor-pointer outline-none">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                 v-if="!showPassword"
                                 class="fill-current">
                                <path
                                    d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                 v-if="showPassword"
                                 class="fill-current">
                                <path
                                    d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
                            </svg>
                        </button>
                    </div>


                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-center relative">
                            <input name="remember" type="checkbox"
                                   class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <label for="remember" class="text-current ml-2 font-medium ">Remember Me</label>
                        </div>
                        <router-link to="/inscription">
                            <a class="text-anchor-base font-medium text-[14px] leading-6">Forgot Password?</a>
                        </router-link>
                    </div>
                    <div v-show="errors.length !== 0" class="rounded-md bg-red-50 p-4 shadow-2xl mt-4 border-[1px] border-red-600 border-solid">
                        <div class="flex">
                            <div class="ml-3">
                                <div class="text-sm text-red-700">
                                    <ul role="list" class="list-disc pl-5">
                                        <li v-for="error in errors"> {{ error }} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="login" @click="connect"
                           class="w-full h-[38px] uppercase bg-theme-primary text-white mt-5 font-medium tracking-wide leading-normal
                indent-1 rounded-[5px] hover:shadow-xl hover:opacity-90 cursor-pointer"
                    />
                <div class="flex justify-around items-center mt-4">
                    <span class="font-normal -tracking-tight text-theme-on-surface">New on our platform?</span>
                    <span class="cursor-pointer text-theme-primary">Create an account</span>
                </div>
                <div class="flex items-center justify-between w-full mt-4">
                    <hr class="block flex-[1_1_100%] ">
                    <span class="mx-[16px] text-sm">or</span>
                    <hr class="block flex-[1_1_100%] ">
                </div>
                <div class="flex justify-around items-center py-4 px-6 mt-2">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img" tag="i"
                             class=""
                             width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="#4267B2"
                                  d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img" tag="i"
                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                             width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="rgb(29, 161, 242)"
                                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img" tag="i"
                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                             width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="rgb(39, 39, 39)"
                                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img" tag="i"
                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                             width="2em"
                             height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="rgb(219, 68, 55)"
                                  d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"></path>
                        </svg>
                    </button>
                </div>


            </div>
        </div>
    </div>

</template>
<script>
import store from "../store/index";
import setAuthHeaders from "@/utils/setAuthHeaders";
export default {
    name: "ConnexionVue",
    data() {
        return {
            showPassword: false,
            email: '',
            password: '',
            errors: [] //contain errors
        }
    },
    methods: {
        connect() {
            if (this.email.length === 0 || new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/).test(this.email)) {
                this.errors.push("\nVeuillez renseigner votre email correctement");
                return;
            }
            axios.post('api/login', {
                email: this.email.trim(),
                password: this.password
            })
                .then((response) => {
                    return new Promise((resolve) => {
                        localStorage.setItem('token', response.data.token);
                        setAuthHeaders(response.data.token);
                        resolve();
                    });
                })
                .then(() => {
                    this.$router.push({name: 'home'});
                });
        }
    }
}
</script>

<style scoped>

</style>
