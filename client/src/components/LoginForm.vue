<template>
  <div class="login-page">
    <v-app>
      <v-form class="form" ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row
            ><v-col>
              <v-text-field
                @keyup.enter="handleSubmit"
                v-model="username"
                name="username"
                label="Usuario"
                required
              ></v-text-field>

              <v-text-field
                @keyup.enter="handleSubmit"
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="password"
                label="Contraseña"
                required
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container class="flex justify-space-evenly align-center">
          <div class="submit-area">
            <div class="buttons">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-3"
                @click="handleSubmit"
              >
                Iniciar sesión
              </v-btn>

              <v-btn color="error" class="mr-3" @click="reset">
                Resetear Formulario
              </v-btn>
            </div>
            <router-link class="link mt-3" to="/signup">
              <v-btn rounded dark> ¿No tiene Cuenta?, Registrese Aquí </v-btn>
            </router-link>
          </div>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      show1: "",
      valid: true,
      username: "",
      password: "",
      submitted: false,
      rules: {
        email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      },
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    },
  },
  created() {
    // reset login status
    this.$store.dispatch("authentication/logout");
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      const { dispatch } = this.$store;
      if (username && password) {
        dispatch("authentication/login", { username, password });
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.form {
  width: 30rem;
  height: 20rem;
  border-radius: 5%;
  background-color: white;
  box-shadow: 0 0 5px rgb(66, 66, 66);
}
.form,
.submit-area,
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-page {
  margin-top: 4rem;
}
</style>