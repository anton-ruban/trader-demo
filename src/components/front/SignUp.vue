<template>
  <div class="signup-container">
    <v-tabs
      slot="extension"
      :value="signUpTabs.selectedTabId"
      @change="selectSignUpTab($event)"
      fixed-tabs
      color="transparent"
    >
      <v-tab
        v-for="tab in signUpTabs.tabs"
        :key="tab.id"
        :href="`#${tab.id}`"
        class="tab-name"
      >
        {{tab.tabName}}
      </v-tab>
    </v-tabs>

    <div class="tab-container" v-if="signUpTabs.selectedTabId === 'tab-0'">
      <div class="item-row">
        <span>手机号码:</span>
        <div class="flex-container">
          <div class="dial-code">+86</div>
          <input type="text" placeholder="请输入手机号码"/>
        </div>
      </div>
      <div class="item-row">
        <span>手机验证码:</span>
        <div class="flex-container">
          <input type="text" placeholder="请输入手机验证码"/>
          <v-btn color="primary" disabled depressed>获取验证码</v-btn>
        </div>
      </div>
      <div class="item-row">
        <span>登入密码:</span>
        <input type="password" placeholder="请输入登入密码，密码长度8-20位"/>
      </div>
      <div class="item-row">
        <span>重复密码:</span>
        <input type="password" placeholder="请重复密码"/>
      </div>
      <div class="item-row">
        <span>邀请码:</span>
        <input type="text" placeholder="非必填项"/>
      </div>
      <v-btn color="primary" disabled large depressed class="signup-btn ipe-btn" @click="signUp()">注册</v-btn>
    </div>
    <div class="tab-container" v-if="signUpTabs.selectedTabId === 'tab-1'">
      <div class="item-row">
        <span>邮箱:</span>
        <input type="email" v-model="email" placeholder="请输入邮箱号码"/>
      </div>
      <div class="item-row">
        <span>邮箱验证码:</span>
        <div class="flex-container">
          <input type="text" v-model="emailVerificationCode" placeholder="请输入邮箱验证码"/>
          <v-btn color="primary" :disabled="!email" depressed @click="handleSendVerificationCodeToEmail()">获取验证码</v-btn>
        </div>
      </div>
      <div class="item-row">
        <span>登入密码:</span>
        <input type="password" v-model="password" placeholder="请输入登入密码，密码长度8-20位"/>
      </div>
      <div class="mb-4">
        <div class="item-row mb-0">
          <span>重复密码:</span>
          <input type="password" v-model="confirmPassword" placeholder="请重复密码"/>
        </div>
        <p class="error-text mt-1" v-if="confirmPassword.length > 0 && confirmPassword !== password">Not match with password</p>
      </div>
      <div class="item-row">
        <span>邀请码:</span>
        <input type="text" placeholder="非必填项"/>
      </div>
      <v-btn color="primary" :disabled="!isValidForRegister" depressed large class="signup-btn ipe-btn" @click="signUp()">注册</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      emailVerificationCode: '',
    }
  },
  methods: {
    async signUp() {
      try {
        await this.$store.dispatch('auth/register', {
          type: 1,
          phone: "",
          email: this.email,
          pwd: this.password,
          code: this.emailVerificationCode
        });
        this.$router.push({ path: 'signIn' })
      } catch(e) {
        this.$toast.error(e);
      }
    },
    selectSignUpTab (e) {
      this.$store.commit('auth/selectSignUpTab', e);
    },
    async handleSendVerificationCodeToEmail() {
      try {
        await this.$store.dispatch('auth/sendVerificationCodeToEmail', this.email);
        this.$toast.success(`Sent verification code to ${this.email}`);
      } catch(e) {
        this.$toast.error(`Failed to send verification code`);
      }
    }
  },
  components: {
  },
  computed: {
    ...mapState('auth', {
      signUpTabs: state => state.signUpTabs,
    }),
    isValidForRegister() {
      return this.confirmPassword.length > 0 && this.confirmPassword === this.password && this.email.length > 0 && this.emailVerificationCode.length > 0;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .signup-container {
    margin: 100px auto;
    width: 650px;
    border: 1px solid var(--border-color-row);
    .tab-name {
      font-size: 20px;
    }
    .tab-container {
      padding: 60px 40px 55px;
    }
    .error-text {
      color: red;
      margin-left: 160px;
    }
    .item-row {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-bottom: 24px;
      height: 54px;
      span {
        width: 120px;
        text-align: right;
        font-weight: 500;
        margin-right: 40px;
      }
      .flex-container {
        display: flex;
        flex: 1;
        align-items: center;
        .dial-code {
          width: 75px;
          text-align: center;
          background: var(--bg-color-inner-panel);
          line-height: 54px;
          border:1px solid #ddd;
        }
        .v-btn {
          margin-top: 0;
          margin-bottom: 0;
          height: 54px;
          margin-right: 0;
        }
      }
      input {
        line-height: 54px;
        background: var(--bg-color-inner-panel);
        border: 1px solid var(--border-color-row);
        flex: 1;
        padding: 0 10px;
      }
    }
    .signup-btn {
      margin-left: 160px;
      width: calc(100% - 160px);
    }
  }
</style>
