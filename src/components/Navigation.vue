<template>
  <v-card
    max-width="100%"
    height="100vh"
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item class="text-start">
        <v-list-item-content class="text-left">
          <v-list-item-title class="text-h6">
            Imię Nazwisko
          </v-list-item-title>
          <v-list-item-subtitle>
            adres e-mail
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item v-for="item in items"
                     :key="item.title"
                     link
                     :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      items: [
        {
          title: 'Panel główny',
          icon: 'dashboard',
          link: '/',
        },
        {
          title: 'Ustawienia',
          icon: 'settings',
          link: '/settings',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
