<template>
  <div class="content-head">
    <div class="overview-head">
      <div class="flex-container">
        <img src="../../assets/fu.png"/>
        <div>
          <div class="instr-name">{{selectedContract.product}}</div>
          <div class="instr-desc">{{selectedContract.description}}</div>
        </div>
      </div>
      <div class="flex-container">
        <button class="ipe-btn action-button" @click="toggleTradingConditionsDialog(true)"><i class="fa fa-info-circle"></i></button>
        <button class="ipe-btn action-button"><i class="fa fa-star"></i></button>
        <button class="ipe-btn action-button" @click="toggleEditPriceAlert(true)"><i class="fa fa-bell"></i></button>
        <button class="ipe-btn action-button"><i class="fa fa-adjust"></i></button>
        <v-btn depressed small color="primary" @click="toggleTradingPanelDialog(true)">交易</v-btn>
      </div>
    </div>
    <div class="overview-body">
      <div v-for="(value, key) in overviews[selectedOverviewId]" :key="key" class="item">
        <div class="item-label">{{value.label}}</div>
        <div>{{value.value}}</div>
      </div>
    </div>
    <div class="overview-foot">
      <div class="realtime-process">
        <img src="../../assets/real-time.png"/>
        <span>Realtime process</span>
      </div>
      <AvailableStatus />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import AvailableStatus from '../controls/AvailableStatus.vue';
export default {
  name: 'Overview',
  components: {
    AvailableStatus
  },
  methods: {
    toggleTradingPanelDialog (e) {
      this.$store.commit('trading/toggleTradingPanelDialog', e);
    },
    toggleEditPriceAlert(e) {
      this.$store.commit('watch/toggleEditPriceAlert', e);
    },
    toggleTradingConditionsDialog(e) {
      this.$store.commit('overview/toggleTradingConditionsDialog', e);
    }
  },
  computed: {
    ...mapState('overview', {
      overviews: state => state.overviews,
      selectedOverviewId: state => state.selectedOverviewId
    }),
    ...mapGetters('contracts', {
      selectedContract: 'selectedContract',
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .content-head {
    background: var(--bg-color-inner-panel);
    .overview-head {
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .flex-container {
        display: flex;
        align-items: center;
        img {
          margin-right: 4px;
        }
        .instr-name {
          font-size: 12px;
          color: var(--text-color-active);
          line-height: 12px;
        }
        .instr-desc {
          font-size: 11px;
          color: #888;
          line-height: 11px;
          margin-top: 3px;
        }
        .action-button {
          margin-right: 8px;
          background: transparent;
          color: #888;
          font-size: 12px;
          &:hover {
            color: var(--text-color-active);
          }
        }
        .v-btn {
          color: #fff;
          font-weight: bold;
          margin: 0;
          &:hover {
            background: #4ae;
          }
        }
      }
    }
    .overview-body {
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-top: 1px solid var(--border-color-row);
      border-bottom: 1px solid var(--border-color-row);
      .item {
        text-align: center;
        padding: 4px 8px;
        display: flex;
        line-height: 1;
        flex-direction: column;
        align-items: center;
        .item-label {
          font-size: 11px;
          color: #888;
          margin-bottom: 4px;
        }
      }
    }
    .overview-foot {
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .realtime-process {
        display: flex;
        align-items: center;
        font-size: 11px;
        color: #888;
      }
    }
  }
</style>
