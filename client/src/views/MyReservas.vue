<template>
  <div>
    <v-app>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Nombre de la Reserva
            </th>
            <th class="text-left">
              Guachinche
            </th>
            <th class="text-left">
              Fecha
            </th>
            <th class="text-left">
              Hora
            </th>
            <th class="text-left">
              Comensales
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in reservas.items"
            :key="item.id"
          >
            <td>{{ item.name }}</td>
            <td>{{getGuachincheName(item.guachinche)}}</td>
            <td>{{getDate(item.date)}}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.comensales }}</td>
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
      getDate(date){
          const pepe = date;
          const index = pepe.indexOf('T');
          return pepe.slice(0,index);
      }
  },
  computed: {
    guachinches() {
      return this.$store.state.guachinches.all;
    },
    reservas() {
        return this.$store.state.reservas.all;
    }
  },
  created() {
    this.$store.dispatch("guachinches/getAll");
    this.$store.dispatch("reservas/getbyid", this.$store.state.authentication.user);
  },
};
</script>
<style scoped>
</style>