<template>
  <v-card
  >
    <v-navigation-drawer
      permanent
      expand-on-hover
      app
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-avatar color="primary" size="56">IN</v-avatar>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item class="text-start">
          <v-list-item-content class="text-left">
            <v-list-item-title class="text-h6">
              Imię Nazwisko
            </v-list-item-title>
            <v-list-item-subtitle>
              nazwa użytkownika
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item v-for="item in items"
                     :key="item.title"
                     link
                     :to="item.link"
                     class="text-center"
        >
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list dense nav>
          <v-list-item class="text-center" link>
            <v-list-item-icon>
              <v-icon>logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Wyloguj się</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      overlay: false,
      items: [
        {
          title: 'Panel główny',
          icon: 'dashboard',
          link: '/dashboard',
        },
        {
          title: 'Mieszkania',
          icon: 'apartment',
          link: '/flats',
        },
        {
          title: 'Wynajmujący',
          icon: 'group',
          link: '/tenants',
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
