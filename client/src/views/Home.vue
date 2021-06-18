<template>
  <div>
    <carousel class="carousel"></carousel>
    <guachinches class="guachinches"></guachinches>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Guachinches from '@/components/Guachinches.vue'
export default {
  name: "Home",
  components: {
    Carousel,
    Guachinches
  },
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
    guachinches() {
      return this.$store.state.guachinches.all;
    },
  },
  created() {
    this.$store.dispatch("guachinches/getAll");
  },
};
</script>
<style scoped>
.carousel{
  max-height: 40rem;
}
.guachinches{
  max-height: 40rem;
}
</style>