<template>
  <v-menu
    :value="isOpenWatchlistPicker"
    :close-on-content-click="false"
    @input="toggleWatchlistPicker($event)"
    offset-y
  >
    <v-btn slot="activator" depressed small>
      我的观察列表
      <v-icon>{{isOpenWatchlistPicker ? 'expand_less' : 'expand_more'}}</v-icon>
    </v-btn>
    <div class="picker">
      <div :class="[{ 'show-child': detailStandardWatch }, 'picker-container']">
        <div class="pick-section">
          <TitleBar title="Select Watchlist" @close="toggleWatchlistPicker(false)" hideBack />
          <v-divider></v-divider>
          <div class="content">
            <div class="subheader">Standard Watchlists</div>
            <ul class="list-body">
              <li class="list-item" v-for="item in standardWatchlist" :key="item.id" @click="selectWatch(item)">
                <img :src='"../../assets/" + item.type + ".png"'/>
                <span>{{item.title}}</span>
                <v-icon v-if="item.children && item.children.length > 0" class="arrow-icon">keyboard_arrow_right</v-icon>
              </li>
            </ul>
            <div class="subheader">Recent</div>
            <ul class="list-body">
              <li class="list-item" v-for="item in recent" :key="item.id" @click="selectWatch(item)">
                <img :src='"../../assets/" + item.type + ".png"'/>
                <span>{{item.title}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class='pick-section'>
          <TitleBar :title="detailStandardWatch ? detailStandardWatch.title : ''" @back="selectWatch(null)" @close="toggleWatchlistPicker(false)" />
          <v-divider></v-divider>
          <div class="content" v-if="detailStandardWatch">
            <ul class="list-body">
              <li class="list-item" v-for="item in detailStandardWatch.children" :key="item.id" @click="selectWatch(item)">
                <img :src='"../../assets/" + item.type + ".png"'/>
                <span>{{item.title}}</span>
                <v-icon v-if="item.children && item.children.length > 0" class="arrow-icon">keyboard_arrow_right</v-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </v-menu>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex';
import TitleBar from '../controls/TitleBar.vue';

export default {
  name: 'WatchlistPicker',
  components: {
    TitleBar
  },
  methods: {
    ...mapActions('watch', [
      'selectWatch'
    ]),
    toggleWatchlistPicker (e) {
      this.$store.commit('watch/toggleWatchlistPicker', e);
    }
  },
  computed: {
    ...mapState('watch', {
      standardWatchlist: state => state.watchlist.standardWatchlist,
      recent: state => state.watchlist.recent,
      isOpenWatchlistPicker: state => state.isOpenWatchlistPicker
    }),
    ...mapGetters('watch', {
      detailStandardWatch: 'selectedStandardWatch',
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.picker {
  background: var(--bg-color-inner-panel);
  width: 320px;
  overflow: hidden;
  .picker-container {
    display: flex;
    width: 640px;
    transition: transform ease-in 200ms;
    &.show-child {
      transform: translateX(-50%);
    }
    .pick-section {
      width: 50%;
      position: relative;
      .content {
        .subheader {
          padding: 0 8px;
          background: var(--bg-color-subheader);
          height: 18px;
          line-height: 18px;
          font-size: 11px;
          color: var(--text-color-active);
          font-weight: bold;
        }
        .list-body {
          padding: 0;
          .list-item {
            border-top: 1px solid var(--border-color-row);
            padding: 4px 8px;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            cursor: pointer;
            white-space: nowrap;
            &:hover {
              background: var(--bg-color-hover);
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
}

</style>
