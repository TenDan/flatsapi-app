<template>
  <div id="app" class="v-application">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Navigation from '@/components/Navigation';

export default {
  components: {
    Navigation,
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
