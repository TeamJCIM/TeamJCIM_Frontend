import React, { useRef, useEffect, useState } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

import axios from 'axios';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


const ChartMonth = (props) => {

    const chartRef = useRef()


    const [thisData, setThisData] = useState([])
    // props.thisMonthData
    const [lastData, setLastData] = useState([])
        // props.lastMonthData
    
    const [count, setCount] = useState()

    setInterval(function () {
        setCount(count + 1)
    }, 1000)

    useEffect(() => {

        setThisData(props.thisMonthData)
        setLastData(props.lastMonthData)

        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                datasets: [{
                    label: "전월 사용량",
                    data: lastData,
                    borderColor: 'rgba(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',

                }, {
                    label: "당월 사용량",
                    data: thisData,
                    borderColor: 'rgba(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                }]
            },
            options: {
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
            },
        });
    })

    
    return (
        <CardBasic title="당월/전월 전력 사용량">
            <div className="chart-body ">
                <canvas id="ChartMonth" ref={chartRef}></canvas>
            </div>
        </CardBasic>
    )
    
}

export default ChartMonth;