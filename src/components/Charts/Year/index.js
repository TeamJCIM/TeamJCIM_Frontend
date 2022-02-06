import React, { Component } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


class ChartYear extends Component {
    chartRef = React.createRef();

    componentDidMount() {

        const myChartRef = this.chartRef.current.getContext("2d");
        console.log(this.chartRef);
        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40, 35, 65, 14, 53, 93],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(145, 25, 86, 0.2)',
                    'rgba(75, 142, 192, 0.2)',
                    'rgba(54, 12, 155, 0.2)',
                    'rgba(153, 202, 155, 0.2)',
                    'rgba(201, 43, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgba(145, 25, 86)',
                    'rgba(75, 142, 192)',
                    'rgba(54, 12, 155)',
                    'rgba(153, 202, 155)',
                    'rgba(201, 43, 207)'
                ],
                borderWidth: 1
            }]
        };
        new Chart(myChartRef, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });
    }

    render() {
        return (
            <CardBasic title="연간 전력 사용량">
                <div className="chart-body ">
                    <canvas id="ChartToday" ref={this.chartRef}></canvas>
                </div>
            </CardBasic>
        )
    }
}

export default ChartYear;