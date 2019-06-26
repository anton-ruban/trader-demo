<template>
  <div class="settings-panel">
    <div class="head"> {{$t('select_trading_products')}} </div>
    <v-checkbox
            v-model="future"
            color="#111"
            :ripple="false"
            hide-details>
      <template v-slot:label>
        <img src="../../assets/fu.png" class="item-icon"/>
        <span class="item-label">{{$t('future')}}</span>
      </template>
    </v-checkbox>
    <v-divider></v-divider>
    <v-checkbox
          v-model="spot"
          color="#111"
          :ripple="false"
          hide-details>
        <template v-slot:label>
          <img src="../../assets/fx.png" class="item-icon"/>
          <span class="item-label">{{$t('spot')}}</span>
        </template>
    </v-checkbox>
    <v-divider></v-divider>
    <v-checkbox
          v-model="commodity"
          color="#111"
          :ripple="false"
          hide-details>
      <template v-slot:label>
        <img src="../../assets/fu.png" class="item-icon"/>
        <span class="item-label">{{$t('commodity')}}</span>
      </template>
    </v-checkbox>
  </div>
</template>

<script>

export default {
  name: 'TradingProductsSettings',
  components: {
  },
  data() {
    return {
      commodity: false,
      spot: false,
      future: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head {
  padding: 8px 0;
  font-size: 14px;
}
.settings-panel {
  width: 100%;
  height: 100%;
  font-size: 14px;
  .item-label {
    color: #111;
  }
  .item-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
}
</style>
