<template>
  <div class="settings-panel">
    <div class="setting-item">
      <span class="label">交易</span>
      <div>
        <v-radio-group v-model="tradeClickMode" row hide-details>
          <v-radio color="#111" label="单击" value="单击"></v-radio>
          <v-radio color="#111" label="双击" value="双击"></v-radio>
        </v-radio-group>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">交易按钮颜色</span>
      <div>
        <v-radio-group v-model="transactionButtonColor" row hide-details>
          <v-radio color="#111" label="默认" value="默认"></v-radio>
          <v-radio color="#111" label="替代" value="替代"></v-radio>
        </v-radio-group>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">即时净额结算</span>
      <div>
        <v-radio-group v-model="instantOnlinePaymentMode" row hide-details>
          <v-radio color="#111" label="开" value="开"></v-radio>
          <v-radio color="#111" label="关" value="关"></v-radio>
        </v-radio-group>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">自动登出</span>
      <div class="overflow-div">
        <v-overflow-btn
          :items="autoLogout"
          label="自动登出"
          hide-details
        ></v-overflow-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">主题</span>
      <div>
        <v-radio-group v-model="theme" row hide-details>
          <v-radio color="#111" label="白" value="白"></v-radio>
          <v-radio color="#111" label="黑" value="黑"></v-radio>
        </v-radio-group>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">显示交易信号</span>
      <div>
        <v-radio-group v-model="displayTradeSignal" row hide-details>
          <v-radio color="#111" label="开" value="开"></v-radio>
          <v-radio color="#111" label="关" value="关"></v-radio>
        </v-radio-group>
      </div>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>

export default {
  name: 'PlatformSettings',
  components: {
  },
  data() {
    return {
      tradeClickMode: '双击',
      instantOnlinePaymentMode: '关',
      autoLogout: ['5 分钟', '10 分钟', '15 分钟', '30 分钟', '60 分钟', '120 分钟', '180 分钟', '360 分钟'],
      theme: '白',
      transactionButtonColor: '默认',
      displayTradeSignal: '开',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.settings-panel {
  width: 100%;
  height: 100%;
  .setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    .label {
      font-size: 14px;
    }
    .v-input--radio-group {
      margin-top: 0;
      padding-top: 0;
    }
    .overflow-div {
      width: 140px;
      text-align: right;
    }
    .v-overflow-btn {
      margin-top: 0;
    }
  }
}
</style>
