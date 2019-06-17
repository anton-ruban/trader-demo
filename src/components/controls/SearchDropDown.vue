<template>
  <div class="search">
    <input type="search" :placeholder="placeholder" value=""/>
    <i class="fa fa-search"></i>
    <button class="search-dropdown ipe-btn" type="button">
      <i class="fa fa-angle-down"></i>
    </button>
  </div>
</template>

<script>

export default {
  name: 'SearchDropDown',
  props: {
    placeholder: String,
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
</style>
