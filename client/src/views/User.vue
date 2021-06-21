<template>
  <v-container class="flex justify-center align-items-center">
    <user-form></user-form> 
  </v-container>
</template>

<script>
import UserForm from "@/components/UserForm";

export default {
  name: "User",
  components: {
    UserForm
  },
};
</script>

<style scoped>
</style>