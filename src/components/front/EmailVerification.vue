<template>
  <div class="verification-container">
    <v-card flat>
      <v-card-text>
        <v-text-field
          v-model="verificationCode"
          :label="$t('email_verification')"
          required
        ></v-text-field>
        <div class="text-sm-right">
          <v-btn depressed @click="cancel()">{{$t('cancel')}}</v-btn>
          <v-btn color="primary" depressed @click="verify()" :disabled="verificationCode.length === 0">{{$t('submit')}}</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'EmailVerification',
  data: function () {
    return {
      verificationCode: '',
    }
  },
  computed: {
    ...mapState('auth', {
      authInfo: state => state.authInfo
    }),
  },
  methods: {
    cancel() {
      this.$router.push({ path: 'signin'})
    },
    async verify() {
      try {
        await this.$store.dispatch('auth/emailVerify', {
          key: this.authInfo.username,
          code: this.verificationCode,
        });

        if (this.authInfo.isGoogle && this.authInfo.isGoogle === 'y') {
          this.$router.push({ path: 'two-factor-verification' });
        } else {
          this.$router.push({ path: 'main/trading' });
        }
      } catch(e) {
        this.$toast.error(e);
      }
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
