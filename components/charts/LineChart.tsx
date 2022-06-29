import React from "react";
import ReactEcharts from "echarts-for-react";
import type { NextPage } from 'next'

const LineChart: NextPage = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: [ 'Mercury','Venus','Earth', 'Mars','Jupiter', 'Saturn','Uranus', 'Neptune'],
      axisLabel: {
        rotate: 90
      },
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [0,0,1,2,79,82,27,14],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.1)'
        }
      }
    ]
  };
  return (
    <div className="w-96 h-96">
      <ReactEcharts option={option} />
    </div>

    )
}
export default LineChart;