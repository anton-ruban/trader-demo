<template>
  <div class="settings-panel">
    <h1>图表个性化设置</h1>
    <div class="setting-item">
      <span class="label">注释</span>
      <v-icon>chevron_right</v-icon>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">指标</span>
      <v-icon>chevron_right</v-icon>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">图表类型</span>
      <v-icon>chevron_right</v-icon>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">通用</span>
      <v-icon>chevron_right</v-icon>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">线条和颜色</span>
      <v-icon>chevron_right</v-icon>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>

export default {
  name: 'ChartSettings',
  components: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.settings-panel {
  width: 100%;
  height: 100%;
  h1 {
    text-align: center;
    color: #888;
    font-size: 14px;
    line-height: 37px;
    height: 37px;
    border-bottom: 1px solid #fff;
  }
  .setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    .label {
      font-size: 14px;
    }
  }
}
</style>
