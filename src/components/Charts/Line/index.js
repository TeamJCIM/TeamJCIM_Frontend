import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js';
import CardBasic from '../../Cards/Basic';
import axios from 'axios';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';

export default function ChartLine(props) {
    const chartRef = React.createRef();

    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
    var lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    var thisMonthDay = [];
    // //동적으로 구하는 방식
    // for (var i = firstDay; i <= lastDay; i++) {
    //     thisMonthDay.push(i);
    // }

    //데이터가 1월까지 밖에 없음 현재 2월 1일이라고 가정.
    for (var i = firstDay; i <= 28; i++) {
        thisMonthDay.push(i);
    }

    const [thisData, setThisData] = useState({
        predData: [],
        iotData: [],
    });

    const pArray = [];

    useEffect(() => {
        // async function fetch() {
        //     await axios
        //         .get(`api/predict/predictNextMonth/1227564000`)
        //         .then(function (response) {
        //             console.log(response);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // }
        // fetch();

        const thisMonthChartLine = chartRef.current.getContext('2d');
        new Chart(thisMonthChartLine, {
            type: 'line',
            data: {
                labels: thisMonthDay,
                datasets: [
                    {
                        label: '예측전력량',
                        lineTension: 0.3,
                        backgroundColor: 'rgba(78, 115, 223, 0.05)',
                        borderColor: 'rgba(78, 115, 223, 1)',
                        pointRadius: 3,
                        pointBackgroundColor: 'rgba(78, 115, 223, 1)',
                        pointBorderColor: 'rgba(78, 115, 223, 1)',
                        pointHoverRadius: 8,
                        pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
                        pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
                        pointHitRadius: 5,
                        pointBorderWidth: 2,
                        data: [],
                    },
                    {
                        label: '실제사용량',
                        lineTension: 0.3,
                        backgroundColor: 'rgba(102, 250, 156, 0.05)',
                        borderColor: 'rgba(102, 250, 156, 1)',
                        pointRadius: 3,
                        pointBackgroundColor: 'rgba(102, 250, 156, 1)',
                        pointBorderColor: 'rgba(102, 250, 156, 1)',
                        pointHoverRadius: 8,
                        pointHoverBackgroundColor: 'rgba(102, 250, 156, 1)',
                        pointHoverBorderColor: 'rgba(102, 250, 156,1)',
                        pointHitRadius: 5,
                        pointBorderWidth: 2,
                        data: [],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 25,
                        top: 25,
                        bottom: 0,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: 'date',
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                maxTicksLimit: 7,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                maxTicksLimit: 8,
                                padding: 10,
                                // Include a dollar sign in the ticks
                            },
                            gridLines: {
                                color: 'rgb(234, 236, 244)',
                                zeroLineColor: 'rgb(234, 236, 244)',
                                drawBorder: false,
                                borderDash: [2],
                                zeroLineBorderDash: [2],
                            },
                        },
                    ],
                },
                legend: {
                    display: true,
                },
                tooltips: {
                    backgroundColor: 'rgb(255,255,255)',
                    bodyFontColor: '#858796',
                    titleMarginBottom: 10,
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
                            var datasetLabel =
                                chart.datasets[tooltipItem.datasetIndex]
                                    .label || '';
                            return datasetLabel + ':' + tooltipItem.yLabel;
                        },
                    },
                },
            },
        });
    }, []);

    return (
        <CardBasic title={props.title}>
            <div className="chart-area">
                <canvas id="myAreaChart" ref={chartRef}></canvas>
            </div>
        </CardBasic>
    );
}
