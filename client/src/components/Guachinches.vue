<template>
  <div>
    <v-app>
      <v-container grid-list-xs>
        <v-col offset-md="4">
          <v-switch
            color="lime darken-2"
            v-model="filtro"
            label="Mostrar solo guachinches con envío a domicilio"
          ></v-switch>
        </v-col>
      </v-container>
      <v-container fill-height class="flex justify-space-between align-start">
        <guachinche-card
          v-show="!filtro || (filtro && guachinche.delivery)"
          v-for="guachinche in guachinches.items"
          :key="guachinche.id"
          :data="guachinche"
        ></guachinche-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import GuachincheCard from "@/components/GuachincheCard.vue";
export default {
  name: "Guachinches",
  components: { GuachincheCard },
  data() {
    return {
      filtro: false,
    };
  },
  computed: {
    guachinches() {
      return this.$store.state.guachinches.all;
    },
  },
};
</script>
<style scoped>
</style>
