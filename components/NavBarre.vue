<template>
  <header class="flex flex-wrap items-center justify-between align-baseline bg-background-tertiary  w-full">
    <div class=" mx-6 justify-start mx-2 border-2 border-dotted rounded border-border-color-primary">
      <h1 class="m-3 my-6 text">❤ Website prototype ❤</h1>
    </div>
    <div class="flex justify-end ">
      <div class="mx-12">
        <picture @click.prevent="toggleTheme" class="mx-2 mr-6 cursor-pointer"
                 v-if="this.$store.state.theme === 'theme-light'">
          <img
            class=" h-12 w-12 fill-current fill-text-red-600 hover:text-green-600"
            src="../assets/img/logo_light_mod.svg"
            title="Switch for the light theme"
            alt="button light theme ">
        </picture>
        <picture @click.prevent="toggleTheme" class="mx-2 mr-6 cursor-pointer" v-else>
          <img
            class="h-12 w-12  fill-current fill-text-red-600 hover:text-green-600  "
            src="../assets/img/logo_dark_mod.svg"
            alt="theme dark button"
            title=" dark for the theme">
        </picture>
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    name: "NavBarre",
    components: {},

    methods: {
      toggleTheme() {
        this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
        this.$store.state.theme = this.theme;
      }
    },
  }

</script>
<style scoped>

</style>
