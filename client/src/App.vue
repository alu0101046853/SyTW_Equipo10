
<template>
  <div class="main-page">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: {
    Header,
  },
  watch: {
    $route() {
      // clear alert on location change
      this.$store.dispatch("alert/clear");
    },
  },
};
</script>
<style scopped>
</style>