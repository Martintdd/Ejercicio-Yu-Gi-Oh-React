/* import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function Graphic () {

    const options = [
      {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
    ];
    const series = [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }
    ]    

    return (
        <div>
          <br />
          <h2>Graphic</h2>
          <br />
          { <ReactApexChart options={options} series={series} type="bar" width={500} height={320} /> }
          <br />
        </div>
  )
} 


 */