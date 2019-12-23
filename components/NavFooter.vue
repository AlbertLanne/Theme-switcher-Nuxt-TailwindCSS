<template>

  <footer class=" bg-background-tertiary  ">



    <div class=" mx-6 justify-start ">

      <p>--nav footer--</p>
    </div>
    <a class="bg-background-primary "
       @click.prevent="toggleTheme">
      <picture v-if="this.$store.state.theme === 'theme-light'">
        <img class="m-2 h-8 w-8" src="../assets/img/logo_light_mod.svg"></picture>
      <picture v-else><img class="m-2 h-8 w-8" src="../assets/img/logo_dark_mod.svg"></picture>
    </a>



    <p class="mx-12 text-center text-copy-secondary mt-6 text-center">
      Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Pellentesque dapibus hendrerit tortor. Praesent venenatis metus at tortor pulvinar varius. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Ut non enim eleifend felis pretium feugiat. Maecenas vestibulum mollis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis. Praesent nec nisl a purus blandit viverra. Aenean massa. Pellentesque commodo eros a enim. Fusce fermentum. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Pellentesque commodo eros a enim.
      Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Pellentesque dapibus hendrerit tortor. Praesent venenatis metus at tortor pulvinar varius. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Ut non enim eleifend felis pretium feugiat. Maecenas vestibulum mollis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis. Praesent nec nisl a purus blandit viverra. Aenean massa. Pellentesque commodo eros a enim. Fusce fermentum. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Pellentesque commodo eros a enim.
    </p>

    <a @click.prevent="toggleTheme"
       class="cursor-pointer sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700">
      -{{this.$store.state.theme}}
    </a>



  </footer>
</template>

<script>
  export default {
    name: "NavFooter",
    data() {
      return {};
    },
    methods: {
      toggleTheme() {
        this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
        this.$store.state.theme = this.theme;
        // if (typeof window !== 'undefined') {
        //     localStorage.setItem('theme', this.theme)
        // }
      }
    }
  }
</script>


<style></style>
