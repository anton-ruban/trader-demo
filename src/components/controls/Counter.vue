<template>
  <div class="select-control">
    <v-btn depressed small icon>
      -
    </v-btn>
    <span>{{value}}</span>
    <v-btn depressed small icon>
      +
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'SelectByArrow',
  props: {
    value: Number,
    stepValue: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.select-control {
  height: 32px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .v-btn {
    margin: 0;
    color: #888;
    font-size: 18px;
  }
  span {
    color: #333;
    white-space: nowrap;
  }
}
</style>
