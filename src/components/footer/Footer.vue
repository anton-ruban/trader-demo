<template>
  <footer id="footer" class="grid-cell g--fit">
    <div class="footer-body">
      <div class="acctsummary">
        <div class="flex-container">
          <div class="trial">
            <span class="trial-text">TRIAL_9118976</span>
            <span class="trial-text">USD</span>
          </div>
          <button class="ipe-btn info-button-box" type="button" @click="openAccountDetails()">
            <i class="fa fa-info"></i>
          </button>
        </div>
        <div class="flex-container">
          <span class="info-label">{{$t('cash_available')}}</span>
          <span class="info-text">99,746.39</span>
        </div>
        <div class="flex-container">
          <span class="info-label">{{$t('account_value')}}</span>
          <span class="info-text">90,052.30</span>
        </div>
        <div class="flex-container">
          <span class="info-label">{{$t('initial_margin_available')}}</span>
          <span class="info-text">68,119.74</span>
        </div>
        <div class="flex-container">
          <span class="info-label">{{$t('margin_utilisation')}}</span>
          <span class="info-progress-bg">
            <span class="progress-bar" style="width: 75.64%;"></span>
          </span>
          <span class="info-text">24.36%</span>
        </div>
        <div class="flex-container">
          <span class="info-label">{{$t('account_value_shield')}}</span>
          <a>Off</a>
        </div>
      </div>
    </div>
    <div class="data-disclaimer-link">
      Market data provided by Saxo Bank • 
      <button class="ipe-btn btn--inline btn--link" type="button">Data Disclaimer</button>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  methods: {
    openAccountDetails() {
      this.$store.commit('account/toggleAccountDetailsDialog', true);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer {
  position: relative;
  min-height: 42px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: var(--bg-color-panel);
  flex: 0 0 auto;
  padding: 0;
  .footer-body {
    display: flex;
    flex: 1 0 auto;
    padding: 0;
    margin: 0;
    max-width: 100%;
    text-align: start;
    .acctsummary {
      padding: 8px 8px;
      overflow: hidden;
      padding-bottom: 16.5px;
      align-items: center;
      display: flex;
      flex: 1 0 auto;
      margin: 0;
      margin-top: -8px;
      padding-bottom: 16.5px;
      .flex-container {
        display: flex;
        align-items: center;
        margin-right: 16px;
        flex: 0 0 auto;
        width: auto;
        .trial {
          width: 170px;
          line-height: 20px;
          outline: 1px solid var(--border-color-row);
          outline-offset: -1px;
          display: flex;
          padding: 0 8px;
          font-weight: bold;
          justify-content: space-between;
          margin-right: 8px;
        }
        .info-button-box {
          width: 24px;
          height: 24px;
          &:hover {
            background: #d5d5d5;
            color: var(--text-color-active);
          }
        }
        .info-label {
          margin-right: 4px;
          color: #777;
        }
        .info-progress-bg {
          margin-right: 4px;
          width: 60px;
          background-image: linear-gradient(to right,#6eb739,#faee6a 50%,#e35837);
          background-repeat: no-repeat;
          height: 0.67rem;
          position: relative;
          .progress-bar {
            position: absolute;
            background: var(--border-color-row);
            width: 75.67%;
            right: 0;
            height: 0.67rem;
          }
        }
      }
    }
  }
  .data-disclaimer-link {
    color: #999;
    text-transform: uppercase;
    background-color: var(--bg-color-page);
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    line-height: 11px;
    text-align: right;
    text-align: end;
    font-size: 9px;
    button {
      display: inline-block;
      width: auto;
      vertical-align: baseline;
      color: inherit;
      text-transform: inherit;
      font-size: inherit;
      font-weight: inherit;
      padding: 0;
      line-height: inherit;
      &:hover {
        color: #39d;
        background: transparent;
      }
    }
  }
}
</style>
