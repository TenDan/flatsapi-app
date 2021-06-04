<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab v-for="tab in items" :key="tab.tabName">{{tab.tabName}}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tabName"
      >
        <keep-alive>
          <component :is="item.tabComponent"></component>
        </keep-alive>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      tab: null,
      items: [
        {
          tabName: 'Wygląd', tabComponent: () => import('../components/settings/AppearanceSettings.vue'),
        },
        {
          tabName: 'Konto', tabComponent: () => import('../components/settings/AccountSettings.vue'),
        },
        {
          tabName: 'Informacje', tabComponent: () => import('../components/settings/About.vue'),
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
