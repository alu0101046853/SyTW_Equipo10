<template>
  <div class="creation">
  <v-app>
  <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      name="name"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="location"
      label="Localización"
      name="location"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="handleSubmit"
    >
      Crear
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Resetar
    </v-btn>
    
  </v-form>
  </v-app>
  </div>
</template>

<script>
export default {
  name: "CreateForm",
  data() {
    return {
      name: "",
      location: "",
      submitted: false,
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { name, location } = this;
      const { dispatch } = this.$store;
      if (name && location) {
        dispatch("guachinches/create", { name,location });
      }
    },
    reset () {
      this.$refs.form.reset()
    },
  },
}
</script>

<style>
.creation{
  max-height: 16rem;
}
</style>