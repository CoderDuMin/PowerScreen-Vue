
<template>
  <div class="power-screen">
    <div class="header"></div>
    <div class="left-top">
      <PieEcharts :saturation-ratio-data="chargingPile"></PieEcharts>
    </div>
    <div class="left-bottom">
      <LineCharts :process-data="processMonitoring"></LineCharts>
    </div>
    <div class="right-top">
      <RightTop :panelItems="chargingTop4" :percentage="percentage"></RightTop>
    </div>
    <div class="right-center">
      <BarEcharts :charging-statistics-data="chargingStatistics"></BarEcharts>
    </div>
    <div class="right-bottom">
      <RightBottomSvg :exception-data="exceptionMonitoring"></RightBottomSvg>
    </div>
    <div class="center">
      <CenterSvg></CenterSvg>
    </div>
    <div class="bottom">
      <BottomPanel :panelItems="dataAnalysis"></BottomPanel>
    </div>
  </div>
</template>
<script setup>
import PieEcharts from '@/components/pieEcharts.vue'
import LineCharts from '@/components/lineCharts.vue'
import BarEcharts from '@/components/barCharts.vue'
import RightBottomSvg from '@/components/RightBottomSvg.vue'
import RightTop from '@/components/RightTop.vue'
import BottomPanel from '@/components/bottom-panel.vue'
import CenterSvg from '@/components/center-svg.vue'
import {
  chargingPileData,
  processMonitoringData,
  chargingStatisticsData,
  exceptionMonitoringData,
  dataAnalysisData,
  chargingTop4Data
} from './config/home-data'
import {onMounted, ref} from 'vue'
import { getPowerScreenData } from '@/services'

// 充电桩饱和比例
let chargingPile = ref(chargingPileData)
// 流程监控
let processMonitoring = ref(processMonitoringData)
// 充电桩数据分析
let chargingStatistics = ref(chargingStatisticsData)
// 异常监控
let exceptionMonitoring = ref(exceptionMonitoringData)
// 充电桩数据分析
let dataAnalysis = ref(dataAnalysisData)
// 充电桩Top4占比
let chargingTop4 = ref(chargingTop4Data)
let percentage = ref(0)

// 发起网络请求拿到首页的数据
  getPowerScreenData()
  .then((res)=>{
    chargingPile.value = res.data.chargingPile.data
    processMonitoring.value = res.data.processMonitoring.data
    chargingStatistics.value = res.data.chargingStatistics.data
    exceptionMonitoring.value = res.data.exceptionMonitoring.data
    dataAnalysis.value = res.data.dataAnalysis.data
    chargingTop4.value = res.data.chargingTop4.data
    percentage.value = res.data.chargingTop4.totalPercentage
  })

</script>

<style scoped lang="scss">
.power-screen{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header{
    position: absolute;
    top: 21px;
    left: 0;
    right: 0;
    height: 56px;
    background-image: url(@/assets/images/bg_header.svg);
    background-repeat: no-repeat;
  }
  .left-top {
      position: absolute;
      top: 116px;
      left: 16px;
      width: 536px;
      height: 443px;
      background-image: url(/src/assets/images/bg_left-top.svg);
      background-repeat: no-repeat;
  }
  .left-bottom {
      position: absolute;
      bottom: 49px;
      left: 16px;
      width: 536px;
      height: 443px;
      background-image: url(/src/assets/images/bg_left_bottom.svg);
      background-repeat: no-repeat;
  }
  .right-top {
      position: absolute;
      right: 17px;
      top: 96px;
      width: 519px;
      height: 327px;
      background-image: url(/src/assets/images/bg_right_top.svg);
      background-repeat: no-repeat;
  }
  .right-center {
      position: absolute;
      right: 17px;
      top: 443px;
      width: 519px;
      height: 327px;
      background-image: url(/src/assets/images/bg_right_center.svg);
      background-repeat: no-repeat;
  }
  .right-bottom {
      position: absolute;
      right: 17px;
      bottom: 49px;
      width: 519px;
      height: 242px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(/src/assets/images/bg_right_bottom.svg);
      background-repeat: no-repeat;
  }
  .center{
      position: absolute;
      right: 540px;
      bottom: 272px;
      width: 823px;
      height: 710px;
      /* border: 5px solid pink; */
  }
  .bottom{
      position: absolute;
      right: 540px;
      bottom: 49px;
      width: 823px;
      height: 209px;
      background-image: url(/src/assets/images/bg_bottom.svg);
      background-repeat: no-repeat;
  }
}
</style>
