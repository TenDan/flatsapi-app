<template>
  <fragment>
    <navigation></navigation>
    <v-main>
      <v-container fluid class="lighten-5 pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>
  </fragment>
</template>

<script>
// eslint-disable-next-line import/extensions
import Navigation from '@/components/nav/Navigation';

export default {
  name: 'DashboardLayout',
  components: {
    Navigation,
  },
};
</script>
