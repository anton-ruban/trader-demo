<template>
  <v-dialog :value="isOpenBindingDialog" width="600" @input="toggleBindingDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="绑定手机号" hideBack @close="toggleBindingDialog(false)" />
      <v-stepper v-model="activeStep" vertical>
        <v-stepper-step :complete="activeStep > 1" step="1">
          {{$t('phone_number')}}
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card flat class="dialog-body">
            <VuePhoneNumberInput v-model="phone" :dark="isDark"/>
            <p class="mt-4">填写手机号提交</p>
          </v-card>
          <div class="continue-button">
            <v-btn color="primary" @click="activeStep = 2" :disabled="phone.length === 0">{{$t('continue')}}</v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-step :complete="activeStep > 2" step="2">{{$t('phone_verification')}}</v-stepper-step>

        <v-stepper-content step="2">
          <v-card flat class="dialog-body"><v-text-field
              :value="phone"
              :label="$t('phone_number')"
              readonly
            ></v-text-field>
            <v-text-field
              v-model="verificationCode"
              :label="$t('phone_verification')"
              required
            ></v-text-field>
          </v-card>
          <v-btn color="primary" depressed @click="handleSubmit()" :disabled="verificationCode.length === 0">{{$t('submit')}}</v-btn>
          <v-btn flat @click="activeStep = 1">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
  name: 'BindingDialog',
  data() {
    return {
      phone: '',
      verificationCode: '',
      activeStep: 1,
    }
  },
  components: {
    TitleBar,
    VuePhoneNumberInput,
  },
  methods: {
    toggleBindingDialog (e) {
      this.$store.commit('account/toggleBindingDialog', e);
    },
    handleSubmit() {
      this.activeStep = 1;
      this.toggleBindingDialog(false);
    }
  },
  computed: {
    ...mapState('settings', {
      isDark: state => state.isDark
    }),
    ...mapState('account', {
      isOpenBindingDialog: state => state.isOpenBindingDialog,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-layout {
  background: var(--bg-color-inner-panel);
}
.continue-button {
  margin-top: 110px;
}
</style>
