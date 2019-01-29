<template>
  <div class="settings-panel">
    <span class="label-block">平台</span>
    <div class="checkbox-list">
      <div class="checkbox-item">
        <v-icon>check</v-icon>仓位
      </div>
      <div class="checkbox-item">
        <v-icon>check</v-icon>订单
      </div>
      <div class="checkbox-item">
        <v-icon>check</v-icon>账户/投资组合
      </div>
      <div class="checkbox-item">
        <v-icon>check</v-icon>通用
      </div>
      <div class="checkbox-item">
        <v-icon>check</v-icon>追加保证金通知
      </div>
      <div class="checkbox-item">
        <v-icon>check</v-icon>价格提醒
      </div>
      <div class="checkbox-item">
        <v-icon>check</v-icon>见解
      </div>
    </div>
    <div class="setting-item">
      <span class="label">分组</span>
      <div class="overflow-div">
        <v-overflow-btn
          :items="grouping"
          label="分组"
          hide-details
        ></v-overflow-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">电邮</span>
      <div class="overflow-div">
        <v-text-field
          v-model="email"
          label="E-mail"
          solo
          hide-details
        ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotificationSettings',
  components: {
  },
  data() {
    return {
      grouping: ['单独显示', '分组显示'],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.settings-panel {
  width: 100%;
  height: 100%;
  .label-block {
    color: #111;
    font-size: 14px;
    line-height: 34px;
    height: 34px;
  }
  .checkbox-list {
    padding: 4px;
    background: #ddd;
    .checkbox-item {
      width: 50%;
      display: inline-block;
      height: 20px;
      .v-icon {
        font-size: 15px;
        margin-right: 4px;
        color: #111;
      }
    }
  }
  .setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    .overflow-div {
      width: 200px;
      text-align: right;
    }
    .label {
      font-size: 14px;
    }
    .v-overflow-btn {
      margin-top: 0;
    }
  }
}
</style>
