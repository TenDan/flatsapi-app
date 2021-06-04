<template>
  <v-card tile class="pa-5" rounded>
    <v-list flat outlined>
      <v-subheader>Ustawienia wyglądu</v-subheader>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Ciemny motyw</v-list-item-title>
            <v-list-item-subtitle>Aktywuje ciemny motyw w aplikacji</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch
              v-model="$vuetify.theme.dark"
              @change="$store.commit('setDarkMode')"
            ></v-switch>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Kolor wiodący</v-list-item-title>
            <v-list-item-subtitle>Wybiera kolor wiodący bieżącego motywu</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-color-picker
              hide-inputs
              hide-mode-switch
              hide-canvas
              hide-sliders
              :swatches="swatches"
              show-swatches
              swatches-max-height="100%"
              :value="$vuetify.theme.currentTheme.primary"
              @input="switchColor"
            ></v-color-picker>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import colors from 'vuetify/lib/util/colors';

export default {
  name: 'AppearanceSettings',
  data() {
    return {
      swatches: [
        [colors.blue.darken1, colors.deepOrange.base],
        [colors.green.accent4, colors.yellow.accent4],
        [colors.red.accent4, colors.teal.base],
        [colors.purple.accent4],
      ],
    };
  },
  methods: {
    switchColor(color) {
      this.$vuetify.theme.themes.dark.primary = color.toString();
      this.$vuetify.theme.themes.light.primary = color.toString();
      this.$store.commit('switchColor', {
        themeColor: color.toString(),
      });
    },
  },
};
</script>

<style scoped>

</style>
