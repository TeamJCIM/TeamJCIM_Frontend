import React, { Component } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


class ChartMonth extends Component {
    chartRef = React.createRef();

    componentDidMount() {

        const myChartRef = this.chartRef.current.getContext("2d");
        console.log(this.chartRef);
        
        const data = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            datasets: [{
                label: "전월 사용량",
                data: [10, 15, 20, 15, 20, 30, 25, 30, 40, 15, 20, 30, 25, 10, 15, 20, 15, 20, 30, 25, 30, 40, 15, 20, 30, 25, 57, 15, 20, 30, 25],
                borderColor: 'rgba(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',

            }, {
                label: "당월 사용량",
                data: [10, 15, 30, 25, 30, 40, 15, 20, 20, 15, 20, 15, 20, 30, 40, 15, 20, 30, 25, 10, 15, 20, 15, 29, 20, 55, 22, 30, 45, 11],
                borderColor: 'rgba(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            }]
        }

        const options = {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Line Chart - Multi Axis'
                }
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        fontColor: 'blue',
                        labelString: '',
                    },
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 10,
                        // Include a dollar sign in the ticks
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',

                    // grid line settings
                    grid: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                },
            },
        }

        new Chart(myChartRef, {
            type: 'line',
            data: data,
            options: options,
        });
    }

    render() {
        return (
            <CardBasic title="당월/전월 전력 사용량">
                <div className="chart-body ">
                    <canvas id="ChartMonth" ref={this.chartRef}></canvas>
                </div>
            </CardBasic>
        )
    }
}

export default ChartMonth;