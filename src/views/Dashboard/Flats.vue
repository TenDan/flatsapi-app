<template>
  <v-main class="pa-5">
    <v-subheader>Mieszkania do kupienia</v-subheader>
    <v-card elevation="5" class="mx-5 my-8" v-for="(flat, i) in flats" :key="i">
      <v-row justify="space-between" align="center">
        <v-col cols="6">
          <v-card-title class="text-md-h3">{{flat.address}} nr {{flat.number}}</v-card-title>
        </v-col>
        <v-col cols="3">
          <div class="text-md-h3 text-center">{{flat.price}} zł</div>
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
import Dialog from '../../components/universal/Dialog.vue';
import { isRequired, isNumber } from '../../common/form/rules';

export default {
  name: 'Flats',
  components: {
    Dialog,
  },
  data() {
    return {
      flats: [
        {
          blockOfFlats: null,
          address: 'Kwiatowa 15',
          number: '5',
          price: 15000,
        },
        {
          blockOfFlats: null,
          address: 'Ogrodowa 3',
          number: '18',
          price: 27430,
        },
        {
          blockOfFlats: null,
          address: 'Testowa 13/14',
          number: '8',
          price: 32500,
        },
      ],
      fields: [
        [
          {
            name: 'Blok mieszkalny',
            rules: [
              isRequired,
            ],
          },
          {
            name: 'Adres posiadłości',
            rules: [
              isRequired,
            ],
          },
        ],
        [
          {
            name: 'Numer mieszkania',
            rules: [
              isRequired,
            ],
          },
        ],
        [
          {
            name: 'Cena',
            rules: [
              isRequired,
              isNumber,
            ],
          },
        ],
      ],
    };
  },
  methods: {
    addFlat(blockOfFlats, address, number, price) {
      /*
      console.log({
        blockOfFlats, address, number, price,
      });
       */
      this.flats.push({
        blockOfFlats, address, number, price,
      });
    },
  },
};
</script>

<style scoped>

</style>
