import React, { useEffect, useRef } from 'react';
import { Chart } from "chart.js";

import CardBasic from '../../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


function ChartNow (props) {
    const chartRef = useRef()
    const data = props.electricData
    
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ["0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", 
                "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h"],
                datasets: [{
                    label: "wh",
                    lineTension: 0.5, // 곡선의 장력
                    backgroundColor: "rgba(78, 115, 223, 0.1)",
                    borderColor: "rgba(78, 115, 223, 1)",   // 선 색상
                    pointRadius: 0,
                    pointBackgroundColor: "rgba(78, 115, 223, 1)",
                    pointBorderColor: "rgba(78, 115, 223, 1)",
                    pointBorderWidth: 1,
                    fill: true,
                    data: data
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 25,
                        top: 25,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'date'
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            maxTicksLimit: 24
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: false,
                            fontColor: 'blue',
                            labelString: '',
                        },
                        ticks: {
                            beginAtZero: false,
                            // maxTicksLimit: 5,
                            // padding: 10,
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
                },
            },
            
        });
    })

    return (
        <CardBasic title="실시간 사용량">
            <div className="chart-area">
                <canvas id="myAreaChart" ref={chartRef}></canvas>
            </div>
        </CardBasic>
    )
    
}

export default ChartNow;