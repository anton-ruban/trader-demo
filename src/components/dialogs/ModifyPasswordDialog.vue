<template>
  <v-dialog :value="isOpenModifyPasswordDialog" width="600" @input="toggleModifyPasswordDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="修改登录密码" hideBack @close="toggleModifyPasswordDialog(false)" />
      <div class="dialog-body">
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="oldPassword"
            type="password"
            :rules="[v => !!v || 'Old password is required']"
            label="原密码"
            required
          ></v-text-field>
          <v-text-field
            v-model="newPassword"
            :rules="[v => !!v || 'New password is required']"
            type="password"
            label="新密码"
            required
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            type="password"
            :rules="[v => !!v || 'Confirm password is required', v => newPassword === v || 'Password does not match']"
            required
            label="确认新密码"
          ></v-text-field>
          <v-btn
                depressed
                block
                color="primary"
                :disabled="!valid"
                @click="submit()">
            {{$t('submit')}}
          </v-btn>
        </v-form>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'ModifyPasswordDialog',
  data() {
    return {
      valid: false,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
  },
  components: {
    TitleBar,
  },
  methods: {
    toggleModifyPasswordDialog (e) {
      this.$store.commit('account/toggleModifyPasswordDialog', e);
    },
    async submit() {
      const authInfo = JSON.parse(localStorage.getItem('authInfo'));
      try {
        await this.$store.dispatch('auth/changePassword', {
          id: authInfo.id,
          oldPWD: this.oldPassword,
          newPWD: this.newPassword,
        });
        this.toggleModifyPasswordDialog(false);
        this.$toast.success('修改成功');
      } catch(e) {
        this.$toast.error(e);
      }
    }
  },
  computed: {
    ...mapState('account', {
      isOpenModifyPasswordDialog: state => state.isOpenModifyPasswordDialog,
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
