<template>
  <div class="login-page">
    <v-app>
      <v-form class="form" ref="form" v-model="valid" lazy-validation>
          <div class="circle">
            <v-icon x-large color="white">mdi-account-key-outline</v-icon>
          </div>
  
        <div class="input-container">
          <v-text-field
            v-model="username"
            name="username"
            label="Usuario"
            class="form-item ma-0 pa-1"
            required>
          </v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="password"
            label="Contraseña"
            class="form-item ma-0 pa-1"
            required
            @click:append="show1 = !show1">
          </v-text-field>

          <div class="button-container">
            <v-btn
              :disabled="!valid"
              class="sign-button"
              color="success"
              @click="handleSubmit">
              Iniciar sesión
            </v-btn>

            <v-btn color="error" class="reset-button" @click="reset">
              Resetear Formulario
            </v-btn>
          </div>

          <div class="btn-no-acc">
            <router-link class="link mt-3" to="/signup">
              <v-btn rounded dark> ¿No tiene Cuenta?, Registrese Aquí </v-btn>
            </router-link>
          </div>
        </div>
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
  height: 22.5rem;
  border-radius: 5%;
  background-color: white;
  box-shadow: 0 0 5px rgb(66, 66, 66);
}

.form,
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 5rem;
  height: 5rem;

  border-radius: 50%;

  background: #420e28;
  box-shadow: 0 0 5px rgb(66, 66, 66);

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-page {
  margin-top: 3.5rem;
}

.button-container {
  margin-bottom: 5px;
}

.reset-button {
  margin-left: 10px;
}

.btn-no-acc {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>