<template>
  <v-container fill-height class="flex-column mt-5" border>
    <register-form></register-form> 
    <router-link to='/login' class="link mt-3">
    <v-btn
      rounded
      dark
    >
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

<style scopped>
.container {
  max-width: 30rem;
  max-height: 50rem;
}
</style>