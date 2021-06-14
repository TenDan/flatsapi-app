<template>
  <v-main class="pa-5">
    <v-subheader>Mieszkania do kupienia</v-subheader>
    <v-card elevation="5" class="mx-5 my-8" v-for="n in 10" :key="n">
      <v-row justify="space-between" align="center">
        <v-col cols="6">
          <v-card-title class="text-md-h3">Mieszkanie nr {{n}}</v-card-title>
        </v-col>
        <v-col cols="3">
          <div class="text-md-h3 text-center">{{n * 10000}} zł</div>
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
    <Dialog :fields="fields" :action="addFlat">
      <template v-slot:button="props">
        <v-fab-transition>
          <v-btn
            elevation="2"
            fab
            bottom
            large
            right
            color="primary"
            fixed
            class="mx-5 mb-15 mb-md-5"
            v-bind="props.btn.attrs"
            v-on="props.btn.on"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
    </Dialog>
  </v-main>
</template>

<script>
import Dialog from '../components/universal/Dialog.vue';

const required = (value) => !!value || 'Pole wymagane';

export default {
  name: 'Flats',
  components: {
    Dialog,
  },
  data() {
    return {
      fields: [
        [
          {
            name: 'Blok mieszkalny',
            rules: [
              required,
            ],
          },
          {
            name: 'Adres posiadłości',
            rules: [
              required,
            ],
          },
        ],
        [
          {
            name: 'Numer mieszkania',
            rules: [
              required,
            ],
          },
        ],
      ],
    };
  },
  methods: {
    addFlat(blockOfFlats, address, number) {
      console.log({ blockOfFlats, address, number });
    },
  },
};
</script>

<style scoped>

</style>
