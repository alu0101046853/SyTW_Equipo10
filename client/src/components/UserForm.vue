<template>
  <div class="userform">
    <v-app>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
      <v-text-field
        v-model="user.username"
        name="username"
        label="Usuario"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.name"
        name="name"
        label="Nombre"
      ></v-text-field>

      <v-text-field
        v-model="user.email"
        :rules="[rules.email]"
        label="E-mail"
        name="email"
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="handleSubmit"
      >
        Actualizar
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="showdelete= !showdelete"
      >
        Borrar Usuario
      </v-btn>
      <div class="text-center" v-if="showdelete">
        <v-sheet
          class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
          color="blue-grey darken-3"
          dark
        >
        <div class="grey--text text--lighten-1 text-body-2 mb-4">
          ¿Estas seguro de que quieres borrar este usuario?
        </div>

        <v-btn
          :disabled="loading"
          class="ma-1"
          color="grey"
          plain
          @click="showdelete=false"
        >
          Cancelar
        </v-btn>

        <v-btn
          :loading="loading"
          class="ma-1"
          color="error"
          plain
          @click="handleDelete"
        >
          Borrar
        </v-btn>
        </v-sheet>
      </div>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      loading: false,
      valid: true,
      submitted: false,
      showdelete: false,
      rules: {
        email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, name, email, id } = this.user;
      const { dispatch } = this.$store;
      if (username) {
        dispatch("authentication/update", { username, name, email, id });
      }
    },
    handleDelete() {
        const { id } = this.user;
        const { dispatch } = this.$store;
        dispatch("authentication/_delete", { id });
    },
    validate () {
      this.$refs.form.validate()
    },
  },
}
</script>

<style>
.userform{
  max-height: 20rem;
}
</style>