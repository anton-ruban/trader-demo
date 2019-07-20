<template>
  <div class="verification-container">
    <v-card flat>
      <v-card-text>
        <v-text-field
          v-model="verificationCode"
          :label="$t('two_factor_verification')"
          required
        ></v-text-field>
        <div class="text-sm-right">
          <v-btn depressed @click="cancel()">{{$t('cancel')}}</v-btn>
          <v-btn color="primary" depressed @click="goTrading()" :disabled="verificationCode.length === 0">{{$t('submit')}}</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'EmailVerification',
  data: function () {
    return {
      verificationCode: '',
    }
  },
  methods: {
    cancel() {
      window.history.back();
    },
    goTrading() {
      this.$router.push({ path: 'main/trading' });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .verification-container {
    margin: 100px auto;
    width: 400px;
    border: 1px solid var(--border-color-row);
  }
</style>
