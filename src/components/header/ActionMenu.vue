<template>
  <div class="action-bar">
    <v-btn class="action-btn click-status" slot="activator" icon depressed small @click="openPlatformTradingSetupDialog()">
      <i class="fa fa-circle"></i>
      <span>{{tradingClickMode === 'one_click' ? 1 : 2}}</span>
    </v-btn>
    <v-btn class="action-btn" slot="activator" icon depressed small>
      <i class="fa fa-adjust"></i>
    </v-btn>
    <v-menu
      :value="isOpenNotificationPopover"
      :close-on-content-click="false"
      @input="toggleNotificationPopover($event)"
      offset-y
    >
      <v-btn class="action-btn" slot="activator" icon depressed small>
        <v-badge
          color="red"
          class="ipe-badge"
          overlap
        >
          <i class="fa fa-envelope"></i>
          <template v-slot:badge>
            <span>2</span>
          </template>
        </v-badge>
      </v-btn>
      <div class="notification-popover">
        <div class="flex-start">
          <div class="left-time">10:39</div>
          <div>
            <p>Fu Shou Yuan International Group Ltd</p>
            <p>Bid Prices is 6.7200</p>
            <span class="notification-time">26-Jun-2019 17:39:04 GMT</span>
          </div>
        </div>
        <v-divider/>
        <div class="flex-start">
          <div class="left-time">10:39</div>
          <div>
            <p>Fu Shou Yuan International Group Ltd</p>
            <p>Bid Prices is 6.7200</p>
            <span class="notification-time">26-Jun-2019 17:39:04 GMT</span>
          </div>
        </div>
        <v-divider/>
        <div class="popover-bottom">
          <v-btn small depressed class="ok-btn" block color="#39d" @click="toggleNotificationPopover(false)">{{$t('ok')}}</v-btn>
        </div>
      </div>
    </v-menu>
    <v-btn class="action-btn" slot="activator" icon depressed small @click="toggleSettingsDialog(true)">
      <i class="fa fa-cog"></i>
    </v-btn>
    <button class="logout ipe-btn" type="button">登出</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'ActionMenu',
  data() {
    return {
      isOpenNotificationPopover: false,
    }
  },
  computed: {
    ...mapState('settings', {
      tradingClickMode: state => state.settings.platform.tradingClickMode,
    })
  },
  methods: {
    toggleSettingsDialog(e) {
      this.$store.commit('settings/toggleSettingsDialog', e);
    },
    toggleNotificationPopover(e) {
      this.isOpenNotificationPopover = e;
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
  .action-btn {
    color: #888;
    text-transform: none;
    i {
      font-size: 18px;
    }
  }
  .logout {
      white-space: nowrap;
      background: transparent;
      color: #888;
      font-size: 15px;
      text-transform: none;
    &:hover {
      color: #111;
    }
  }
  .click-status {
    position: relative;
    span {
      position: absolute;
      left: 50%;
      font-size: 9px;
      color: white;
      top: 48%;
      transform: translate(-50%, -50%);
    }
  }
}
.notification-popover {
  width: 300px;
  height: 100%;
  background: white;
  .flex-start {
    padding: 8px;
    display: flex;
    align-items: flex-start;
    .left-time {
      margin-right: 8px;
    }
    .notification-time {
      color: #666;
      font-size: 12px;
    }
  }
  .popover-bottom {
    padding: 0 8px;
    .ok-btn {
      color: white;
    }
  }
}
</style>
