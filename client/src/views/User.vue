<template>
  <v-container fill-height class="flex-column mt-5" border>
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
.container {
  max-width: 45rem;
  max-height: 50rem;
}
</style>