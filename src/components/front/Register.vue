<template>
  <div class="register-container">
    <div class="head">
      <img alt="logo" src="../../assets/logo.png"/>
      <h2>INTELLIGENT PRICING ENGINE</h2>
    </div>
    <div class="main-body">
      <div class="item-row">
        <span>账户:</span>
        <input v-model="username" placeholder="请输入账户号码" :disabled="isLoading"/>
      </div>
      <div class="item-row">
        <span>密码:</span>
        <input v-model="password" type="password" placeholder="请输入密码" :disabled="isLoading"/>
      </div>
      <v-btn color="primary" block depressed class="register-btn" @click="signIn()" :disabled="username.length === 0 || password.length === 0 || isLoading">登录</v-btn>
      <div class="bottom-links">
        <a>忘记密码</a>
        <p>登录即表示我已阅读同意该<a>使用条款</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Register',
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
  .register-container {
    margin: 100px auto;
    width: 420px;
    border: 1px solid #ccc;
    .head {
      display: flex;
      padding: 10px 30px;
      background: #ccc;
      align-items: center;
      img {
        margin-right: 20px;
      }
      h2 {
        font-size: 18px;
      }
    }
    .main-body {
      padding: 20px 30px 10px;
      .item-row {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-bottom: 10px;
        height: 54px;
        span {
          width: 70px;
        }
        input {
          background: #fff;
          border: 1px solid #ddd;
          flex: 1;
          padding: 0 5px;
        }
      }
      .bottom-links {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
</style>
