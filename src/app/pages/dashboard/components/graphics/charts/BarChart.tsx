import { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'

export const BarChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 'auto',
      fontFamily: 'Montserrat, sans-serif',
    },
    title: {
      text: 'Barras',
      align: 'left',
      margin: 0,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#5d405c',
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
    },
  }

  const series: ApexAxisChartSeries = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={'100%'} />
    </div>
  )
}
