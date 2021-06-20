<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Reserva en {{data.name}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            <v-col cols="12">
                <v-text-field
                  label="Nombre de la reserva"
                  v-model="name"
                ></v-text-field>
            </v-col>
                <v-col cols="12">
                <v-text-field
                  label="Número de comensales"
                  v-model.number="comensales"
                ></v-text-field>
              </v-col>
            <v-col cols="6">
            <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="date"
                label="Fecha de la reserva"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :min="new Date().toISOString().substr(0, 10)"
            ></v-date-picker>
            </v-menu>
            </v-col>
            <v-col cols="6">
                <v-menu
                ref="menu"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="time"
                    label="Picker in menu"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
                </template>
                <v-time-picker
                v-if="menu2"
                v-model="time"
                full-width
                format="24hr"
                @click:minute="$refs.menu.save(time)"
                ></v-time-picker>
            </v-menu>
            </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="handleReserva"
          >
            Reservar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ReservaForm",
  props: {
    data: {
      name: String,
      hour: String,
      delivery: Boolean,
      id: String,
    },
  },
  data() {
    return {
      name: null,
      time: null,
      menu2: false,
      modal2: false,
      activePicker: null,
      date: null,
      menu: false,
      dialog: false,
      loading: false,
      valid: true,
      submitted: false,
      comensales: null,
      rules: {
        email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      }
    }
  },
  methods: {
      handleReserva(){
          this.dialog=false;
          const id_usuario = this.$store.state.authentication.user.id;
          const id_guachinche = this.data.id;
          const {time, date, comensales, name} = this;
          const {dispatch} = this.$store;
          dispatch("reservas/create",{time,date,comensales,name,id_usuario, id_guachinche})
      }
  },
}
</script>

<style scoped>
</style>