<template>
  <v-theme-provider>
    <v-app>
      <!--<div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>-->
      <navigation></navigation>
      <v-main>
        <v-container fluid class="lighten-5 pa-0">
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script>
// eslint-disable-next-line import/extensions
import Navigation from '@/components/Navigation';

export default {
  components: {
    Navigation,
  },
  mounted() {
    const { darkMode, themeColor } = this.$store.state;
    this.$vuetify.theme.dark = darkMode;
    this.$vuetify.theme.themes.dark.primary = themeColor;
    this.$vuetify.theme.themes.light.primary = themeColor;
  },
};
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }
</style>
