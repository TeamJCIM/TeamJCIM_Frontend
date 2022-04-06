import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';

import CardBasic from '../../Cards/Basic';

const ChartDonut = () => {
    const chartRef = useRef()

    useEffect(() => {
        const myPieChart = chartRef.current
        console.log(chartRef);

        new Chart(myPieChart, {
            type: 'doughnut',
            data: {
                labels: ["Safety", "Caution", "Danger"],
                datasets: [{
                    data: [1, 1, 1],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 155, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                    borderWidth: 20,
                }],
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,

                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: 'rgb(255,255,255)',
                    bodyFontColor: '#858796',
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false,
                },
                cutoutPercentage: 80,
                showMarkers: true,
            },
        });
    })
        
    


        return (
            <CardBasic title="IOT">
                <div className="chart-pie pt-4">
                        <canvas id="myPieChart" ref={chartRef}></canvas>
                        <p className='percent'> Safety </p>
                </div>
            </CardBasic>
        );

}

export default ChartDonut;
