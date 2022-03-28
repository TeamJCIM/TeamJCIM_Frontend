import React, { useState, useEffect, useRef } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


function ChartNow (props) {
    const chartRef = useRef()
    const data = props.electricData
    console.log('data', data)
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        console.log('chartRef', chartRef);
        console.log('myChartRef', myChartRef)
        console.log('electric data', props.electricData)
        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ["0h", "2h", "4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h", "24h"],
                datasets: [{
                    label: "Kwh",
                    lineTension: 0.5, // 곡선의 장력
                    backgroundColor: "rgba(78, 115, 223, 0.1)",
                    borderColor: "rgba(78, 115, 223, 1)",   // 선 색상
                    pointRadius: 0,
                    pointBackgroundColor: "rgba(78, 115, 223, 1)",
                    pointBorderColor: "rgba(78, 115, 223, 1)",
                    pointBorderWidth: 2,
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
                            maxTicksLimit: 12
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
                /*legend: {
                    display: false,
                },*/
                /*tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    // titleMarginBottom: 10,
                    titleFontColor: '#6e707e',
                    titleFontSize: 14,
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    intersect: false,
                    mode: 'index',
                    caretPadding: 10,
                    callbacks: {
                        label: function (tooltipItem, chart) {
                            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                            return datasetLabel + ':' + tooltipItem.yLabel;
                        }
                    }
                },*/
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