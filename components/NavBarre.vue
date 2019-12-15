<template>
  <header class=" bg-background-tertiary flex">
<!--here i would like to add a button to switch the theme-->
<div class="m-2 flex">

    <div class=" mx-6 justify-start mx-2 border-2 border-dotted rounded border-border-color-primary">
             <h1 class="m-3 my-6 text">❤ Website prototype ❤</h1>

    </div>
    <p> --nav barre--</p>

</div>
  </header>
</template>


<script>

  export default {
    name: "NavBarre",
    data() {
      return {
        theme: "theme-dark"

      };
    },


  }

</script>
<style scoped>

</style>
