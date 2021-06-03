<template>
  <v-container fluid class="grey lighten-5">
    <v-row
      no-gutters>
      <v-col
        v-for="n in 9"
        :key="n"
        cols="12"
        sm="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-card
          class="pa-2 ma-3"
          outlined
          tile
          elevation="2">
          <v-card-title>Test</v-card-title>
          <v-card-subtitle>Lorem ipsum</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>

</style>
