<template>
  <fragment>
    <drawer-navigation :items="items"></drawer-navigation>
    <bottom-navigation :items="items"></bottom-navigation>
  </fragment>
</template>

<script>
import DrawerNavigation from '@/components/nav/DrawerNavigation.vue';
import BottomNavigation from '@/components/nav/BottomNavigation.vue';
import { Fragment } from 'vue-fragment';

const prefix = '/dashboard';

export default {
  name: 'Navigation',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BottomNavigation, DrawerNavigation, Fragment,
  },
  data() {
    return {
      drawer: false,
      overlay: false,
      items: [
        {
          title: 'Panel główny',
          icon: 'dashboard',
          link: prefix,
        },
        {
          title: 'Mieszkania',
          icon: 'apartment',
          link: `${prefix}/flats`,
        },
        {
          title: 'Wynajmujący',
          icon: 'group',
          link: `${prefix}/tenants`,
        },
        {
          title: 'Ustawienia',
          icon: 'settings',
          link: `${prefix}/settings`,
        },
      ],
    };
  },
};
</script>
