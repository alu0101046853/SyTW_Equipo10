
<template>
  <div class="main-page">
    <Header />
    <div v-if="alert.message" :class="`alert ${alert.type}`">
      {{ alert.message }}
    </div>
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
  computed: {
    alert() {
      return this.$store.state.alert;
    },
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