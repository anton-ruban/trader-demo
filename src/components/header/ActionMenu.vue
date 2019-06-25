<template>
  <div class="action-bar">
    <button class="ipe-btn click-status" type="button" title="2-click trading enabled" @click="openPlatformTradingSetupDialog()">
      <i class="fa fa-circle"></i>
      <span>{{tradingClickMode === 'one_click' ? 1 : 2}}</span>
    </button>
    <button class="ipe-btn" type="button">
      <i class="fa fa-adjust"></i>
    </button>
    <button class="ipe-btn" type="button">
      <i class="fa fa-envelope"></i>
    </button>
    <button class="ipe-btn" type="button" title="Settings" @click="toggleSettingsDialog(true)">
      <i class="fa fa-cog"></i>
    </button>
    <button class="logout ipe-btn" type="button">登出</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'ActionMenu',
  computed: {
    ...mapState('settings', {
      tradingClickMode: state => state.settings.platform.tradingClickMode,
    })
  },
  methods: {
    toggleSettingsDialog(e) {
      this.$store.commit('settings/toggleSettingsDialog', e);
    },
    openPlatformTradingSetupDialog() {
      this.$store.commit('settings/togglePlatformTradingSetupDialog', true);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.action-bar {
  display: flex;
  align-items: center;
  button {
    background: transparent;
    color: #888;
    font-size: 15px;
    text-transform: none;
    &.logout {
      white-space: nowrap;
    }
    &:hover {
      color: #111;
    }
  }
  .click-status {
    position: relative;
    > span {
      position: absolute;
      left: 50%;
      font-size: 9px;
      color: white;
      top: 48%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
