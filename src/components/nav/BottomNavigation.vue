<template>
  <v-bottom-navigation
    v-model="value"
    class="d-flex d-md-none"
    :app="$vuetify.breakpoint.smAndDown"
    :fixed="$vuetify.breakpoint.smAndDown"
    color="primary"
    shift
    grow
  >
    <v-btn v-for="item in $props.items" :key="item.title" :value="item.link" :to="item.link" exact>
      <span>{{item.title}}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
    <v-btn>
      <span>Więcej</span>
      <v-icon>menu</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data() {
    return {
      value: null,
    };
  },
  props: {
    items: Array,
  },
};
</script>

<style scoped>

</style>
