<template>
  <header class="items-baseline bg-background-tertiary flex">
<!--here i would like to add a button to switch the theme-->



    <div class=" mx-6 justify-start ">
             <h1 class="m-3 my-6 text">Website prototype </h1>
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
