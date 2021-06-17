<template>
  <div>
    <div>
      <h1>Hi {{ user.firstName }}!</h1>
      <p>You're logged in with Vue + Vuex & JWT!!</p>
      <h3 class="">Users from secure api end point:</h3>
      <em v-if="users.loading">Loading users...</em>
      <span v-if="users.error" class="text-danger"
        >ERROR: {{ users.error }}</span
      >
      <ul v-if="users.items">
        <li v-for="user in users.items" :key="user.id">
          {{ user.username }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
    users() {
      return this.$store.state.users.all;
    },
  },
  created() {
    this.$store.dispatch("users/getAll");
  },
};
</script>
<style lang="postcss">
</style>