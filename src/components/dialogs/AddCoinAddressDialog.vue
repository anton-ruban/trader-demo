<template>
  <v-dialog :value="isOpenAddCoinAddressDialog" width="600" @input="toggleAddCoinAddressDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="添加提币地址" hideBack @close="toggleAddCoinAddressDialog(false)" />
      <div class="dialog-body">
        <v-text-field
          v-model="coinType"
          label="币种"
        ></v-text-field>
        <v-text-field
          v-model="address"
          label="提现地址"
        ></v-text-field>
        <v-text-field
          v-model="description"
          label="备注(个人补充说明)"
        ></v-text-field>
        <v-text-field
          v-model="secretOrder"
          label="动态密令"
        ></v-text-field>
        <div class="bottom-div">
          <v-btn depressed small @click="toggleAddCoinAddressDialog(false)">取消</v-btn>
          <v-btn depressed small color="primary" @click="toggleAddCoinAddressDialog(false)">保存</v-btn>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'AddCoinAddressDialog',
  data() {
    return {
      coinType: '',
      address: '',
      description: '',
      secretOrder: ''
    }
  },
  components: {
    TitleBar,
  },
  methods: {
    toggleAddCoinAddressDialog (e) {
      this.$store.commit('account/toggleAddCoinAddressDialog', e);
    },
  },
  computed: {
    ...mapState('account', {
      isOpenAddCoinAddressDialog: state => state.isOpenAddCoinAddressDialog,
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
  padding: 20px;
  .bottom-div {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
