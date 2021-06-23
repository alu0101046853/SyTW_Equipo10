<template>
  <div class="form-div">
    <v-app>
      <v-form class="form" ref="form" v-model="valid" lazy-validation>
        <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="username"
              name="username"
              label="Usuario"
              id="username-update"
              required
            ></v-text-field>

            <v-text-field
              v-model="name"
              name="name"
              id="name-update"
              label="Nombre"
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="[rules.email]"
              label="E-mail"
              id="email-update"
              name="email"
            ></v-text-field>

            <div class="buttons">
              <v-btn
                :disabled="!valid"
                color="success"
                class=""
                @click="handleSubmit"
              >
                Actualizar
              </v-btn>

              <v-btn color="error" class="" @click="showdelete = !showdelete">
                Borrar Usuario
              </v-btn>
            </div>

            <div class="popup text-center" v-if="showdelete">
              <v-sheet
                class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
                color="blue-grey darken-3"
                dark
              >
                <div class="grey--text text--lighten-1 text-body-2 mb-4">
                  ¿Estas seguro de que quieres borrar este usuario?
                </div>
                <v-btn
                  :disabled="loading"
                  class="ma-1"
                  color="grey"
                  plain
                  @click="showdelete = false"
                >
                  Cancelar
                </v-btn>

                <v-btn
                  :loading="loading"
                  class="ma-1"
                  color="error"
                  plain
                  @click="handleDelete"
                >
                  Borrar
                </v-btn>
              </v-sheet>
            </div>
          </v-col>
        </v-row>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      loading: false,
      username: this.computed.user.username,
      email: this.computed.user.email,
      name: this.computed.user.name,
      valid: true,
      submitted: false,
      showdelete: false,
      rules: {
        email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, name, email, id } = this.user;
      const { dispatch } = this.$store;
      if (username) {
        dispatch("authentication/update", { username, name, email, id });
      }
    },
    handleDelete() {
      const { id } = this.user;
      const { dispatch } = this.$store;
      dispatch("authentication/_delete", { id });
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>

.form {
  width: 32rem;
  height: 22rem;
  padding: 2rem;
  border-radius: 5%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgb(66, 66, 66);
  margin-top: 2rem;
}
.form-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}
.popup {
  position: absolute;
}

</style>