<template>
  <div>
    <v-card
      color="deep-purple accent-1"
      class="mx-auto my-12"
      max-width="450"
      max-height="840"
    >
      <v-img height="250" :src="data.image"></v-img>

      <v-card-title>{{ data.name }}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">
          {{ data.location }}
        </div>

        <div>{{ data.description }}</div>
      </v-card-text>
      <v-card-text class="ml-16">
        <v-icon class="ml-16" color="deep-purple lighten-1">mdi-phone</v-icon>
        {{ data.phone }}
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Horarios</v-card-title>
      <v-card-text>
        <v-chip-group v-model="selection" column>
          <v-chip class="flex" color="deep-purple lighten-2">{{
            data.hour
          }}</v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-text class="mx-14">
        <reserva-form :data="data"></reserva-form>
      </v-card-text>
      <v-card-text class="mx-14" v-if="user.username === 'chacho'">
        <v-btn class="mx-14" dark color="error" @click="handleDelete">
          <v-icon> mdi-delete </v-icon>
          Borrar Guachinche
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ReservaForm from './ReservaForm.vue';
export default {
  components: { ReservaForm },
  name: "GuachincheCard",
  props: {
    data: {
      name: String,
      location: String,
      description: String,
      hour: String,
      phone: String,
      delivery: Boolean,
      image: String,
      id: String,
    },
  },
  data() {
    return {
      selection: "",
      loading: "",
    };
  },
  methods: {
    handleDelete() {
      const { id } = this.data;
      const { dispatch } = this.$store;
      dispatch("guachinches/_delete", { id });
    },
  },
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
  },
};
</script>
<style scoped>
</style>