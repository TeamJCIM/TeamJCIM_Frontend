import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import axios from 'axios';

import CardBasic from '../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';

export default function NextMonth(props) {
    const chartRef = React.createRef();

    const [nextData, setNextData] = useState({
        predData: '',
        iotData: '',
    });

    var predData = [];
    var iotData = [];

    useEffect(() => {
        axios
            .get(`api/safety/PowerAnalysis/1227564000/2021`)
            .then(function (response) {
                response['data']['data'][0].forEach((element) => {
                    const idx = element['Month'] - 1;
                    predData[idx] = element['PredictData'];
                });
                response['data']['data'][1].forEach((element) => {
                    const idx = element['Month'] - 1;
                    iotData[idx] = element['IotData'];
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log(predData);
        console.log(iotData);

        const nextMonthChartLine = chartRef.current.getContext('2d');

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
                    label: '예상 전력 사용량',
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
        new Chart(nextMonthChartLine, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }, []);

    return (
        <CardBasic title={props.title}>
            <div className="chart-body ">
                <canvas id="ChartToday" ref={chartRef}></canvas>
            </div>
        </CardBasic>
    );
}
