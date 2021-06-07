<template>
  <v-content class="pa-5">
    <v-subheader>Mieszkania do kupienia</v-subheader>
    <v-card elevation="5" class="mx-5 my-8" v-for="n in 10" :key="n">
      <v-row justify="space-between" align="center">
        <v-col cols="6">
          <v-card-title class="text-h3">Mieszkanie nr {{n}}</v-card-title>
        </v-col>
        <v-col cols="3">
          <div class="text-h3 text-center">{{n * 10000}} zł</div>
        </v-col>
      </v-row>
      <v-card-text class="text-body-1">Lorem ipsum</v-card-text>
      <v-card-actions>
        <v-btn icon>
          <v-icon>info</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>shopping_bag</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-fab-transition>
      <v-btn
        elevation="2"
        fab
        bottom
        large
        right
        color="primary"
        fixed
        class="ma-5"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-content>
</template>

<script>
export default {
  name: 'Flats',
};
</script>

<style scoped>

</style>
