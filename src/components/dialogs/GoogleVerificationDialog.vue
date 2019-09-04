<template>
  <v-dialog :value="isOpenGoogleVerificationDialog" width="1000" @input="toggleGoogleVerificationDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="谷歌验证码" hideBack @close="toggleGoogleVerificationDialog(false)" />
      <div class="dialog-body">
        <h1>1. 在应用商店中搜素“Google Authentication"或扫码下载应用</h1>
        <div class="row-section">
          <div>
            <h5 class="mb-2">Android</h5>
            <img src="../../assets/android.png"/>
          </div>
          <div class="ml-5">
            <h5 class="mb-2">iOS</h5>
            <img src="../../assets/ios.png"/>
          </div>
        </div>
        <h1>2. 安装完成后打开Google Authentication, 点击右上角（安卓为右下角）的“+”， 选择”扫码“，得到6位动态谷歌验证码</h1>
        <div class="row-section">
          <div class="section-div">
            <h5 class="mb-2">二维码</h5>
            <img :src="qrCode" class="mb-3"/>
            <h5 class="mb-2">密钥</h5>
            <h4>{{secretKey}}</h4>
          </div>
        </div>
        <h1>3. 请将获得的谷歌验证码填入下方输入框（需要在验证码时效内），并完成验证</h1>
        <div class="row-section">
          <div class="section-div">
            <v-text-field
              v-model="firstVerificationCode"
              label="谷歌验证码 1"
              required
            ></v-text-field>
            <v-text-field
              v-model="secondVerificationCode"
              label="谷歌验证码 2"
              required
            ></v-text-field>
            <v-btn depressed block color="primary" :disabled="!firstVerificationCode || !secondVerificationCode" @click="handleSubmit()">{{$t('submit')}}</v-btn>
          </div>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'GoogleVerificationDialog',
  data() {
    return {
      firstVerificationCode: '',
      secondVerificationCode: '',
    }
  },
  components: {
    TitleBar,
  },
  methods: {
    toggleGoogleVerificationDialog (e) {
      this.$store.commit('account/toggleGoogleVerificationDialog', e);
    },
    async handleSubmit() {
      this.toggleGoogleVerificationDialog(false);
      try {
        await this.$store.dispatch('auth/gAuthFirstBind', {
          verificationCodes: `${this.firstVerificationCode}###${this.secondVerificationCode}`,
          userId: this.authInfo.id,
        });
        this.$toast.success('成功');
      } catch(e) {
        this.$toast.error(e);
      }
    }
  },
  computed: {
    ...mapState('account', {
      isOpenGoogleVerificationDialog: state => state.isOpenGoogleVerificationDialog,
    }),
    ...mapState('auth', {
      authInfo: state => state.authInfo,
      secretKey: state => state.secretKey,
      qrCode: state => state.qrCode,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-layout {
  background: var(--bg-color-inner-panel);
}
.dialog-body {
  padding: 16px;
  h1 {
    font-size: 16px;
  }
  .row-section {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    .section-div {
      width: 380px;
    }
  }
}
</style>
