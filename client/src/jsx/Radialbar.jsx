import React from "react";
import ReactApexChart from 'react-apexcharts';

export default function WindGraph(props) {
  const { val1 } = props;

  const series = [val1];
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,

        track: {
          background: 'rgba(255,255,255,0.08)',
          strokeWidth: '18%',
          margin: 6
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ffb36b'],
        inverseColors: false,
        opacityFrom: 0.95,
        opacityTo: 0.95,
        stops: [0, 100]
      }
    },
    labels: ['Humidity'],
  };

  return (
    <div id="chart" className="card glass fade-in card-float" style={{ padding: '0.5rem' }}>
      <ReactApexChart options={options} series={series} type="radialBar" />
      <div className="chart-labels">
        <div className="chart-label chart-label-small" style={{ backgroundColor: 'var(--accent)', color: '#073b4c', marginBottom: '1%' }}>Humidity</div>
        {/* <div className="chart-label chart-label-small" style={{ backgroundColor: 'blue', color: 'white' }}>Chances of Rain</div> */}
      </div>
    </div>
  );
}
