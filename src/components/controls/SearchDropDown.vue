<template>
  <v-menu
      v-model="open"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <div class="search">
          <input type="search" :placeholder="placeholder" v-model="searchQuery"  v-on="on"/>
          <i class="fa fa-search"></i>
          <button class="search-dropdown ipe-btn" type="button">
            <i class="fa fa-angle-down"></i>
          </button>
        </div>
      </template>
      <v-card width="380" max-height="455" class="dropdown-body">
        <div class="contract" v-for="item in filteredContracts(searchQuery)" :key="item.id" @click="handleItemSelect(item)">
          <img :src="require(`@/assets/${item.icon}`)"/>
          <div class="text">
            <span class="company-name">{{item.product}}</span>
            <span class="desc">{{item.description}}</span>
          </div>
        </div>
      </v-card>
    </v-menu>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'SearchDropDown',
  props: {
    placeholder: String,
  },
  data() {
    return {
      open: false,
      searchQuery: '',
    }
  },
  computed: {
    ...mapGetters('contracts', {
      filteredContracts: 'filteredContracts',
    })
  },
  methods: {
    handleItemSelect(item) {
      this.$store.commit('contracts/selectContract', item.id);
      this.$store.commit('overview/selectOverview', item.overviewId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search {
  position: relative;
  input[type=search] {
    padding-left: 28px;
    text-overflow: ellipsis;
    background-color: #666;
    color: #ddd;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 0;
    display: block;
    height: 24px;
    padding-right: 36px;
    &::placeholder {
      color: #aaa;
      font-style: italic;
    }
    &:focus {
      background: #888;
      color: #fff;
    }
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
  i {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 8px;
    font-size: 16px;
    height: 20px;
    color: #ddd;
    line-height: 24px;
    pointer-events: none;
  }
  .search-dropdown {
    position: absolute;
    right: 24px;
    width: auto;
    top: 0;
    bottom: 0;
    padding: 0;
    cursor: pointer;
    i {
      color: #aaa;
    }
  }
}
.dropdown-body {
  overflow-y: auto;

  .contract {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 4px 8px;
    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 4px;
      line-height: 1;
      .company-name {
        font-size: 12px;
      }
      .desc {
        color: #888;
        margin-top: 3px;
      }
    }
    &:hover {
      background: #eee;
    }
  }
}
</style>
