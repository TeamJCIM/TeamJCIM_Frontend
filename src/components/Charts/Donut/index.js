import React, { Component } from 'react';
import { Chart } from 'chart.js';

import CardBasic from '../../Cards/Basic';

class ChartDonut extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myPieChart = this.chartRef.current.getContext('2d');
        console.log(this.chartRef);

        new Chart(myPieChart, {
            type: 'doughnut',
            data: {
                labels: ["Safety", "Caution", "Danger"],
                datasets: [{
                    data: [1, 1, 1],
                    backgroundColor: [
                        'rgba(46, 204, 113, 1)',
                        'rgba(255, 164, 46, 1)',
                        'rgba(231, 76, 60, 1)',
                        ],
                    borderWidth: 20,
                }],
            },
            options: {
                rotation : 1 * Math.PI,
                circumference: 1 * Math.PI,

                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: 'rgb(255,255,255)',
                    bodyFontColor: '#858796',
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false,
                },
                cutoutPercentage: 80,
                showMarkers: true,
            },
        });
    }

    render() {
        return (
            <CardBasic title="Iot">
                <div className="chart-pie pt-4">
                        <canvas id="myPieChart" ref={this.chartRef}></canvas>
                        <p className='percent'> Safety </p>
                </div>
            </CardBasic>
        );
    }
}

export default ChartDonut;
