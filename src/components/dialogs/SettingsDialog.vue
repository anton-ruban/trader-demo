<template>
  <v-dialog :value="isOpenSettingsDialog" width="580" @input="toggleSettingsDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="设置" hideBack @close="toggleSettingsDialog(false)" />
      <div class="dialog-body">
        <div class="settings-category">
          <ul>
            <li :class="[{'active': selectedCategoryKey === key}]" v-for="(value, key) in settings" :key="key" @click="selectSettingsCategory(key)">{{value.label}}</li>
          </ul>
          <div class="spacer">
            <a>免责声明</a>
          </div>
        </div>
        <div class="settings-section">
          <PlatformSettings v-if="selectedCategoryKey === 'platform'"/>
          <RegionSettings v-if="selectedCategoryKey === 'region'"/>
          <TradingProductsSettings v-if="selectedCategoryKey === 'trading_products'"/>
          <ChartSettings v-if="selectedCategoryKey === 'chart'"/>
          <NotificationSettings v-if="selectedCategoryKey === 'notification'"/>
          <ContactSettings v-if="selectedCategoryKey === 'contact'"/>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import PlatformSettings from '../settings/PlatformSettings.vue';
import RegionSettings from '../settings/RegionSettings.vue';
import TradingProductsSettings from '../settings/TradingProductsSettings.vue';
import ChartSettings from '../settings/ChartSettings.vue';
import NotificationSettings from '../settings/NotificationSettings.vue';
import ContactSettings from '../settings/ContactSettings.vue';
import { mapState } from 'vuex';

export default {
  name: 'TradingPanelDialog',
  components: {
    TitleBar,
    PlatformSettings,
    RegionSettings,
    TradingProductsSettings,
    ChartSettings,
    NotificationSettings,
    ContactSettings
  },
  data() {
    return {
      selectedCategoryKey: 'platform',
    }
  },
  methods: {
    toggleSettingsDialog (e) {
      this.$store.commit('settings/toggleSettingsDialog', e);
    },
    selectSettingsCategory(e) {
      this.selectedCategoryKey = e;
    },
  },
  computed: {
    ...mapState('settings', {
      isOpenSettingsDialog: state => state.isOpenSettingsDialog,
      settings: state => state.settings,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-layout {
  background-image: linear-gradient(#fefefe,#fff,#fff,#fefefe);
}
.dialog-body {
  display: flex;
  height: 550px;
  .settings-category {
    width: 148px;
    display: flex;
    flex-direction: column;
    ul {
      padding: 0;
      li {
        color: #666;
        border-right: 1px solid rgba(0,0,0,.12);
        border-bottom: 1px solid rgba(0,0,0,.12);
        padding: 8px 24px 8px 8px;
        cursor: pointer;
        &.active {
          border-right: transparent;
          color: #111;
        }
      }
    }
    .spacer {
      flex: 1;
      border-right: 1px solid rgba(0,0,0,.12);
      position: relative;
      a {
        position: absolute;
        bottom: 8px;
        left: 8px;
      }
    }
  }
  .settings-section {
    flex: 1;
    padding: 0 16px;
  }
}
</style>
