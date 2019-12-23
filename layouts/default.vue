<template>
  <div class="bg-background-primary text-copy-primary" :class="theme">





    <NavBarre/>
    <nuxt/>
    <NavFooter/>


  </div>
</template>

<script>

  import NavFooter from "~/components/NavFooter.vue";
  import NavBarre from "~/components/NavBarre.vue";

  export default {
    // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
    // data() {
    //     return {
    //         theme: this.$store.state.theme,
    //     };
    // },
    computed:{
      theme(){
        return this.$store.state.theme;
      }
    },
    components: {NavFooter, NavBarre, }

  };
</script>








<!--&lt;!&ndash;    ================ This component are only for the test. This button work correctly ================ &ndash;&gt;-->
<!--<header class="p-6 border-yellow-500 border-2 rounded items-center flex justify-center">-->
<!--  <div class="text-center  text-red-700 p-2 bg-red-500 items-center justify-center leading-none lg:rounded-full flex lg:inline-flex"-->
<!--       role="alert">-->
<!--    <a class=" flex rounded-full bg-background-primary uppercase justify-center px-2 py-1 text-xs font-bold "-->
<!--       @click.prevent="toggleTheme">-->
<!--      <picture v-if="theme === 'theme-light'"><img class="m-2 h-8 w-8" src="../assets/img/logo_light_mod.svg"></picture>-->
<!--      <picture v-else="theme === 'theme-light'"> <img class="m-2 h-8 w-8" src="../assets/img/logo_dark_mod.svg"> </picture>-->
<!--    </a>-->
<!--  </div>-->
<!--</header>-->
<!--&lt;!&ndash;   ======================================================================================================= &ndash;&gt;-->

<!--&lt;!&ndash;JS FIILE&ndash;&gt;-->
<!--export default {-->
<!--data() {-->
<!--return {-->
<!--theme: "theme-dark"-->
<!--};-->
<!--},-->
<!--methods: {-->
<!--toggleTheme() {-->
<!--this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";-->
<!--}-->
<!--},-->
<!--components: {NavBarre, NavFooter,},-->

<!--};-->


