<template>
  <v-menu
    :value="isOpenNewsProviderPicker"
    :close-on-content-click="false"
    @input="toggleNewsProviderPicker($event)"
    offset-y
  >
    <v-btn slot="activator" depressed small color="#bbb">
      {{selectedProviderId ? getProviderById(selectedProviderId).name : '全部新闻提供商'}}
      <v-icon>{{isOpenNewsProviderPicker ? 'expand_less' : 'expand_more'}}</v-icon>
    </v-btn>
    <div class="picker">
      <div class="pick-section">
        <TitleBar title="选择供应商" @close="toggleNewsProviderPicker(false)" hideBack />
        <v-divider></v-divider>
        <div class="content">
          <ul class="list-body">
            <li class="list-item" @click="selectProvider(null)">
              <span>全部新闻提供商</span>
            </li>
            <li class="list-item" v-for="item in providers" :key="item.id" @click="selectProvider(item.id)">
              <img :src='"../../assets/" + item.type + ".png"'/>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-menu>
</template>

<script>

import { mapGetters, mapState } from 'vuex';
import TitleBar from '../controls/TitleBar.vue';

export default {
  name: 'NewsProviderPicker',
  components: {
    TitleBar
  },
  methods: {
    selectProvider(e) {
      this.$store.commit('news/selectProvider', e);
      this.toggleNewsProviderPicker(false);
    },
    toggleNewsProviderPicker (e) {
      this.$store.commit('news/toggleNewsProviderPicker', e);
    },
  },
  computed: {
    ...mapState('news', {
      providers: state => state.providers,
      isOpenNewsProviderPicker: state => state.isOpenNewsProviderPicker,
      selectedProviderId: state => state.selectedProviderId
    }),
    ...mapGetters('news', {
      getProviderById: 'getProviderById',
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.picker {
  background: #fff;
  width: 320px;
  overflow: hidden;
  .pick-section {
    position: relative;
    .content {
      .list-body {
        padding: 0;
        .list-item {
          border-top: 1px solid #ddd;
          padding: 4px 8px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: flex;
          align-items: center;
          cursor: pointer;
          white-space: nowrap;
          &:hover {
            background: #eee;
          }
          .v-icon {
            font-size: 16px;
            margin-right: 4px;
            &.arrow-icon {
              margin-right: 0;
            }
          }
          span {
            font-size: 12px;
            flex: 1;
          }
          img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
          }
        }
      }
    }
  }
}

</style>
