<template>
  <div class="main-page">
    <Header />
    <v-app>
      <router-view class="content"></router-view>
      <v-footer padless>
        <v-col class="footer text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>GuachIt</strong>
        </v-col>
      </v-footer>
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
      this.$store.dispatch("alert/clear");
    },
  },
};
</script>
<style>
#app {
  background: url("https://image.freepik.com/vector-gratis/fondo-tamano-pantalla-pagina-web-abstracta-gradiente-crepuscular_70155-243.jpg")
    no-repeat center center fixed !important;
  background-size: cover !important;
}
.footer {
  background: #ce93d8;
  opacity: 0.7;
}
</style>