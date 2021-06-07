<template>
  <v-content class="pa-5">
    <v-subheader>Twoi wynajmujący</v-subheader>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="n in 5"
          :key="n"
        >
          <v-card class="pa-5">
            <v-card-title>Jan Kowalski</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'Tenants',
};
</script>

<style scoped>

</style>
