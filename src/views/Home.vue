<template>
  <div class="frontPage">
    <v-card color="transparent" elevation="0">
      <v-card-title class="flex justify-center my-2">
        <div class="text-h1 text-center wrap">
          Flats Of Blocks
        </div>
      </v-card-title>
      <v-card-subtitle class="text-center wrap text-h5">
        Manage your flats and blocks of flats in one place.
      </v-card-subtitle>
      <v-card-actions class="flex justify-center">
        <v-btn outlined>
          <v-icon
            left>
            person
          </v-icon>
          Login
        </v-btn>
        <v-btn outlined>
          <v-icon
            left>
            person_add
          </v-icon>
          Register
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Home',

};
</script>

<style>
  .frontPage {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    word-wrap: break-spaces;
  }
</style>
