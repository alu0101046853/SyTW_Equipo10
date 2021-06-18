<template>
  <div class="register">
  <v-app>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="username"
      name="username"
      label="Usuario"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      name="name"
      label="Nombre"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="[rules.email]"
      label="E-mail"
      name="email"
    ></v-text-field>

    <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="password"
        label="Contraseña"
        required
        @click:append="show1 = !show1"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="handleSubmit"
    >
      Sign Up
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Resetear Formulario
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Resetear Validación
    </v-btn>
  </v-form>
  </v-app>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      show1: "",
      valid: true,
      username: "",
      name: "",
      email: '',
      password: "",
      submitted: false,
      rules: {
        email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      }
    }
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
      const { username, password, name, email } = this;
      const { dispatch } = this.$store;
      if (username && password) {
        dispatch("authentication/signup", { username, password, name, email });
      }
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  },
}
</script>

<style>
.register{
  max-height: 20rem;
}
</style>