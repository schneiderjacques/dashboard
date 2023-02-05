<template>
  <p class="text-red-300 text-4xl">Bonjour et bienvenue sur la page home</p>
</template>

<script>
export default {
    name: "HomeVue",
    mounted(){
        axios.get('/user').then((response) => {
            console.log(response);
        })

    }
}
</script>

<style scoped>

</style>
