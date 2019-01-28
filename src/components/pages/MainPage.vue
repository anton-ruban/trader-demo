<template>
  <div class="main-container">
    <Header />
    <!-- <TradingView /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '../header/Header.vue';
import Footer from '../footer/Footer.vue';

export default {
  name: 'MainPage',
  components: {
    Header,
    Footer,
  },
  computed: {
  }
}
</script>

<style lang="scss">
  .main-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
