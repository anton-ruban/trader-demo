<template>
  <div class="other-view">
    <div class="other-body">
      <div class="info-list">
        <div class="info-item">
          <h5>常用提币地址管理</h5>
          <v-divider/>
          <p>提币地址管理</p>
          <v-divider/>
          <v-btn color="primary" small depressed block @click="openCoinAddressManageDialog()">查看</v-btn>
        </div>
        <div class="info-item">
          <h5>KYC认证</h5>
          <v-divider/>
          <p>对帐户进KYC认证</p>
          <v-divider/>
          <v-btn color="primary" small depressed block @click="openKycIdentifyDialog()">查看</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Other',
  methods: {
    openCoinAddressManageDialog() {
      this.$store.commit('account/toggleCoinAddressManageDialog', true);
    },
    openKycIdentifyDialog() {
      this.$store.commit('account/toggleKycIdentifyDialog', true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.other-view {
    flex: 1;
    background: #ccc;
    padding: 8px;
    display: flex;
    padding-top: 0;
    .other-body {
      width: 100%;
      background: #fff;
      .info-list {
        display: flex;
        flex-wrap: wrap;
        .info-item {
          width: 25%;
          margin: 8px;
          padding: 8px 8px 0;
          min-width: 300px;
          border: 1px solid #ccc;
          h5 {
            margin-bottom: 10px;
          }
          p {
            margin-top: 10px;
            margin-bottom: 30px;
          }
        }
      }
    }
}

</style>
