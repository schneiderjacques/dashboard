<template>
    <div class="h-[64px] mt-0 transform translate-y-0 left-[260px] right-0 bg-primary-background absolute">
        <div class="w-full h-full my-auto mx-auto flex items-center justify-between">
            <div class="flex items-center justify-between mr-[24px] ml-[24px]">
                <div class="flex justify-between items-center flex-auto border-solid border-primary-color border-[1px] h-[40px] rounded-[28px]">
                    <div class="h-full w-full px-[24px] flex justify-between items-center">

                        <span aria-hidden="true" class="v-icon notranslate theme--light"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" width="20" height="20"
                            class="v-icon__svg"><path
                            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg></span>
                        <input type="text" class="border-none outline-none ml-2 bg-primary-background h-[10px] focus:outline-none focus:border-none">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderVue"
}
</script>

<style scoped>

</style>
