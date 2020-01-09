<template>
  <div class="w-full">

    <p class="text-xl mt-6 my-2 text-center text-copy-primary mt-16">
      <i>~ Prototype of global theme changer make in single js file ~</i>
    </p>
    <p class="text-lg mt-6 mb-12 text-center text-copy-primary cursor-pointer"     @click.prevent="toggleTheme">
      <i>~ Click here to change the theme from the index.vue ~</i>
    </p>


    <div v-for class="flex justify-center w-full  mx-auto">
      <table class="text-center items-center border-2 border-border-color-primary">
        <thead>
        <tr>
          <th class="border border-border-color-primary px-4 py-2 text-copy-secondary">Step I did</th>
          <th class="border border-border-color-primary px-4 py-2 text-copy-secondary">result</th>
        </tr>
        </thead>
        <tr>
          <td class="border border-border-color-primary px-4 py-2">Try to use the button on the same file of the
            methode
          </td>
          <td class="border border-border-color-primary px-4 py-2">the button are under it's work well</td>
        </tr>
        <tr>
          <td class="border border-border-color-primary px-4 py-2">try the button someone else</td>
          <td class="border border-border-color-primary px-4 py-2">error eh don't know the methode</td>
        </tr>
        <tr>
          <td class="border border-border-color-primary px-4 py-2">and try the button+ methode someone else</td>
          <td class="border border-border-color-primary px-4 py-2">I have like a children of theme switcher (so 2
            different)
          </td>
        </tr>
      </table>
    </div>


    <p
      class="bg-background-primary items-center mx-auto my-3 text-justify border border-border-color-primary  rounded-lg p-2  w-5/12  text-center text-copy-secondary text-center">
      Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Pellentesque dapibus hendrerit
      tortor. Praesent venenatis metus at tortor pulvinar varius. Sed augue ipsum, egestas nec, vestibulum et, malesuada
      adipiscing, dui. Ut non enim eleifend felis pretium feugiat. Maecenas vestibulum mollis diam. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis. Praesent nec nisl
      a purus blandit viverra. Aenean massa. Pellentesque commodo eros a enim. Fusce fermentum. Maecenas ullamcorper,
      dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Maecenas tempus, tellus
      eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.

    </p>
    <p
      class="bg-background-secondary items-center mx-auto my-3 text-justify border border-border-color-primary  rounded-lg p-2  w-5/12  text-center text-copy-secondary text-center">
      Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Pellentesque dapibus hendrerit
      tortor. Praesent venenatis metus at tortor pulvinar varius. Sed augue ipsum, egestas nec, vestibulum et, malesuada
      adipiscing, dui. Ut non enim eleifend felis pretium feugiat. Maecenas vestibulum mollis diam. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis. Praesent nec nisl
      a purus blandit viverra. Aenean massa. Pellentesque commodo eros a enim. Fusce fermentum. Maecenas ullamcorper,
      dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Maecenas tempus, tellus
      eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Pellentesque commodo
      eros a enim.
    </p>
    <p
      class="bg-background-tertiary items-center mx-auto my-3 text-justify border border-border-color-primary  rounded-lg p-2  w-5/12  text-center text-copy-secondary text-center">
      Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Pellentesque dapibus hendrerit
      tortor. Praesent venenatis metus at tortor pulvinar varius. Sed augue ipsum, egestas nec, vestibulum et, malesuada
      adipiscing, dui. Ut non enim eleifend felis pretium feugiat. Maecenas vestibulum mollis diam. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis. Praesent nec nisl
      a purus blandit viverra. Aenean massa. Pellentesque commodo eros a enim. Fusce fermentum. Maecenas ullamcorper,
      dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Maecenas tempus, tellus
      eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Pellentesque commodo
      eros a enim.
    </p>

  </div>
</template>


<script>
  export default {
    name: "main",
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

<style>

</style>
