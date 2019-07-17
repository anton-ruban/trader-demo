<template>
  <div class="settings-panel">
    <div class="sub-title">Customer Service</div>
    <div class="setting-item">
      <ul>
        <li>
          <div class="flex-item">
            <span class="label">网址</span>
            <a>{{hostname}}</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="sub-title">用户数据</div>
    <div class="setting-item">
      <ul>
        <li>
          <div class="flex-item">
            <span>登录</span>
            <span>9203269</span>
          </div>
        </li>
        <li>
          <div class="flex-item">
            <span>IPE账号</span>
            <span>9203269</span>
          </div>
        </li>
        <li>
          <div class="flex-item">
            <span>上次登录： </span>
            <span>29-Jan-2019 14:38:38</span>
          </div>
        </li>
        <li>
          <div class="flex-item">
            <span>上次登录状态</span>
            <span>成功</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="sub-title">用户资料</div>
    <div class="setting-item">
      <ul>
        <li>
          <div class="flex-item">
            <span>语言</span>
            <span>zh-CN</span>
          </div>
        </li>
        <li>
          <div class="flex-item">
            <span>语言类型</span>
            <span>en-GB</span>
          </div>
        </li>
        <li>
          <div class="flex-item">
            <span>时区</span>
            <span>Etc/UTC</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="sub-title">软件资讯</div>
    <div class="setting-item">
      <ul>
        <li>
          <div class="flex-item">
            <span>版本</span>
            <span>11.7.26.0</span>
          </div>
        </li>
        <li>
          <div class="flex-item">
            <span>系统</span>
            <span>Simulation</span>
          </div>
        </li>
        <li>
          <div class="flex-item">
            <span>主题版本</span>
            <span>11.7.12</span>
          </div>
        </li>
        <li>
          <div class="flex-item">
            <span>图表版本</span>
            <span>7fdc67f</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChartSettings',
  components: {
  },
  data() {
    return {
      hostname: `http://${window.location.hostname}`,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.settings-panel {
  width: 100%;
  padding-top: 8px;
  .sub-title {
    font-size: 14px;
    height: 20px;
    color: var(--text-color-active);
    margin-bottom: 5px;
    font-weight: bold;
  }
  .setting-item {
    background: var(--bg-color-inner-panel);
    border-top: 1px solid var(--border-color-row);
    margin-bottom: 16px;
    ul {
      padding: 0;
      li {
        list-style-type: none;
        .flex-item {
          padding: 4px 8px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color-row);
        }
      }
    }
  }
}
</style>
