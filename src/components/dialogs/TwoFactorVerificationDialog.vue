<template>
  <v-dialog :value="isOpenTwoFactorVerificationDialog" width="450" @input="toggleTwoFactorVerificationDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="谷歌验证码" hideBack @close="toggleTwoFactorVerificationDialog(false)" />
      <div class="dialog-body">
        <v-text-field
          v-model="emailVerificationCode"
          label="邮箱验证码"
          required
        ></v-text-field>
        <v-text-field
          v-model="twoFactorVerificationCode"
          label="谷歌验证码"
          required
        ></v-text-field>
        <v-btn depressed block color="primary" @click="toggleTwoFactorVerificationDialog(false)">{{$t('submit')}}</v-btn>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'TwoFactorVerificationDialog',
  data() {
    return {
      emailVerificationCode: '',
      twoFactorVerificationCode: '',
    }
  },
  components: {
    TitleBar,
  },
  methods: {
    toggleTwoFactorVerificationDialog (e) {
      this.$store.commit('account/toggleTwoFactorVerificationDialog', e);
    },
  },
  computed: {
    ...mapState('account', {
      isOpenTwoFactorVerificationDialog: state => state.isOpenTwoFactorVerificationDialog,
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
}
</style>
