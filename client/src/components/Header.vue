<template>
  <header>
    <div class="app">
      <v-app id="inspire">
        <div>
          <v-app-bar app fixed color="purple lighten-3">
            <router-link to="/" style="text-decoration: none; color: inherit">
              <v-toolbar-title class="title"><h1>GuachIt</h1></v-toolbar-title>
            </router-link>

            <v-spacer></v-spacer>

            <v-menu v-if="user" left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </template>

              <v-list>
                <router-link :to="`/user/${user.id}`">
                  <v-list-item>
                    <v-list-item-title>Perfil</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/myreservas">
                  <v-list-item>
                    <v-list-item-title>Mis Reservas</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link
                  to="/guachincheregister"
                  v-if="user.username === 'chacho'"
                >
                  <v-list-item>
                    <v-list-item-title>Crear Guachinche</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/login">
                  <v-list-item class="logout">
                    <v-list-item-title>Cerrar sesión</v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list>
            </v-menu>
          </v-app-bar>
        </div>
      </v-app>
    </div>
    <div id="alert-box" v-if="alert.message" :class="`alert ${alert.type}`">
      {{ alert.message }}
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
    users() {
      return this.$store.state.users.all;
    },
    alert() {
      return this.$store.state.alert;
    },
  },
};
</script>

<style scoped>
.app {
  height: 4rem;
}
.logout {
  background-color: rgba(255, 0, 0, 0.425);
}
.title > h1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 8px 8px 9px black, 4px 1px 2px white;
  letter-spacing: 0.5rem;
}
#alert-box {
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 5;
}
</style>