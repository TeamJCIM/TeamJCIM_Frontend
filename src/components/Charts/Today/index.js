import React, { Component } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


class ChartToday extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {

        const myChartRef = this.chartRef.current.getContext("2d");
        console.log(this.chartRef);
        const data = {
            labels: [
                '0-4h',
                '4-8h',
                '8-12h',
                '12-16h',
                '16-20h',
                '20-24h',
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [4, 16, 7, 12, 14, 4],
                backgroundColor: [
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(75, 192, 192, 0.7)',
                    'rgb(255, 205, 86, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                    'rgb(54, 162, 235, 0.7)',
                ]
            }]
        };

        const options = {
            backgroundColor: '#fff',
        }

        new Chart(myChartRef, {
            type: 'polarArea',
            data: data,
            options: options,
        });
    }

    render() {
        return (
            <CardBasic title="당일 전력 사용량">
                <div className="chart-body">
                    <canvas id="ChartToday" ref={this.chartRef}></canvas>
                </div>
            </CardBasic>
        )
    }
}

export default ChartToday;