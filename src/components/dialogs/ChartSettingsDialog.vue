<template>
  <v-dialog :value="isOpenChartSettingsDialog" width="450" @input="toggleChartSettingsDialog($event)">
    <v-card>
      <v-layout column>
        <TitleBar :title="$t('general.chart_configuration')" hideBack @close="toggleChartSettingsDialog(false)" />
        <div class="dialog-body">
          <div>
            <v-tabs fixed-tabs height="32" class="ipe-tab">
              <v-tab
                v-for="item in CHART_CONFIGURATION_TAB_ITEMS"
                :key="item.id"
              >
                {{item.text}}
              </v-tab>
              <v-tab-item>
                <v-divider></v-divider>
                <div class="details">
                  <div class="row-item">
                    <span class="label">{{$t("default_price")}}</span>
                    <div class="overflow-div">
                      <v-overflow-btn
                        :items="defaultPrices"
                        :label="$t('default_price')"
                        value="Bid"
                        hide-details
                        class="ipe-overflow-button"
                        height="25"
                        single-line
                      ></v-overflow-btn>
                    </div>
                  </div>
                  <p>FX, CFD indices and CFD futures only</p>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("instrument")}}</span>
                    <div class="overflow-div">
                      <v-overflow-btn
                        :items="instruments"
                        :label="$t('instrument')"
                        value="Symbol"
                        hide-details
                        class="ipe-overflow-button"
                        height="25"
                        single-line
                      ></v-overflow-btn>
                    </div>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isSnapAnnotations"
                        :label="$t('snap_annotations')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isShareAnnotationsAcrossAllTimePeriods"
                        :label="$t('share_annotations_across_all_time_periods')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isShowCandleCountDownTimer"
                        :label="$t('show_candle_count_down_timer')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("extra_bars")}}</span>
                    <input type="number" v-model="extraBars"/>
                  </div>
                  <v-divider/>
                  <div class="sub-head">{{$t('crosshair')}}</div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isShowPriceLabelOnYAxis"
                        :label="$t('show_price_label_on_y_axis')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("color")}}</span>
                    <swatches v-model="color" popover-to="left">
                      <input slot="trigger" :value="color" readonly>
                    </swatches>
                  </div>
                  <v-divider/>
                  <div class="sub-head">{{$t('orders_and_positions')}}</div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isShowOrders"
                        :label="$t('show_orders')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isShowPositions"
                        :label="$t('show_positions')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isShowPositionSummary"
                        :label="$t('show_position_summary')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isShowPositionLines"
                        :label="$t('show_position_lines')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isShowOrderLines"
                        :label="$t('show_order_lines')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isInfoBox"
                        :label="$t('info_box')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("opacity")}}</span>
                    <input type="number" v-model="opacity"/>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("background_color")}}</span>
                    <swatches v-model="backgroundColor" popover-to="left">
                      <input slot="trigger" :value="backgroundColor" readonly>
                    </swatches>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("border_color")}}</span>
                    <swatches v-model="borderColor" popover-to="left">
                      <input slot="trigger" :value="borderColor" readonly>
                    </swatches>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("text_color")}}</span>
                    <swatches v-model="textColor" popover-to="left">
                      <input slot="trigger" :value="textColor" readonly>
                    </swatches>
                  </div>
                  <v-divider/>
                  <div class="sub-head">{{$t('regional')}}</div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isAlwaysUseGMT"
                        :label="$t('always_use_gmt')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t('chart_configuration')}}</span>
                    <a>{{$t('reset_to_defaults')}}</a>
                  </div>
                  <v-divider/>
                </div>
              </v-tab-item>
              <v-tab-item>
                <v-divider></v-divider>
                <div class="details">
                  <div class="row-item">
                    <span class="label">{{$t("background_color")}}</span>
                    <swatches v-model="backgroundColor2" popover-to="left">
                      <input slot="trigger" :value="backgroundColor2" readonly>
                    </swatches>
                  </div>
                  <v-divider></v-divider>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isCurrentPriceLine"
                        :label="$t('current_price_line')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                    <div class="sub-row-item">
                      <div class="overflow-div">
                        <v-overflow-btn
                          :items="lineWeights"
                          v-model="currentPriceLineWeight"
                          hide-details
                          class="ipe-overflow-button"
                          height="25"
                          single-line
                        ></v-overflow-btn>
                      </div>
                      <swatches v-model="currentPriceLineColor" popover-to="left">
                        <input slot="trigger" :value="currentPriceLineColor" readonly class="swatches-input">
                      </swatches>
                    </div>
                  </div>
                  <v-divider/>
                  <div class="sub-head">{{$t('grid_lines')}}</div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isHorizontal"
                        :label="$t('horizontal')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                    <div class="sub-row-item">
                      <div class="overflow-div">
                        <v-overflow-btn
                          :items="lineWeights"
                          v-model="horizontalLineWeight"
                          hide-details
                          class="ipe-overflow-button"
                          height="25"
                          single-line
                        ></v-overflow-btn>
                      </div>
                      <swatches v-model="horizontalLineColor" popover-to="left">
                        <input slot="trigger" :value="horizontalLineColor" readonly class="swatches-input">
                      </swatches>
                    </div>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isVerticalMinor"
                        :label="$t('vertical_minor')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                    <div class="sub-row-item">
                      <div class="overflow-div">
                        <v-overflow-btn
                          :items="lineWeights"
                          v-model="verticalMinorLineWeight"
                          hide-details
                          class="ipe-overflow-button"
                          height="25"
                          single-line
                        ></v-overflow-btn>
                      </div>
                      <swatches v-model="verticalMinorLineColor" popover-to="left">
                        <input slot="trigger" :value="verticalMinorLineColor" readonly class="swatches-input">
                      </swatches>
                    </div>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isVerticalMajor"
                        :label="$t('vertical_major')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                    <div class="sub-row-item">
                      <div class="overflow-div">
                        <v-overflow-btn
                          :items="lineWeights"
                          v-model="verticalMajorLineWeight"
                          hide-details
                          class="ipe-overflow-button"
                          height="25"
                          single-line
                        ></v-overflow-btn>
                      </div>
                      <swatches v-model="verticalMajorLineColor" popover-to="left">
                        <input slot="trigger" :value="verticalMajorLineColor" readonly class="swatches-input">
                      </swatches>
                    </div>
                  </div>
                  <div class="sub-head">{{$t('x_axis')}}</div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("background_color")}}</span>
                    <swatches v-model="xAxisBackgroundColor" popover-to="left">
                      <input slot="trigger" :value="xAxisBackgroundColor" readonly class="swatches-input">
                    </swatches>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("text_color")}}</span>
                    <swatches v-model="xAxisTextColor" popover-to="left">
                      <input slot="trigger" :value="xAxisTextColor" readonly class="swatches-input">
                    </swatches>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <v-checkbox
                        v-model="isTimePeriodColorSeparator"
                        :label="$t('time_period_color_separator')"
                        :ripple="false"
                        hide-details>
                    </v-checkbox>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("background_color")}}</span>
                    <swatches v-model="yAxisBackgroundColor" popover-to="left">
                      <input slot="trigger" :value="yAxisBackgroundColor" readonly class="swatches-input">
                    </swatches>
                  </div>
                  <v-divider/>
                  <div class="row-item">
                    <span class="label">{{$t("text_color")}}</span>
                    <swatches v-model="yAxisTextColor" popover-to="left">
                      <input slot="trigger" :value="yAxisTextColor" readonly class="swatches-input">
                    </swatches>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs>
          </div>
        </div>
        <div class="flex-row">
          <v-btn depressed small @click="toggleChartSettingsDialog(false)">{{$t('cancel')}}</v-btn>
          <v-btn color="primary" depressed small @click="toggleChartSettingsDialog(false)">{{$t('ok')}}</v-btn>
        </div>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import Swatches from 'vue-swatches'
