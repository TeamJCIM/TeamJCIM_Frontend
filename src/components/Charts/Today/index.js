import React, { useEffect, useRef } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


const ChartToday = () => {
    const chartRef = useRef(); // useRef : ref object( { current :  } )를 반환
    // When ? 저장공간으로 사용, No rendering
    
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        // console.log('myChartRef :', myChartRef);
        // console.log('charRef : ', chartRef)
        
        const data = {
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
                data: [2000, 12, 16, 9, 0, 0, 19, 12, 1500, 9, 0, 0, 19, 12, 16, 9, 0, 0, 19, 12, 16, 9, 0, 2000,],
                backgroundColor: [
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(75, 192, 192, 0.7)',
                    'rgb(255, 205, 86, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(75, 192, 192, 0.7)',
                    'rgb(255, 205, 86, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(75, 192, 192, 0.7)',
                    'rgb(255, 205, 86, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(75, 192, 192, 0.7)',
                    'rgb(255, 205, 86, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                    'rgb(54, 162, 235, 0.7)',
                    'rgb(201, 203, 207, 0.7)',
                ]
            }]
        };

        const options = {
            // responsive : 반응형
            responsive: true,
            // Axes 축
            scales: {
                r: {
                    pointLabels: {
                        display: true,
                        centerPointLabel: true,
                        font: {
                            size : 10,
                        },
                    },
                },
                angleLines: {
                    display:true,
                    center: true
                }
            },
            scale: { angleLines: { display: true, center: true } },
            legend: {
                display: false,
                position: 'bottom',
            },

            title: {
                display: false,
                text: 'Chart.js Polar Area Chart With Centered Point Labels'
            },
            animation: {
                animateRotate : false,
                animateScale : false
            },
        }

        new Chart(myChartRef, {
            type: 'polarArea',
            data: data,
            options: options,
        });
    })

    
    return (
        <CardBasic title="당일 전력 사용량">
            <div className="chart-body">
                <canvas id="ChartToday" ref={chartRef}></canvas>
            </div>
        </CardBasic>
    )
    
}

export default ChartToday;