import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export const useEcharts = (options: echarts.EChartsCoreOption, data?: any) => {
  const myChart = useRef<echarts.EChartsType>()
  const chartDom = useRef<HTMLDivElement>(null)

  const echartResize = () => {
    chartDom && myChart?.current?.resize()
  }

  useEffect(() => {
    if (data?.lenght !== 0) {
      myChart?.current?.setOption(options)
    }
  }, [data])

  useEffect(() => {
    if (chartDom?.current) {
      myChart.current = echarts.init(chartDom.current)
    }
    myChart?.current?.setOption(options)
    window.addEventListener('resize', echartResize)
    return () => {
      window.removeEventListener('resize', echartResize)
      myChart.current?.dispose()
    }
  }, [])
  return { chartDom }
}
