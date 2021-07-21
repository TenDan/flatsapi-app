<template>
  <v-theme-provider>
    <v-app>
      <router-view></router-view>
    </v-app>
  </v-theme-provider>
</template>

<script>
export default {
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
