<template>
  <div class="person-center">
    <v-tabs
      v-model="active"
    >
      <v-tab
        v-for="t in personCenterTabs"
        :key="t.id"
        ripple
      >
        {{t.name}}

      </v-tab>
      <v-tab-item
        v-for="t in personCenterTabs"
        :key="t.id"
      >
        <v-card flat class="card-container">
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.currency }}</td>
              <td>{{ props.item.available }}</td>
              <td>{{ props.item.freeze }}</td>
              <td>{{ props.item.valuationUSD }}</td>
              <td>{{ props.item.valuationCNY }}</td>
              <td>
                <v-btn depressed small color="success" outline @click="toggleRechargeDialog(true)">充值</v-btn>
                <v-btn depressed small color="success" outline>提现</v-btn>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  name: 'PersonCenter',
  methods: {
    toggleRechargeDialog(e) {
      this.$store.commit('account/toggleRechargeDialog', e);
    },
  },
  data () {
    return {
      active: null,
      headers: [
        {
          text: '币种',
          align: 'left',
          sortable: false,
          value: 'currency'
        },
        { text: '可用', value: 'available', sortable: false, align: 'left'},
        { text: '冻结', value: 'freeze',sortable: false, align: 'left'},
        { text: '估值(USD)', value: 'valuationUSD', sortable: false, align: 'left'},
        { text: '估值(CNY)', value: 'valuationCNY', sortable: false, align: 'left'},
        { text: '', value: 'action', sortable: false, align: 'left'}
      ],
      desserts: [
        {
          currency: 'BTC',
          available: 100.000000000000,
          freeze: 0.000000000000000,
          valuationUSD: null,
          valuationCNY: null
        },
        {
          currency: 'ETH',
          available: 100.000000000000,
          freeze: 0.000000000000000,
          valuationUSD: null,
          valuationCNY: null
        },
        {
          currency: 'BCHABC',
          available: 100.000000000000,
          freeze: 0.000000000000000,
          valuationUSD: null,
          valuationCNY: null
        },
        {
          currency: 'LTC',
          available: 100.000000000000,
          freeze: 0.000000000000000,
          valuationUSD: null,
          valuationCNY: null
        },
      ]
    }
  },
  computed: {
    ...mapState('tabs', {
      personCenterTabs: state => state.personCenterTabs,
      selectedPersonCenterTabIndex: state => state.selectedPersonCenterTabIndex
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.person-center {
  width: 100%;
  .card-container {
    margin-top: 30px;
  }
}

</style>
