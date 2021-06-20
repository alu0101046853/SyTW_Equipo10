<template>
  <v-container class="flex justify-center align-center">
    <login-form></login-form>
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

<style scoped>
</style>