import React, { useEffect, useRef } from 'react';
import { Chart } from "chart.js";

import CardBasic from '../../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';

function drawTime(needleRadius) {
    const canvas = document.getElementById("myChartRef");
    console.log('my pie chart in draw needle >>',)
    // console.log(canvas)
    var ctx = canvas.getContext('2d');  // drawing context
    console.log('ctx >>', ctx)
    var cw = canvas.offsetWidth;
    var ch = canvas.offsetHeight;
    console.log('cw, ch >>', cw, ch)
    var cx = cw / 2;
    var cy = ch / 2;
    console.log('cx, cy >>', cx, cy)

    ctx.translate(cx, cy);  // cx, cy 만큼 평행이동
    // console.log('needle radius', needleRadius)
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)'
    ctx.fill();

    // ctx.beginPath();
    // ctx.arc(0, 0, 7, 0, Math.PI * 2);
    // ctx.fill();

    ctx.font = '24px serif'

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('0', - cx / 40, - cy * 15 / 16)    // 0시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('1', cx * 4 / 36, - cy * 44 / 48)  // 1시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('2', cx * 8 / 36, - cy * 40 / 48)  // 2시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('3', cx * 12 / 36, - cy * 32 / 48) // 3시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('4', cx * 15 / 36, - cy * 24 / 48) // 4시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('5', cx * 17 / 36, - cy * 12 / 48) // 5시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('6', cx * 18 / 36, 0)              // 6시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('7', cx * 17 / 36, cy * 12 / 48)   // 7시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('8', cx * 15 / 36, cy * 24 / 48)   // 8시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('9', cx * 13 / 36, cy * 34 / 48)   // 9시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('10', cx * 8 / 36, cy * 43 / 48)   // 10시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('11', cx * 4 / 36, cy * 47 / 48)   // 11시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('12', - cx / 60, cy)               // 12시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('23', -cx * 6 / 36, - cy * 44 / 48)  // 13시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('22', -cx * 10 / 36, - cy * 40 / 48)  // 14시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('21', -cx * 14 / 36, - cy * 32 / 48) // 15시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('20', -cx * 17 / 36, - cy * 22 / 48) // 16시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('19', -cx * 19 / 36, - cy * 10 / 48) // 17시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('18', -cx * 20 / 36, cy * 3 / 48)              // 18시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('17', -cx * 19 / 36, cy * 16 / 48)   // 19시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('16', -cx * 17 / 36, cy * 27 / 48)   // 20시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('15', -cx * 14 / 36, cy * 36 / 48)   // 21시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('14', -cx * 10 / 36, cy * 43 / 48)   // 22시

    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillText('13', -cx * 5 / 36, cy * 47 / 48)   // 23시


    ctx.translate(-cx, -cy)
}

const ChartToday = (props) => {
    const chartRef = useRef(); // useRef : ref object( { current :  } )를 반환

    const todayData = props.electricData
    
    let maxValue = 0
    /*if (Math.max(...todayData) === 0) {
        maxValue = 2000
    } else { maxValue = Math.max(... todayData)
        maxValue = maxValue / 100
        maxValue = Math.floor(maxValue)
        maxValue = 100 * maxValue
    }*/
    
    console.log('props electric data >>', props.electricData)

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: 'polarArea',
            data: {
                labels: [
                    '0-1h',
                    '1-2h',
                    '2-3h',
                    '3-4h',
                    '4-5h',
                    '5-6h',
                    '6-7h',
                    '7-8h',
                    '8-9h',
                    '9-10h',
                    '10-11h',
                    '11-12h',
                    '12-13h',
                    '13-14h',
                    '14-15h',
                    '15-16h',
                    '16-17h',
                    '17-18h',
                    '18-19h',
                    '19-20h',
                    '20-21h',
                    '21-22h',
                    '22-23h',
                    '23-24h',
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: props.electricData,
                    backgroundColor: 'rgb(54, 162, 235, 0.5)',
                }]
            },
            options: {
                // responsive : 반응형
                responsive: true,
                // Axes 축
                scales: {
                    r: {
                        pointLabels: {
                            display: true,
                            centerPointLabel: true,
                            font: {
                                size: 10,
                            },
                        },
                    },
                },
                scale: {
                    angleLines: { display: true, center: true },
                    ticks: {
                        // min: Math.min(... todayData),
                        // max: maxValue,
                    },
                },
                legend: {
                    display: false,
                    position: 'bottom',
                },
                animation: {
                    onComplete: function () {
                        drawTime()
                    },
                    animateRotate: false,
                },
                events: {
                    events: ['mouseup', 'click'],
                }
            },
        });
    })

    
    return (
        <CardBasic title="당일 전력 사용량">
            <div className="chart-body pt-4 pb-4 mt-4 mb-4">
                <canvas id="myChartRef" ref={chartRef}></canvas>
            </div>
        </CardBasic>
    )
    
}

export default ChartToday;