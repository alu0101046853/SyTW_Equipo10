<template>
  <v-container fill-height class="flex-column mt-5" border>
    <create-form></create-form> 
  </v-container>
</template>

<script>
import CreateForm from "@/components/CreateForm";

export default {
  name: "GuachincheRegister",
  components: {
    CreateForm
  },
};
</script>

<style scoped>
.container {
  max-width: 50rem;
  max-height: 60rem;
}
</style>