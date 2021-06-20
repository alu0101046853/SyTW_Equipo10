<template>
  <div>
    <v-app>
      <v-carousel cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <h3 class="descripcion">
        En GuachIt queremos que puedas tener acceso a reservas online en todos
        los guachinches de Tenerife,<br />
        sin limitaciones e incluso con posibilidad de envíos a domicilio
      </h3>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        { src: require("@/assets/oss.jpg") },
        { src: require("@/assets/calamares.jpg") },
        { src: require("@/assets/uruguayo.jpg") },
        { src: require("@/assets/filete.jpg") },
      ],
    };
  },
};
</script>
<style scoped>
.carousel {
  height: 40rem;
}
.descripcion {
  margin-top: 4rem;
  text-align: center;
}
</style>
