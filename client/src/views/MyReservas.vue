<template>
  <div class="reservas-table">
    <v-app>
      <v-simple-table class="tablita" v-if="loading">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nombre de la Reserva</th>
              <th class="text-left">Guachinche</th>
              <th class="text-left">Fecha</th>
              <th class="text-left">Hora</th>
              <th class="text-left">Comensales</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in reservas.items" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ getGuachincheName(item.guachinche) }}</td>
              <td>{{ getDate(item.date) }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.comensales }}</td>
              <td><v-btn color="error" @click="handleDelete(item.id)">Borrar Reserva</v-btn></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "ReservasPage",
  methods: {
    getGuachincheName(id) {
        const item = this.guachinches.items.find((item) => id === item.id);
        return item.name;
    },
    getDate(date) {
      const pepe = date;
      const index = pepe.indexOf("T");
      return pepe.slice(0, index);
    },
    handleDelete(id){
      const { dispatch } = this.$store;
      dispatch("reservas/_delete", { id });
    }
  },
  computed: {
    reservas() {
      return this.$store.state.reservas.all;
    },
    guachinches(){
      return this.$store.state.guachinches.all
    },
    loading () {
      return this.$store.state.guachinches.status.loading;
    }
  },
  created() {
    this.$store.dispatch("guachinches/getAll");
    this.$store.dispatch(
      "reservas/getbyid",
      this.$store.state.authentication.user
    );
  },
};
</script>
<style scoped>
.reservas-table {
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}
.tablita {
  box-shadow: 0 0 5px rgb(66, 66, 66);
  width: 60rem;
  opacity: 0.9;
}
th {
  font-size: 1.2rem !important;
  font-weight: bold;
}
</style>