import {CHART_CONFIGURATION_TABS} from '@/constants';
import _ from 'lodash';
import TitleBar from '../controls/TitleBar.vue';
// Import the styles too, globally
import "vue-swatches/dist/vue-swatches.min.css"

export default {
  name: 'ChartSettingsDialog',
  components: {
    TitleBar,
    Swatches
  },
  data() {
    return {
      CHART_CONFIGURATION_TAB_ITEMS: _.values(CHART_CONFIGURATION_TABS),
      defaultPrices: ['Bid', 'Mid', 'Ask'],
      instruments: ['Symbol', 'Description'],
      isSnapAnnotations: false,
      isShareAnnotationsAcrossAllTimePeriods: false,
      isShowCandleCountDownTimer: false,
      extraBars: 5,
      color: '#1CA085',
      isShowOrders: false,
      isShowPositions: false,
      isShowPriceLabelOnYAxis: false,
      isShowPositionSummary: false,
      isShowPositionLines: false,
      isShowOrderLines: false,
      isInfoBox: false,
      opacity: 80,
      backgroundColor: '#1CA085',
      borderColor: '#1CA085',
      textColor: '#1CA085',
      isAlwaysUseGMT: false,
      backgroundColor2: '#1CA085',
      isCurrentPriceLine: false,
      currentPriceLineWeight: '1px',
      lineWeights: ['1px', '2px', '3px', '4px', '5px', '6px'],
      currentPriceLineColor: '#1CA085',
      isHorizontal: false,
      horizontalLineWeight: '1px',
      horizontalLineColor: '#1CA085',
      isVerticalMinor: false,
      verticalMinorLineWeight: '1px',
      verticalMinorLineColor: '#1CA085',
      isVerticalMajor: false,
      verticalMajorLineWeight: '1px',
      verticalMajorLineColor: '#1CA085',
      xAxisBackgroundColor: '#1CA085',
      xAxisTextColor: '#1CA085',
      isTimePeriodColorSeparator: false,
      yAxisBackgroundColor: '#1CA085',
      yAxisTextColor: '#1CA085',
    }
  },
  methods: {
    toggleChartSettingsDialog (e) {
      this.$store.commit('settings/toggleChartSettingsDialog', e);
    },
  },
  computed: {
    ...mapState('settings', {
      isOpenChartSettingsDialog: state => state.isOpenChartSettingsDialog,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-body {
  padding: 8px 0;
  .details {
    margin-top: 8px;
    height: 700px;
    padding: 0 8px;
    overflow: auto;
    .row-item {
      display: flex;
      align-items: center;
      padding: 8px 0;
      justify-content: space-between;
      .sub-row-item {
        display: flex;
        align-items: center;
        width: 55%;
        > * {
          flex: 1;
        }
        > div:first-child {
          margin-right: 8px;
        }

        .swatches-input {
          width: 100%;
        }
      }
      .label {
        font-size: 14px;
      }
      .overflow-div {
        width: 170px;
        text-align: right;
      }
      input {
        border: 1px solid var(--border-color-row);
        outline: none;
      }
      .v-btn {
        flex: 1;
      }
    }
    .sub-head {
      line-height: 24px;
      font-size: 12px;
      margin-top: 10px;
      color: #999;
    }
    p {
      font-size: 12px;
      text-align: right;
      margin-bottom: 8px;
    }
  }
}
.flex-row {
  display: flex;
  align-items: center;
  > * {
    flex: 1;
  }
}
</style>
