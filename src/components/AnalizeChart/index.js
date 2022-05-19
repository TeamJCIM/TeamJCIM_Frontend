import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import axios from 'axios';

import CardBasic from '../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';

export default function AnalizeChart(props) {
    const chartRef = React.createRef();

    // const today = new Date();
    // var thisMonth = today.getMonth();
    // var prevMonth = thisMonth - 1;

    var thisMonth = 2;
    var prevMonth = thisMonth - 1;

    const [data, setData] = useState({
        thisMonth_IotData: '',
        thisMonth_predData: '',
        prevMonth_IotData: '',
        changeMessage: '',
        errorRate: '',
    });

    if (thisMonth === 0) {
        prevMonth = 11;
    }

    const pArray = [];
    const iArray = [];

    useEffect(() => {
        const analizeChartRef = chartRef.current.getContext('2d');

        async function fetch() {
            const response = await axios.get(
                `/api/safety/PowerAnalysis/1232713263/2022`
            );
            console.log(response);
            try {
                response['data']['data'][0].forEach((element) => {
                    const idx = element['Month'] - 1;
                    pArray[idx] = element['PredictData'];
                });
                response['data']['data'][1].forEach((element) => {
                    const idx = element['Month'] - 1;
                    iArray[idx] = element['IotData'];
                });
                setData({
                    ...data,
                    thisMonth_IotData: iArray[thisMonth],
                    thisMonth_predData: pArray[thisMonth],
                    prevMonth_IotData: iArray[prevMonth],
                });

                var change =
                    ((iArray[thisMonth] - iArray[prevMonth]) /
                        iArray[prevMonth]) *
                    100;

                if (change > 0) {
                    setData({
                        ...data,
                        changeMessage: `이번 달은(${
                            thisMonth + 1
                        }월) 사용량은 저번 달(${
                            prevMonth + 1
                        }월) 보다 ${Math.abs(change)} (%)가량 증가 하였습니다`,
                    });
                } else {
                    setData({
                        ...data,
                        changeMessage: `이번 달(${
                            thisMonth + 1
                        }월) 사용량은 저번 달(${
                            prevMonth + 1
                        }월) 보다 ${Math.abs(change)} (%)가량 감소 하였습니다`,
                    });
                }

                //오차율 = (|실제값 - 측정값|) / (실제값) * 100
                setData({
                    ...data,
                    errorRate: `지난달에 ${
                        (Math.abs(iArray[thisMonth] - pArray[thisMonth]) /
                            iArray[thisMonth]) *
                        100
                    }(%) 의 오차율로 전력예측을 했습니다.`,
                });
                console.log(iArray[thisMonth]);
                console.log(pArray[thisMonth]);
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
            {/* <div>{data.changeMessage} </div> */}
            <div>{data.errorRate} </div>
        </CardBasic>
    );
}
