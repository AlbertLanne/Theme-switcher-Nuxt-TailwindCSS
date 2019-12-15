<template>

  <footer class=" bg-background-tertiary  ">



    <div class="my-12 mx-6 justify-start ">

      <p>--nav footer--</p>

    </div>

    <!--    ================ This component are only for the test. This button work correctly ================ -->
    <header class="p-6 border-yellow-500 border-2 rounded items-center flex justify-center">
      <div class="text-center  text-red-700 p-2 bg-red-500 items-center justify-center leading-none lg:rounded-full flex lg:inline-flex"
           role="alert">
        <a class=" flex rounded-full bg-background-primary uppercase justify-center px-2 py-1 text-xs font-bold "
           @click.prevent="toggleTheme">
          <picture v-if="theme === 'theme-light'"><img class="m-2 h-8 w-8" src="../assets/img/logo_light_mod.svg"></picture>
          <picture v-else="theme === 'theme-light'"> <img class="m-2 h-8 w-8" src="../assets/img/logo_dark_mod.svg"> </picture>
        </a>
      </div>
    </header>
    <!--   ======================================================================================================= -->

    <div class="my-12 mx-6 justify-start ">

      <p>--nav footer--</p>

    </div>
  </footer>
</template>

<script>
    export default {
        name: "NavFooter"
    }
</script>

<style></style>
