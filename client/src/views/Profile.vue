<template>
  <v-app>
    <div class="container">
      <div class="user-data">
        <v-img
          lazy-src=""
          max-height="289"
          max-width="250"
          class="user-image"
          src="">
        </v-img>
        <div> {{ nombre }} </div>
        <div> {{ username }} </div>
      </div>
      <div class="user-guachinches"></div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      nombre: "",
      username: "",
    }
  },

}
</script>

<style scoped>
  .container {
    display: flex;
  }

  .container .user-data {
    display: flex;
    flex-direction: column;
    width: 18.75rem;
    height: 12.5rem;
  }

  .container .user-data .user-image {
    width:  60px;
    height: 60px;
  }

  .container .user-guachinches {
    margin-left: 20px;
    width: 600px;
    height: 300px;
  }

</style>