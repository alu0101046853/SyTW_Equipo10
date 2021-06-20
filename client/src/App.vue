<template>
  <div class="main-page">
    <Header />
    <v-app>
    <router-view class="content"></router-view>
    </v-app>
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
<style>
/* colores 
#e3d7b9
#90a88e 
https://colorpalettes.net/color-palette-2267/ 
*/
#app{
background: url('https://www.tesa46ti.com/wp-content/uploads/2021/05/web-background.jpg')
    no-repeat center center fixed !important;
  background-size: cover !important;
}
</style>