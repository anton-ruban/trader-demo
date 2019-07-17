<template>
  <div class="safe-setup">
    <div class="setting-row title-row">
      <h1>安全设置</h1>
      <div class="warning-red">
        <v-icon>warning</v-icon>
        修改以下任何一个安全项目， 24少时内禁止提币
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-row">
      <div class="setting-label">登入密码</div>
      <div class="setting-value">*******</div>
      <v-btn depressed color="primary" @click="openModifyPasswordDialog()">修改</v-btn>
    </div>
    <v-divider></v-divider>
    <div class="setting-row">
      <div class="setting-label">手机号</div>
      <div class="setting-value">用于登录，提现，安全设置时使用，激活后不可修改</div>
      <v-btn depressed color="primary">绑定</v-btn>
    </div>
    <v-divider></v-divider>
    <div class="setting-row">
      <div class="setting-label">邮箱</div>
      <div class="setting-value">776***@***qa.com<br/>用于登录，提现，安全设置时使用，激活后不可修改</div>
      <v-btn depressed color="primary" disabled>已绑定</v-btn>
    </div>
    <v-divider></v-divider>
    <div class="setting-row">
      <div class="setting-label">OTP<v-icon>info</v-icon></div>
      <div class="setting-value">用于提现，修改密码和安全设计验证</div>
      <v-btn depressed color="primary">换绑</v-btn>
    </div>
    <v-divider></v-divider>
    <div class="setting-row">
      <div class="setting-label">资金密码</div>
      <div class="setting-value">用于提现时使用</div>
      <v-btn depressed color="primary">设置</v-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SafeConfiguration',
  methods: {
    openModifyPasswordDialog() {
      this.$store.commit('account/toggleModifyPasswordDialog', true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.safe-setup {
  width: 100%;
  .setting-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    &.title-row {
      margin-right: 10px;
      .warning-red {
        font-weight: 700;
      }
    }
    .setting-label {
      color: var(--text-color-active);
      font-weight: 500;
    }
    .setting-value {
      color: #888;
      width: 300px;
    }
    i {
      font-size: 16px;
    }
  }
}

</style>
