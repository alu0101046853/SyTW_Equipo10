<template>
  <v-container fill-height class="flex-column mt-5">
    <login-form></login-form>
    <router-link class="link mt-3" to='/signup'>
      ¿No tiene Cuenta?, Registrese Aquí
    </router-link>
  </v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "SignUp",
  components: {
    LoginForm
  },
};
</script>

<style scopped>
</style>