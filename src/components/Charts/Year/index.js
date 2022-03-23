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
                label: '연간 전력 사용량',
                data: [65, 59, 80, 81, 56, 55, 40, 35, 65, 14, 53, 93],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
            }]
        };

        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
        }

        new Chart(myChartRef, {
            type: 'bar',
            data: data,
            options: options,
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