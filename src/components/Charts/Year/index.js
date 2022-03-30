import React, { useRef, useEffect, useState } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';


Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


const ChartYear = (props) => {
    const [yearData, setYearData] = useState([])
    const chartRef = useRef();
    console.log('chart component', props.yearData);
    
    const [count, setCount] = useState()

    setInterval(function () {
        setCount(count + 1)
    }, 1000)

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        
        setYearData(props.yearData)
        console.log('chart component use effect ', props.yearData[5]);

        new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: '연간 전력 사용량',
                    data: yearData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                },
            },
        });
    })

    

    return (
        <CardBasic title="연간 전력 사용량">
            <div className="chart-body ">
                <canvas id="ChartToday" ref={chartRef}></canvas>
            </div>
        </CardBasic>
    )
}

export default ChartYear;