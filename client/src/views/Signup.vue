<template>
  <v-container class="container" >
    <register-form></register-form> 
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

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>