<template>
  <div class="portfolio-view">
    <div class="portfolio-body">
      <div class="head">
        <div class="flex-container">
          <div class="trial">
            <span class="trial-text">TRIAL_9118976</span>
            <span class="trial-currency">USD</span>
          </div>
          <v-btn depressed icon>
            <v-icon>info</v-icon>
          </v-btn>
          <div class="flex-container account-info">
            <v-icon>account_circle</v-icon>
            longwj - 9203269
          </div>
        </div>
        <div class="actions">
          <v-btn color="primary" depressed>查看今天</v-btn>
          <v-menu
            ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-btn slot="activator" depressed>{{date}}</v-btn>
            <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
          </v-menu>
        </div>
      </div>
      <div class="summary">
        <div class="summary-item">
          <div class="summary-label">可用现金</div>
          <div class="summary-value">100,345.08</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">仓位总值</div>
          <div class="summary-value">5,434.22</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">账户总值</div>
          <div class="summary-value">105,766.36</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">1 日变化</div>
          <div class="summary-value">n/a</div>
        </div>
      </div>
      <div class="chart-flex">
        <div class="chart-box">
          <div class="head-box">
            <div class="flex-center">
              <span class="chart-label">盈/亏USD</span>
              <v-icon>info</v-icon>
            </div>
            <div>5,510.28</div>
          </div>
          <v-divider></v-divider>
          <div class="chart">
            <highcharts :options="chartOptions1" ref="highcharts"></highcharts>
          </div>
        </div>
        <div class="chart-box">
          <div class="head-box">
            <div class="flex-center">
              <span class="chart-label">盈/亏USD</span>
              <v-icon>info</v-icon>
            </div>
            <div>5,510.28</div>
          </div>
          <v-divider></v-divider>
          <div class="chart">
            <highcharts :options="chartOptions2" ref="highcharts"></highcharts>
          </div>
        </div>
      </div>
      <div class="info-table ipe-table">
        <v-data-table
          :headers="portfolioRecords.headers"
          :items="portfolioRecords.data"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.product }}</td>
            <td class="text-xs-right">{{ props.item.currency }}</td>
            <td class="text-xs-right">{{ props.item.amount }}</td>
            <td class="text-xs-right">{{ props.item.open }}</td>
            <td class="text-xs-right">{{ props.item.currentPrice }}</td>
            <td class="text-xs-right">{{ props.item.profitAndLossPercent }}</td>
            <td class="text-xs-right">{{ props.item.dayChangePercent }}</td>
            <td class="text-xs-right">{{ props.item.pl }}</td>
            <td class="text-xs-right">{{ props.item.totalExposure }}</td>
            <td class="text-xs-right">{{ props.item.totalExposurePercent }}</td>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Portfolio',
  computed: {
    ...mapState('account', {
      portfolioRecords: state => state.portfolioRecords,
    }),
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      chartOptions1: {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['小型标准普尔500指数, 三月 2019年', '英国富时100指数, 三月 2019年'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
              text: null
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
          showInLegend: false,
          data: [107, 31],
          color: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, 'rgba(26,177,26, 1'],
                [1, 'rgba(200,200,200, 0.5']
            ]
          }
        }]
      },
      chartOptions2: {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['小型标准普尔500指数, 三月 2019年', '英国富时100指数, 三月 2019年'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
              text: null
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
          showInLegend: false,
          data: [107, 31],
          color: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, 'rgba(73,164,255, 1'],
                [1, 'rgba(200,200,200, 0.5']
            ]
          }
        }]
      },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.portfolio-view {
    flex: 1;
    background: var(--bg-color-panel);
    padding: 8px;
    display: flex;
    padding-top: 0;
    .portfolio-body {
      width: 100%;
      background: var(--bg-color-inner-panel);
      .head {
        display: flex;
        padding: 4px;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--border-color-row);
        .flex-container {
          display: flex;
          align-items: center;
          &.account-info {
            margin-left: 16px;
            .v-icon {
              margin-right: 4px;
            }
          }
          .trial {
            border: 1px solid var(--border-color-row);
            padding: 0 8px;
            margin-right: 8px;
            .trial-text {
              color: #aaa;
              margin-right: 8px;
            }
            .trial-currency {
              color: var(--text-color-active);
              font-weight: 700;
            }
          }
          .v-btn {
            font-weight: bold;
            height: 24px;
            margin: 0;
            width: 24px;
          }
        }
        .actions {
          .v-btn {
            margin: 0;
            margin-left: 8px;
            height: 24px;
          }
          > .v-menu {
            display: inline-block;
          }
        }
      }
      .summary {
        padding: 8px 16px;
        display: flex;
        .summary-item {
          margin-right: 24px;
          .summary-label {
            color: #888;
            line-height: 1.25;
          }
          .summary-value {
            font-size: 22px;
            line-height: 33px;
          }
        }
      }
      .chart-flex {
        display: flex;
        .chart-box {
          width: calc(50% - 8px);
          margin: 0 16px;
          .head-box {
            display: flex;
            align-items: center;
            height: 20px;
            justify-content: space-between;
            .flex-center {
              display: flex;
              align-items: center;
              .chart-label {
                margin-right: 4px;
              }
              .v-icon {
                font-size: 15px;
                color: #aaa;
              }
            }
          }
        }
      }
      .info-table {
        margin-top: 30px;
      }
    }
}

</style>
