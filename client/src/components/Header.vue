<template>
  <header>
    <div id="app">
      <v-app id="inspire">
        <div>
          <v-app-bar color="amber" dense darken-2>
            <v-toolbar-title>GuachIt</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item @click="() => {}">
                  <v-list-item-title>Perfil</v-list-item-title>
                </v-list-item>
                <router-link to="/login">
                  <v-list-item @click="() => {}">
                    <v-list-item-title>Cerrar sesión</v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list>
            </v-menu>
          </v-app-bar>
        </div>
      </v-app>
    </div>
  </header>
</template>

<script>
// import Logo from "./Logo.vue";
// import Profile from "./Profile.vue";
export default {
  name: "app",
  components: {
    // Logo,
    // Profile,
  },
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
    users() {
      return this.$store.state.users.all;
    },
  },
};
</script>

<style lang="postcss">
#app {
  height: 3rem;
}
</style>