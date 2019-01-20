<template>
  <div class="main-container">
    <Header />
    <MainView />
    <Footer />
  </div>
</template>

<script>
import Header from '../header/Header.vue';
import MainView from '../mainview/MainView.vue';
import Footer from '../footer/Footer.vue';

export default {
  name: 'TradingPage',
  components: {
    Header,
    MainView,
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
  }
</style>
