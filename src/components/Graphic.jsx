import { Component } from 'react';
import Chart from 'react-apexcharts'


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


class Graphic extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: ["Card Market", "TCGPlayer", "Ebay", "Amazon", "Cool Stuff Inc"]
        }
      },
      series: [{
        name: 'series-1',
        data: [0.11, 0.17, 26.49, 0.40, 0.25]       
      }]
    }
  }
  render() {
    return (
      <div className="grafico-precios">
        <div className="grafico-precios-titulo">
          <h6>Comparativa Precios de Mercado:</h6>
        </div>
        <div className="grafico-precios-grafico">
          <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
        </div>
      </div>      
    )
  }
}

export default Graphic;