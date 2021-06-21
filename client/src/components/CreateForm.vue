<template>
  <div class="creation">
    <v-app>
      <v-form class="form" ref="form" lazy-validation>
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

        <v-textarea
          v-model="description"
          label="Descripción del Guachinche"
          name="description"
          required
        ></v-textarea>

        <v-textarea
          v-model="hour"
          label="Horario"
          name="hour"
          required
        ></v-textarea>

        <v-text-field
          v-model="phone"
          label="Teléfono de Contacto"
          name="phone"
          required
        ></v-text-field>

        <v-switch
          v-model="delivery"
          label="Envío a domicilio"
          name="delivery"
          required
        ></v-switch>

        <v-text-field
          v-model="image"
          label="Introduzca la URL de la imagen de su guachinche"
          name="image"
          required
        ></v-text-field>
        <div class="buttons">
          <v-btn color="success" class="mr-4" @click="handleSubmit">
            Crear
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Resetear </v-btn>
        </div>
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
      description: "",
      hour: "",
      phone: "",
      image: "",
      delivery: false,
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { name, location, hour, phone, delivery, image, description } =
        this;
      const { dispatch } = this.$store;
      if (name && location) {
        dispatch("guachinches/create", {
          name,
          location,
          hour,
          phone,
          delivery,
          image,
          description,
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
.buttons,
.creation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  padding: 2rem;
  border-radius: 5%;
  width: 45rem;
  height: 50rem;
  background-color: white;
  box-shadow: 0 0 5px rgb(66, 66, 66);
  margin-top: 2rem;
}
</style>