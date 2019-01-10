<template>
  <header class="has-signupbanner">
    <a target="_blank" href="https://www.home.saxo/accounts/openaccount?int_cmpid=OA_GO_classic_demo" class="signupbanner">
    Open an account and start trading - click here
    </a>
    <div class="masthead">
      <div class="logos">
        <img alt="logo" src="../../assets/saxobank.svg" width="44" height="33"/>
        <img alt="logo" src="../../assets/logo-text.svg" width="138" height="33"/>
      </div>
      <MainMenu/>
      <ActionMenu/>
    </div>
  </header>
</template>

<script>
import MainMenu from './MainMenu.vue';
import ActionMenu from './ActionMenu.vue';

export default {
  name: 'Header',
  components: {
    MainMenu,
    ActionMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  height: 73px;
  flex-direction: column;
  position: relative;
  display: flex;
  flex: 1 0 auto;
  padding: 0;
  margin: 0;
  max-width: 100%;
  text-align: left;
  text-align: start;
}
.signupbanner {
  height: 24px;
  line-height: 24px;
  background-color: #39d;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  display: block;
  &:hover {
    background: #4ae;
  }
}
.masthead {
  padding: 0 8px;
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  .logos {
    height: 33px;
  }
}
</style>
