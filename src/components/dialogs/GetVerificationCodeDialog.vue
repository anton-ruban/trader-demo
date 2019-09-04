<template>
  <v-dialog :value="isOpenGetVerificationCodeDialog" width="300" @input="toggleGetVerificationCodeDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="获取验证码" hideBack @close="toggleGetVerificationCodeDialog(false)" />
      <div class="dialog-body">
        <v-btn depressed block color="primary" @click="handleSubmit()">获取验证码</v-btn>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'GetVerificationCodeDialog',
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
  },
  components: {
    TitleBar,
  },
  methods: {
    toggleGetVerificationCodeDialog (e) {
      this.$store.commit('account/toggleGetVerificationCodeDialog', e);
    },
    async handleSubmit() {
      this.toggleGetVerificationCodeDialog(false);
      try {
        await this.$store.dispatch('auth/getGAuthQrCode', {
          userId: this.authInfo.id,
          userAccount: this.authInfo.username
        });
        this.$store.commit('account/toggleGoogleVerificationDialog', true);
      } catch(e) {
        this.$toast.error(e);
      }
    }
  },
  computed: {
    ...mapState('account', {
      isOpenGetVerificationCodeDialog: state => state.isOpenGetVerificationCodeDialog,
    }),
    ...mapState('auth', {
      authInfo: state => state.authInfo,
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
  padding: 8px 16px;
}
</style>
