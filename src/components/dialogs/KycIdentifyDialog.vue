<template>
  <v-dialog :value="isOpenKycIdentifyDialog" width="450" @input="toggleKycIdentifyDialog($event)">
    <v-layout class="dialog-layout" column>
      <TitleBar title="KYC认证" hideBack @close="toggleKycIdentifyDialog(false)" />
      <div class="dialog-body">
        <v-tabs fixed-tabs height="32" slider-color="#111" class="ipe-tab tab-body">
          <v-tab
            v-for="item in KYC_IDENTIFY_TAB_ITEMS"
            :key="item.id"
          >
            {{item.text}}
          </v-tab>
          <v-tab-item>
            <div class="content">
              <h5>姓名</h5>
              <v-divider/>
              <h5>身份证正面</h5>
              <div class="flex-row">
                <img src="../../assets/verification.png"/>
                <img src="../../assets/verification.png"/>
                <p>请确保照片内容完整并请可见</p>
              </div>
              <h5>手续身份中信息照</h5>
              <div class="flex-row">
                <img src="../../assets/verification.png"/>
                <img src="../../assets/verification.png"/>
                <p>请您上传一张手续护照/身份证照片。确保个人信息请可见</p>
              </div>
              <h5>地址证明照片</h5>
              <div class="flex-row">
                <img src="../../assets/verification.png"/>
                <img src="../../assets/verification.png"/>
                <p>证明自己的地址照片</p>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="content">
              <h5>商业注册证书</h5>
              <div class="flex-row">
                <img src="../../assets/verification.png"/>
                <img src="../../assets/verification.png"/>
                <p>请确保照片内容完整并请可见</p>
              </div>
              <h5>公司所有人的个人信息</h5>
              <div class="flex-row">
                <img src="../../assets/verification.png"/>
                <img src="../../assets/verification.png"/>
                <p>请您上传一张手续护照/身份证照片。确保个人信息请可见</p>
              </div>
              <h5>其他法务部门规定的文件</h5>
              <div class="flex-row">
                <img src="../../assets/verification.png"/>
                <img src="../../assets/verification.png"/>
                <p>证明自己的地址照片</p>
              </div>
            </div>
          </v-tab-item>
        </v-tabs>
      </div>
      <v-btn depressed small color="success" @click="toggleKycIdentifyDialog(true)">提交</v-btn>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import {KYC_IDENTIFY_TABS} from '@/constants';
import { mapState } from 'vuex';

export default {
  name: 'KycIdentifyDialog',
  components: {
    TitleBar,
  },
  data() {
    return {
      KYC_IDENTIFY_TAB_ITEMS: _.values(KYC_IDENTIFY_TABS),
    }
  },
  methods: {
    toggleKycIdentifyDialog (e) {
      this.$store.commit('account/toggleKycIdentifyDialog', e);
    },
  },
  computed: {
    ...mapState('account', {
      isOpenKycIdentifyDialog: state => state.isOpenKycIdentifyDialog,
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-layout {
  background: #fff;
}
.dialog-body {
  display: flex;
  padding: 16px;
  height: 400px;
  .tab-body {
    width: 100%;
    .content {
      padding: 16px;
      h5 {
        margin-top: 16px;
      }
      .flex-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;
        img {
          width: 80px;
          height: 50px;
        }
        p {
          width: 140px;
        }
      }
    }
  }
}
</style>
