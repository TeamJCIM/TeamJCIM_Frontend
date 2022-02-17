import React, { Component } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

class ChartIot extends Component {
    chartRef = React.createRef();

    componentDidMount() {

        const myIotChart = this.chartRef.current.getContext("2d");
        console.log(this.chartRef);

        const data = {
            labels: ["Direct", "Referral", "Social"],
            datasets: [{
                data: [55, 30, 15],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
                borderWidth: 15,
            }],
        }

        const options = {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,

            lmaintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 80,
        }

        new Chart(myIotChart, {
            type: 'doughnet',
            data: data,
            options: options,
        });
    }

    render() {
        return (
            <CardBasic title="Iot">
                <div className="chart-pie pt-4">
                    <canvas id="myIotChart" ref={this.chartRef}></canvas>
                </div>
            </CardBasic>
        )
    }
}

export default ChartIot;