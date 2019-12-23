<template>
  <header class=" bg-background-tertiary flex">
<!--here i would like to add a button to switch the theme-->
<div class="m-2 flex">

    <div class=" mx-6 justify-start mx-2 border-2 border-dotted rounded border-border-color-primary">
             <h1 class="m-3 my-6 text">❤ Website prototype ❤</h1>

    </div>
    <p> --nav barre--</p>

</div>


    <!--BOUTTON POUR CHANGER LE THEME ICI-->
                <picture @click.prevent="toggleTheme" class="mx-2 mr-6 cursor-pointer" v-if="this.$store.state.theme === 'theme-light'">
                    <img
                            class=" h-8 w-8 fill-current fill-text-red-600 hover:text-green-600"
                            src="../assets/img/logo_light_mod.svg"
                            title="Switch for the light theme"
                            alt="button light theme ">
                </picture>
                <picture @click.prevent="toggleTheme" class="mx-2 mr-6 cursor-pointer" v-else>
                    <img
                            class="h-8 w-8  fill-current fill-text-red-600 hover:text-green-600  "
                            src="../assets/img/logo_dark_mod.svg"
                            alt="theme dark button"
                            title=" dark for the theme">
                </picture>
  </header>
</template>

<script>

  // import {state} from "../store/index"
  // export var theme = $store.state.theme ;

  export default {
    name: "NavBarre",
    components: {},

    methods: {
      toggleTheme() {
        this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
        this.$store.state.theme = this.theme;
        // if (typeof window !== 'undefined') {
        // localStorage.setItem('theme', this.theme)
        // return this.$store.getters.ChangeTheme;
        // this.$store.state.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
        // this.$store.state.theme = this.theme;
        // if (typeof window !== 'undefined') {
        //     localStorage.setItem('theme', this.theme)
        // };

        /* Pour utiliser la fonction en getters directement depuis l'index*/
        // return this.$store.state.theme
      }
    },
    //  created() {
    //     if (typeof window !== 'undefined') {
    //         this.theme = localStorage.getItem('theme') || 'theme-light'
    //     };
    // },

  }

</script>
<style scoped>

</style>
