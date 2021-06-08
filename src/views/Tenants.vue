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
          v-for="tenant in tenants"
          :key="tenant"
        >
          <v-card class="pa-5">
            <v-card-title>{{tenant.firstName}} {{tenant.lastName}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Dialog :fields="fields">
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
  </v-content>
</template>

<script>
import Dialog from '../components/universal/Dialog.vue';

const required = (value) => !!value || 'Pole wymagane';

export default {
  name: 'Tenants',
  components: {
    Dialog,
  },
  data() {
    return {
      dialog: false,
      tenants: [
        {
          firstName: 'Jan',
          lastName: 'Kowalski',
        },
        {
          firstName: 'Tomasz',
          lastName: 'Drań',
        },
        {
          firstName: 'Nabosaka',
          lastName: 'Yebiesuki',
        },
      ],
      fields: [
        [
          {
            name: 'Imię',
            rules: [
              required,
            ],
          },
          {
            name: 'Nazwisko',
            rules: [
              required,
            ],
          },
        ],
      ],
    };
  },
};
</script>

<style scoped>

</style>
