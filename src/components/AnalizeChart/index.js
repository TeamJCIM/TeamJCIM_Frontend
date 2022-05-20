import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import axios from 'axios';
import CardBasic from '../Cards/Basic';
import { useSelector } from 'react-redux';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';

export default function AnalizeChart(props) {
    const chartRef = React.createRef();

    const data = useSelector((state) => state);
    const iotNum = data.iotNumState.iotNum;

    const [message, setMessage] = useState('');
    const [errorRate, setErrorRate] = useState('');

    const pArray = [];
    const iArray = [];

    useEffect(() => {
        const analizeChartRef = chartRef.current.getContext('2d');

        async function fetch() {
            const response = await axios.get(
                `/api/safety/PowerAnalysis/${iotNum}/2022`
            );
            console.log(response);
            try {
                response['data']['data'][0].forEach((element) => {
                    pArray.push(element['PredictData']);
                });

                response['data']['data'][1].forEach((element) => {
                    iArray.push(element['IotData']);
                });

                var change = Math.ceil(
                    ((iArray[iArray.length - 1] - iArray[iArray.length - 2]) /
                        iArray[iArray.length - 2]) *
                        100
                );

                if (change > 0) {
                    setMessage(
                        `이번 달은(${iArray.length}월) 사용량은 저번 달(${
                            pArray.length - 1
                        }월) 보다 ${Math.abs(change)} (%)가량 증가 하였습니다`
                    );
                } else {
                    setMessage(
                        `이번 달(${iArray.length}월) 사용량은 저번 달(${
                            pArray.length - 1
                        }월) 보다 ${Math.abs(change)} (%)가량 감소 하였습니다`
                    );
                }

                //오차율 = (|실제값 - 측정값|) / (실제값) * 100

                setErrorRate(
                    `지난달에 ${Math.ceil(
                        (Math.abs(
                            iArray[iArray.length - 2] -
                                pArray[pArray.length - 2]
                        ) /
                            iArray[iArray.length - 2]) *
                            100
                    )}(%) 의 오차율로 전력예측을 했습니다.`
                );
            } catch (error) {
                console.log(error);
            }
            drawGraph();
        }
        fetch();

        function drawGraph() {
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
                        data: iArray,
                        fill: false,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
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
                            'rgb(75, 192, 192)',
                            'rgb(75, 192, 192)',
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
                        data: pArray,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
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
                            'rgb(54, 162, 235)',
                            'rgb(54, 162, 235)',
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
            new Chart(analizeChartRef, {
                type: 'horizontalBar',
                data: data,
                options: {
                    scales: {
                        indexAxis: 'y',
                    },
                },
            });
        }
    }, []);
    return (
        <CardBasic title={props.title}>
            <div className="chart-body">
                <canvas id="ChartBody" ref={chartRef}></canvas>
            </div>
            <div>{message} </div>
            <br></br>
            <div>{errorRate} </div>
        </CardBasic>
    );
}
