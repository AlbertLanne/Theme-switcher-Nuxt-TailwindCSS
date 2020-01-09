<template>

<!--  It's here the declaration of the class theme so we import the variable here-->

  <div class="min-h-screen flex flex-col bg-background-primary
              text-copy-primary" :class="theme">
    <div class="flex-grow">
      <NavBarre/>
      <nuxt/>
    </div>
    <NavFooter/>
  </div>
</template>

<script>

  import NavFooter from "~/components/NavFooter.vue";
  import NavBarre from "~/components/NavBarre.vue";

  export default {
    computed: {
      theme() {
        return this.$store.state.theme;
      }
    },
    components: {NavFooter, NavBarre,}

  };
</script>



