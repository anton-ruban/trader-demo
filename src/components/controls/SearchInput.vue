<template>
  <div class="search">
    <input type="search" :placeholder="placeholder" value=""/>
    <i class="fa fa-search"></i>
  </div>
</template>

<script>

export default {
  name: 'SearchInput',
  props: {
    placeholder: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search {
  position: relative;
  width: 100%;
  input[type=search] {
    padding-left: 28px;
    outline: 0;
    border: 1px solid var(--border-color-row);
    border-radius: 0;
    width: 100%;
    display: block;
    height: 28px;
    padding-right: 36px;
    &::placeholder {
      color: #aaa;
      font-style: italic;
    }
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
  i {
    position: absolute;
    top: 3px;
    bottom: 0;
    left: 8px;
    font-size: 16px;
    height: 20px;
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
</style>
