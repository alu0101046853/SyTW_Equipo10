<template>
  <div>
  <v-app>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </v-app>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data (){
    return{
        items: [
            {src: require('@/assets/oss.jpg')},
            {src: require('@/assets/calamares.jpg')},
            {src: require('@/assets/uruguayo.jpg')},
            {src: require('@/assets/filete.jpg')}
        ]
    }
  }
};
</script>
<style scoped>
.carousel{
    max-height: 40rem;
}
</style>
