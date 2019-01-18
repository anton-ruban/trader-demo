<template>
  <div>
    <span :class="[{'active': selectedTabIndex === index},'panel-title']" v-for="(tab, index) in tabs" :key="index" @click="$emit('change', index)">
      {{tab.name}}
      <template v-if="tab.subItems && selectedTabIndex === index">
        <a>( {{tab.subItems[tab.selectedSubItemIndex].name}} )</a>
      </template>
    </span>
  </div>
</template>

<script>

export default {
  name: 'SelectByArrow',
  props: {
    tabs: Array,
    selectedTabIndex: Number,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .panel-title {
    padding-right: 16px;
    color: #777;
    max-width: 100%;
    overflow: hidden;
    line-height: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #111;
    }
    &.active {
      color: #111;
    }
  }
</style>
