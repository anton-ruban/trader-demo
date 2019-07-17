<template>
  <div class="signin-container">   
    <div class="tab-container">
      <div class="item-row">
        <span>邮箱:</span>
        <input v-model="username" placeholder="请输入邮箱号码" :disabled="isLoading"/>
      </div>
      <div class="item-row">
        <span>登入密码:</span>
        <input v-model="password" type="password" placeholder="请输入登入密码，密码长度8-20位" :disabled="isLoading"/>
      </div>
      <div class="item-checkbox">
        <v-checkbox
          label="身份认证"
          v-model="isProved"
        ></v-checkbox>
        <v-checkbox
          label="同意我们的隐私条款"
          v-model="isAgreed">

          <template v-slot:label>
            <a href="/#/warning">同意我们的隐私条款</a>
          </template>
        </v-checkbox>
      </div>
      <v-btn color="primary" depressed large class="signin-btn" @click="signIn()" :disabled="username.length === 0 || password.length === 0 || isLoading">进入</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'SignIn',
  data: function () {
    return {
      username: '',
      password: '',
      isProved: false,
      isAgreed: false,
    }
  },
  methods: {
    ...mapMutations('error', ['updateSnackBar']),
    async signIn() {
      this.$store.commit('auth/loading', true);
      try {
        await this.$store.dispatch('auth/signIn', {username: this.username, password: this.password});
        this.$router.push({ path: 'main/trading' });
      } catch (e) {
        this.updateSnackBar({
          message: e,
          color: 'error'
        });
      }
    },
    selectSignUpTab (e) {
      this.$store.commit('auth/selectSignUpTab', e);
    }
  },
  computed: {
    ...mapState('auth', {
      signUpTabs: state => state.signUpTabs,
      isLoading: state => state.isLoading,
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .signin-container {
    margin: 100px auto;
    width: 650px;
    border: 1px solid var(--border-color-row);
    .loading {
      position: absolute;
      margin-left: 25%;
      margin-top: 10%;
    }
    .tab-name {
      font-size: 20px;
    }
    .tab-container {
      padding: 60px 40px 55px;
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
      input {
        line-height: 54px;
        background: var(--bg-color-inner-panel);
        border: 1px solid var(--border-color-row);
        flex: 1;
        padding: 0 10px;
      }
    }
    .item-checkbox {
      margin-left: 160px;
    }
    .signin-btn {
      margin-left: 160px;
      width: calc(100% - 160px);
    }
    
  }
</style>
