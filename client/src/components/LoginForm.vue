<template>
   <!-- some code condensed for display reasons -->
  <FormulateForm @submit="handleSubmit">
    <h2>Login</h2>
    <FormulateInput type="text" name="email" label="Email address"  :class="{ 'is-invalid': submitted && !username }" v-model="username"/>
    <FormulateInput type="text" name="password" label="Password" validation="required" v-model="password" :class="{ 'is-invalid': submitted && !password }" />
    <FormulateInput name="terms" type="checkbox" label="I accept, just don't make me read the terms." validation="accepted" />
    <FormulateInput type="submit" label="Login" :disabled="loggingIn" />
  </FormulateForm>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    }
  },
  computed: {
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    },
  },
  created() {
    // reset login status
    this.$store.dispatch("authentication/logout");
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      const { dispatch } = this.$store;
      if (username && password) {
        dispatch("authentication/login", { username, password });
      }
    },
  },
}
</script>

<style>

</style>