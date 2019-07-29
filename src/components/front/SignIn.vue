<template>
  <div class="signin-container">
    <v-tabs
      v-model="activeTab"
      fixed-tabs
    >
      <v-tab
        v-for="item in tabs"
        :key="item.id"
        ripple
      >
        {{ item.text }}
      </v-tab>
      <v-tab-item key="email_register"
      >
        <v-card flat class="pb-2">
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('email')"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                :label="$t('password')"
                required
              ></v-text-field>
              <div class="text-sm-right mb-2">
                <a>{{$t('forgot_password')}}</a>
              </div>
              <v-btn color="primary" block depressed @click="signIn()" :disabled="!valid">{{$t('login')}}</v-btn>
              <div class="text-sm-center mt-2">
                <a href="/#/signup">{{$t('register')}}</a>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="phone_register">
        <v-card flat class="pb-2">
          <v-card-text>
            <VuePhoneNumberInput v-model="phone" />
            <v-text-field
              v-model="password"
              type="password"
              :label="$t('password')"
              required
              class="mt-2"
            ></v-text-field>
              <div class="text-sm-right mb-2">
                <a>{{$t('forgot_password')}}</a>
              </div>
            <v-btn color="primary" block depressed :disabled="!valid">{{$t('login')}}</v-btn>
            <div class="text-sm-center mt-2">
              <a href="/#/signup">{{$t('register')}}</a>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
  name: 'SignIn',
  components: {
    VuePhoneNumberInput
  },
  data: function () {
    return {
      email: '',
      valid: false,
      phoneMask: 'phone',
      password: '',
      phone: '',
      activeTab: 0,
      tabs: [{
        id: 'email_register',
        text: this.$t('email_register')
      }, {
        id: 'phone_register',
        text: this.$t('phone_register'),
      }],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    ...mapMutations('error', ['updateSnackBar']),
    async signIn() {
      try {
        await this.$store.dispatch('auth/login', {
          type: "1",
          email: this.email,
          pwd: this.password,
        });
        this.$router.push({ path: 'email-verification' });
      } catch(e) {
        this.$toast.error(e);
      }
    },
    selectSignUpTab (e) {
      this.$store.commit('auth/selectSignUpTab', e);
    }
  },
  computed: {
    ...mapState('auth', {
      signUpTabs: state => state.signUpTabs,
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .signin-container {
    margin: 100px auto;
    overflow: hidden;
    width: 400px;
    border: 1px solid var(--border-color-row);
  }
</style>
