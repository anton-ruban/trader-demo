<template>
  <v-app :dark="isDark">
    <div id="app">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState('settings', {
      isDark: state => state.isDark
    }),
  },
}
</script>

<style lang="scss">
@import 'styles/imports';
#app {
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 300px;
  overflow: auto;
}

// fix conflict css of multipan and vuetify popover
.multipane > div {
  position: initial;
}
</style>
