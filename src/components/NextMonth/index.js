import React, { Component } from 'react';
import Chart from 'chart.js';

import CardBasic from '../Cards/Basic';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';

class NextMonth extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext('2d');
        console.log(this.chartRef);
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
                    data: [3809, 2901, 2305, 4592, 5285],
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
    }

    render() {
        return (
            <CardBasic title={this.props.title}>
                <div className="chart-body ">
                    <canvas id="ChartToday" ref={this.chartRef}></canvas>
                </div>
            </CardBasic>
        );
    }
}

export default NextMonth;
