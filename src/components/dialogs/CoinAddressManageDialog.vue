<template>
  <v-dialog :value="isOpenCoinAddressManageDialog" width="580" @input="toggleCoinAddressManageDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="常用提币地址管理" hideBack @close="toggleCoinAddressManageDialog(false)" />
      <div class="dialog-body">
        <v-card flat class="table-card">
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.currency }}</td>
              <td>{{ props.item.address }}</td>
              <td>{{ props.item.description }}</td>
              <td>
                <v-btn depressed small color="success" outline>修改</v-btn>
                <v-btn depressed small color="success" outline>削除</v-btn>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'CoinAddressManageDialog',
  components: {
    TitleBar,
  },
  methods: {
    toggleCoinAddressManageDialog (e) {
      this.$store.commit('account/toggleCoinAddressManageDialog', e);
    },
    openAddCoinAddressDialog() {
      this.$store.commit('account/toggleAddCoinAddressDialog', true);
    }
  },
  computed: {
    ...mapState('account', {
      isOpenCoinAddressManageDialog: state => state.isOpenCoinAddressManageDialog,
    }),
  },
  data() {
    return {
      headers: [
        {
          text: '币种',
          align: 'left',
          sortable: false,
          value: 'currency'
        },
        { text: '地址', value: 'address', sortable: false, align: 'left'},
        { text: '备注', value: 'description',sortable: false, align: 'left'},
        { text: '', value: 'action', sortable: false, align: 'right'}
      ],
      desserts: [
        {
          currency: 'BTC',
          address: 100,
          description: 0,
        },
        {
          currency: 'ETH',
          address: 100,
          description: 0,
        },
        {
          currency: 'BCHABC',
          address: 100,
          description: 0,
        },
        {
          currency: 'LTC',
          address: 100,
          description: 0,
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-layout {
  background: var(--bg-color-inner-panel);
}
.dialog-body {
  display: flex;
  padding: 16px;
  .table-card {
    margin: 0 auto;
  }
}
</style>
