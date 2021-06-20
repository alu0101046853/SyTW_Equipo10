<template>
  <div class="register">
    <v-app>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="form">

        <div class="circle-and-text-container">
          <div class="circle">
           <v-icon x-large color="white">mdi-account-outline</v-icon> 
          </div>
          <router-link to="/login" class="link">¿Ya tienes una cuenta?</router-link>
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
           v-model="name"
           name="name"
           class="form-item ma-0 pa-1"
           label="Nombre">
         </v-text-field>

        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          label="E-mail"
          class="form-item ma-0 pa-1"
          name="email">
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
            color="#862d59"
            @click="handleSubmit"> Sign Up
          </v-btn>

          <v-btn
            color="#862d59"
            class="sign-button"
            @click="reset"> Resetear Formulario
          </v-btn>    
        </div>
      </div>
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

<style scoped>
.form {
  width: 30rem;
  height: 26rem;

  border-radius: 5%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgb(66, 66, 66);
}

.circle-and-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 5px;
}

.circle {
  width: 5rem;
  height: 5rem;

  border-radius: 50%;

  background:  #862d59;
  box-shadow: 0 0 5px rgb(66, 66, 66);

  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-and-text-container .link{
  color:  #862d59;
}

.form .input-container {
  width: 70%;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 9;
}

.sign-button {
  color: white;
}

</style>