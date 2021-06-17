<template>
  <v-container fill-height class="flex-column mt-5">
    <register-form></register-form> 
    <router-link to='/login' class="link mt-3">
    <v-btn>
      Si ya tienes Cuenta, Inicia sesion Aquí
    </v-btn> 
    </router-link>
  </v-container>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";

export default {
  name: "SignUp",
  components: {
    RegisterForm
  },
};
</script>

<style>
</style>