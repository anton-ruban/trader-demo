<template>
  <v-dialog :value="isOpenModifyPasswordDialog" width="600" @input="toggleModifyPasswordDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="修改登录密码" hideBack @close="toggleModifyPasswordDialog(false)" />
      <div class="dialog-body">
        <v-text-field
          v-model="oldPassword"
          label="原密码"
        ></v-text-field>
        <v-text-field
          v-model="newPassword"
          label="新密码"
        ></v-text-field>
        <v-text-field
          v-model="confirmPassword"
          label="确认新密码"
        ></v-text-field>
        <v-text-field
          v-model="secretOrder"
          label="动态密令"
        ></v-text-field>
        <v-checkbox
          label="身份认证"
          v-model="isProved"
        ></v-checkbox>
        <v-btn depressed block color="success" small @click="toggleModifyPasswordDialog(false)">取消</v-btn>
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
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      secretOrder: '',
      isProved: false,
    }
  },
  components: {
    TitleBar,
  },
  methods: {
    toggleModifyPasswordDialog (e) {
      this.$store.commit('account/toggleModifyPasswordDialog', e);
    },
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
