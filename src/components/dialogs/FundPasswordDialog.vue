<template>
  <v-dialog :value="isOpenFundPasswordDialog" width="400" @input="toggleFundPasswordDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="资金密码" hideBack @close="toggleFundPasswordDialog(false)" />
      <div class="dialog-body">
        <v-text-field
          v-model="fundPassword"
          type="password"
          label="原密码"
        ></v-text-field>
        <v-text-field
          v-model="confirmFundPassword"
          type="password"
          label="确认新密码"
        ></v-text-field>
        <v-btn depressed block color="primary" @click="toggleFundPasswordDialog(false)">{{$t('submit')}}</v-btn>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'FundPasswordDialog',
  data() {
    return {
      fundPassword: '',
      confirmFundPassword: '',
    }
  },
  components: {
    TitleBar,
  },
  methods: {
    toggleFundPasswordDialog (e) {
      this.$store.commit('account/toggleFundPasswordDialog', e);
    },
  },
  computed: {
    ...mapState('account', {
      isOpenFundPasswordDialog: state => state.isOpenFundPasswordDialog,
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
