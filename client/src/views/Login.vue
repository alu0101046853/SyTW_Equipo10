<template>
  <v-container fill-height class="flex-column mt-5" border>
    <login-form></login-form>
    <router-link class="link mt-3" to='/signup'>
      <v-btn
      rounded
      dark
      >
        ¿No tiene Cuenta?, Registrese Aquí
      </v-btn>
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
.container {
  max-width: 30rem;
  max-height: 45rem;
}
</style>