import React, { useEffect } from 'react';
import { Chart } from 'chart.js';
import axios from 'axios';

import CardBasic from '../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';

export default function AnalizeChart(props) {
    const chartRef = React.createRef();

    useEffect(() => {
        axios
            .get(`/api/safety/PowerAnalysis/1227564000/2021`)
            .then(function (response) {
                response['data']['data'][0].forEach((element) => {
                    // const idx = element['Month'] - 1;
                });
                response['data']['data'][1].forEach((element) => {
                    // const idx = element['Month'] - 1;
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        const myChartRef = chartRef.current.getContext('2d');
        const data = {
            labels: [
                '1월',
                '2월',
                '3월',
                '4월',
                '5월',
                '6월',
                '7월',
                '8월',
                '9월',
                '10월',
                '11월',
                '12월',
            ],
            datasets: [
                {
                    label: '실제 전력 사용량',
                    axis: 'y',
                    data: '',
                    fill: false,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgb(75, 192, 192)',
                        'rgb(75, 192, 192)',
                        'rgb(75, 192, 192)',
                        'rgb(75, 192, 192)',
                        'rgb(75, 192, 192)',
                    ],
                    borderWidth: 1,
                },
                {
                    label: '예상 전력 사용량',
                    axis: 'y',
                    fill: false,
                    data: [3908, 3029, 2015, 3928, 4239],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgb(54, 162, 235)',
                        'rgb(54, 162, 235)',
                        'rgb(54, 162, 235)',
                        'rgb(54, 162, 235)',
                        'rgb(54, 162, 235)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
        new Chart(myChartRef, {
            type: 'horizontalBar',
            data: data,
            options: {
                scales: {
                    indexAxis: 'y',
                },
            },
        });
    });

    return (
        <CardBasic title={props.title}>
            <div className="chart-body">
                <canvas id="ChartTody" ref={chartRef}></canvas>
            </div>
        </CardBasic>
    );
}
