



import React from 'react';
import ReactApexcharts from 'react-apexcharts';

const SummaryChart = () => {
  const options = {
    chart: {
      animations: {
        enabled: false
      },
      dropShadow: {
        blur: 20
      },
      foreColor: '#333',
      fontFamily: 'Roboto',
      height: 250,
      id: '5YKmP',
      toolbar: {
        show: false,
        tools: {
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      },
      type: 'area',
      width: 480
    },
    plotOptions: {
      bar: {
        borderRadius: 10
      },
      radialBar: {
        hollow: {
          background: '#fff'
        },
        dataLabels: {
          name: {},
          value: {},
          total: {}
        }
      },
      pie: {
        donut: {
          labels: {
            name: {},
            value: {},
            total: {}
          }
        }
      }
    },
    colors: [
      '#775DD0',
      '#00E396',
      '#FEB019',
      '#FF4560',
      '#775DD0'
    ],
    dataLabels: {
      enabled: false,
      style: {
        fontWeight: 700
      }
    },
    fill: {},
    grid: {
      borderColor: '#E1E1E1',
      row: {},
      padding: {
        top: 15,
        right: 12,
        bottom: 8,
        left: 15
      }
    },
    legend: {
      fontSize: 14,
      offsetY: 0,
      itemMargin: {
        vertical: 0
      }
    },
    markers: {
      hover: {
        sizeOffset: 6
      }
    },
    series: [
      {
        name: 'Area',
        data: [
          {
            x: 'Jan',
            y: 15000
          },
          {
            x: 'Feb',
            y: 10000
          },
          {
            x: 'Mar',
            y: 15000
          },
          {
            x: 'Apr',
            y: 18000
          },
          {
            x: 'May',
            y: 15000
          },
          {
            x: 'Jun',
            y: 27000
          }
        ]
      }
    ],
    stroke: {
      width: 4
    },
    tooltip: {},
    xaxis: {
      offsetY: 5,
      labels: {
        trim: true,
        style: {}
      },
      tickAmount: 'dataPoints',
      title: {
        style: {
          fontWeight: 700
        }
      }
    },
    yaxis: {
        tickAmount: 5,
        labels: {
          className: "my-chart-y-axis-labels",
          formatter: function(val) {
            return val / 1000 + "k"
          },
          style: {}
        },
      title: {
        style: {
          fontWeight: 700
        }
      }
    }
  };

  return (
    <ReactApexcharts options={options} series={options.series} type="area" height={400} />
  );
};

export default SummaryChart;

