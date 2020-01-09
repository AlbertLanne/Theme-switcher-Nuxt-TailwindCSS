<template>
  <footer class=" bg-background-tertiary border-border-color-primary border">
    <div class="border-2 w-32 rounded-full text-xl m-2 p-2 bg-background-primary flex-wrap">
      <p class=""> Cool Footer</p>
    </div>
    <div class="flex sm:inline-flex md:block lg:hidden xl:flex">
      <div class="flex w-full justify-center">
        <a @click.prevent="toggleTheme"
           class="cursor-pointer sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700">
          -{{this.$store.state.theme}}
        </a>
      </div>
      <div class="flex w-full justify-center">
        <a @click.prevent="toggleTheme"
           class="cursor-pointer sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700">
          -{{this.$store.state.theme}}
        </a>
      </div>
      <div class="flex w-full justify-center">
        <a @click.prevent="toggleTheme"
           class="cursor-pointer sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700">
          -{{this.$store.state.theme}}
        </a>
      </div>
    </div>
    <div class="flex sm:inline-flex md:block lg:hidden xl:flex">
      <div class="flex w-full justify-center">
        <p> - fake button </p>
      </div>
      <div class="flex w-full justify-center">
        <p> - fake button </p>
      </div>
      <div class="flex w-full justify-center">
        <p> - fake button </p>
      </div>
    </div>
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
      }
    }
  }
</script>


<style></style>
