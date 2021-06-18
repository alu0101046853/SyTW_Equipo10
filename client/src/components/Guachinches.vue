<template>
  <div>
  <v-app>
  <v-container fill-height class="flex justify-space-between">
      <guachinche-card v-for="guachinche in guachinches.items" :key="guachinche.id" :data="guachinche"></guachinche-card>
  </v-container>
  </v-app>
  </div>
</template>

<script>
import GuachincheCard from '@/components/GuachincheCard.vue';
export default {
  components: { GuachincheCard },
  name: "Guachinches",
  computed: {
    guachinches() {
    return this.$store.state.guachinches.all;
    },
  }
};
</script>
<style scoped>
</style>
