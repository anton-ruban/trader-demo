<template>
  <div class="settings-panel">
    <div class="setting-item">
      <span class="label">语言</span>
      <div class="overflow-div">
        <v-overflow-btn
          :items="language"
          label="语言"
          hide-details
        ></v-overflow-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">时区</span>
      <div class="overflow-div">
        <v-overflow-btn
          :items="timezone"
          label="时区"
          hide-details
        ></v-overflow-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="setting-item">
      <span class="label">格式</span>
      <div class="overflow-div">
        <v-overflow-btn
          :items="format"
          label="格式"
          hide-details
        ></v-overflow-btn>
      </div>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>

export default {
  name: 'RegionSettings',
  components: {
  },
  data() {
    return {
      language: ['中文简体', 'English'],
      timezone: ['GMT+00:00', 'GMT+08:00'],
      format: ['English', 'Chinese'],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.settings-panel {
  width: 100%;
  height: 100%;
  .setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    .label {
      font-size: 14px;
    }
    .v-input--radio-group {
      margin-top: 0;
      padding-top: 0;
    }
    .overflow-div {
      width: 170px;
      text-align: right;
    }
    .v-overflow-btn {
      margin-top: 0;
    }
  }
}
</style>
