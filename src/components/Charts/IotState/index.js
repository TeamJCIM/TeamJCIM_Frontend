import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';

import axios from 'axios'

import CardBasic from '../../Cards/Basic';



function drawNeedle(needleRadius) {
    const canvas = document.getElementById("myPieChart");
    // console.log(canvas)
    var ctx = canvas.getContext('2d');
    // console.log(ctx)
    var cw = canvas.offsetWidth;
    var ch = canvas.offsetHeight;
    console.log(cw, ch)
    var cx = cw / 2;
    var cy = ch - 10;

    ctx.translate(cx, cy);  // cx, cy 만큼 평행이동
    console.log('needle radius', needleRadius)
    ctx.rotate(needleRadius)
    ctx.beginPath()
    ctx.moveTo(0, -5)
    ctx.lineTo(ch / 2, 0)
    ctx.lineTo(0, 5)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.rotate(-needleRadius)
    ctx.font = '18px serif'
    
    ctx.rotate( - (Math.PI * 60 / 180))
    ctx.fillStyle = 'rgba(0, 255, 0, 0.8)'
    ctx.fillText('SAFETY', - (cy * 1 / 6), - (cy * 2 / 3))

    ctx.rotate( (Math.PI * 120 / 180))
    ctx.font = '18px serif'

    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)'
    ctx.fillText('DANGER', - (cy * 1 / 6), - (cy * 2 / 3))

    ctx.rotate(- (Math.PI * 60 / 180))
    ctx.font = '18px serif'
    ctx.fillStyle = 'rgba(255, 155, 0, 0.8)'
    ctx.fillText('WARNING', - (cy * 1 / 5), - (cy * 2 / 3))
    
}

const IotStateChart = () => {
    const chartRef = useRef()

    const [iotNum, setIotNum] = useState(1227564000)
    const [date, setDate] = useState('2021-09-09')
    let post = {
        IotNum: iotNum,
        Date: date,
    }

    const [iotState, setIotState] = ''
    let radius = 0
    /*
    const [radius, setRadius] = useState()

    async function change(radius) {
        setRadius((current) => radius)
    }*/

    useEffect(() => {

        const myPieChart = chartRef.current

        const getData = async () => {
            console.log('getdata1 start')
            await axios.get(`/api/overview/${post.IotNum}/${post.Date}`,)
                .then((response) => {
                    console.log('IotState response :', response)
                    console.log('response data :', response.data.data[2].AlarmVoltage)

                    // IOT 상태데이터 GET
                    if (response.data.data[2].AlarmVoltage === 4
                        || response.data.data[2].AlarmElectric === 2
                        || response.data.data[2].AlarmLeakage === 2
                        || response.data.data[2].AlarmArc === 1
                        || response.data.data[2].AlarmTemperature === 1) {
                        radius = -30
//                        setIotState('danger')
                        console.log('1')
                    } else if (response.data.data[2].AlarmVoltage === 1
                        || response.data.data[2].AlarmVoltage === 2
                        || response.data.data[2].AlarmElectric === 1
                        || response.data.data[2].AlarmLeakage === 1) {
                        radius = -90
//                            setIotState('warning')
                        console.log('2')
                    } else {
                        radius = -150
//                        setIotState('safety')
                        console.log('3')
                        console.log('radius', radius)
                    }


                    console.log('axios radius 1 :', radius)
                }).catch((error) => {
                    console.log('axios catch :', error)
                })
            console.log('axios radius 2 :', radius)

            console.log('end')
        }
        
        const getData2 = async () => {
            console.log('get data2 start')
            await getData()
            if (radius === -30) {
                new Chart(myPieChart, {
                    type: 'doughnut',
                    data: {
                        labels: ["Safety", "Caution", "Danger"],
                        datasets: [{
                            data: [1, 1, 1],
                            backgroundColor: [
                                'rgba(0, 255, 0, 0.2)',
                                'rgba(255, 155, 0, 0.2)',
                                'rgba(255, 0, 0, 1)',
                            ],
                            borderWidth: 1,
                            // hoverBackgroundColor, hoverBorderColor, hoverBorderWidth
                            borderAlign: 'inner',   // 테두리 정렬 : 'center' 테두리 겹침, 'inner' 테두리 안겹침

                        }],
                    },
                    options: {
                        cutoutPercentage: 80,           // 차트의 중앙을 자르는 백분율
                        rotation: 1 * Math.PI,          // 호를 그릴 시작  각도
                        circumference: 1 * Math.PI,     // 호가 덮일 수 있도록 허용

                        // animateRotate, animateScale

                        maintainAspectRatio: false,     // 부모의 크기에 맞춤
                        tooltips: {
                            backgroundColor: 'rgb(255,255,255)',
                            bodyFontColor: '#858796',
                            borderColor: '#dddfeb',
                            borderWidth: 0,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                        },
                        legend: {
                            display: false,
                        },

                        showMarkers: true,
                        events: ['mouseup'],  // mousemove, mouseout, click, touchstart, touchmove
                        hover: {
                            onHover: setInterval(() => {
                                // ping === 1 ? setPing(2) : setPing(1)

                            }, 500),
                        },
                        animation: {
                            onComplete: function () {
                                console.log('1', radius)
                                console.log('2', Math.PI / 180)
                                console.log('3', radius * Math.PI / 180)
                                drawNeedle(-30 * Math.PI / 180)
                            },
                            animateRotate: false,
                        },
                    }
                })
            } else if (radius === -90) {
                new Chart(myPieChart, {
                    type: 'doughnut',
                    data: {
                        labels: ["Safety", "Caution", "Danger"],
                        datasets: [{
                            data: [1, 1, 1],
                            backgroundColor: [
                                'rgba(0, 255, 0, 0.2)',
                                'rgba(255, 155, 0, 1)',
                                'rgba(255, 0, 0, 0.2)',
                            ],
                            borderWidth: 1,
                            // hoverBackgroundColor, hoverBorderColor, hoverBorderWidth
                            borderAlign: 'inner',   // 테두리 정렬 : 'center' 테두리 겹침, 'inner' 테두리 안겹침

                        }],
                    },
                    options: {
                        cutoutPercentage: 80,           // 차트의 중앙을 자르는 백분율
                        rotation: 1 * Math.PI,          // 호를 그릴 시작  각도
                        circumference: 1 * Math.PI,     // 호가 덮일 수 있도록 허용

                        // animateRotate, animateScale

                        maintainAspectRatio: false,     // 부모의 크기에 맞춤
                        tooltips: {
                            backgroundColor: 'rgb(255,255,255)',
                            bodyFontColor: '#858796',
                            borderColor: '#dddfeb',
                            borderWidth: 0,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                        },
                        legend: {
                            display: false,
                        },

                        showMarkers: true,
                        events: ['mouseup'],  // mousemove, mouseout, click, touchstart, touchmove
                        hover: {
                            onHover: setInterval(() => {
                                // ping === 1 ? setPing(2) : setPing(1)

                            }, 500),
                        },
                        animation: {
                            onComplete: function () {
                                console.log('1', radius)
                                console.log('2', Math.PI / 180)
                                console.log('3', radius * Math.PI / 180)
                                drawNeedle(radius * Math.PI / 180)
                            },
                            animateRotate: false,
                        },
                    }
                })
            } else {
                new Chart(myPieChart, {
                    type: 'doughnut',
                    data: {
                        labels: ["Safety", "Caution", "Danger"],
                        datasets: [{
                            data: [1, 1, 1],
                            backgroundColor: [
                                'rgba(0, 255, 0, 1)',
                                'rgba(255, 155, 0, 0.2)',
                                'rgba(255, 0, 0, 0.2)',
                            ],
                            borderWidth: 1,
                            // hoverBackgroundColor, hoverBorderColor, hoverBorderWidth
                            borderAlign: 'inner',   // 테두리 정렬 : 'center' 테두리 겹침, 'inner' 테두리 안겹침

                        }],
                    },
                    options: {
                        cutoutPercentage: 80,           // 차트의 중앙을 자르는 백분율
                        rotation: 1 * Math.PI,          // 호를 그릴 시작  각도
                        circumference: 1 * Math.PI,     // 호가 덮일 수 있도록 허용

                        // animateRotate, animateScale

                        maintainAspectRatio: false,     // 부모의 크기에 맞춤
                        tooltips: {
                            backgroundColor: 'rgb(255,255,255)',
                            bodyFontColor: '#858796',
                            borderColor: '#dddfeb',
                            borderWidth: 0,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                        },
                        legend: {
                            display: false,
                        },

                        showMarkers: true,
                        events: ['mouseup'],  // mousemove, mouseout, click, touchstart, touchmove
                        hover: {
                            onHover: setInterval(() => {
                                // ping === 1 ? setPing(2) : setPing(1)

                            }, 500),
                        },
                        animation: {
                            onComplete: function () {
                                console.log('11', radius)
                                console.log('22', Math.PI / 180)
                                console.log('33', radius * Math.PI / 180)
                                drawNeedle(-150 * Math.PI / 180)
                            },
                            animateRotate: false,
                        },
                    }
                })
            }
        }
        
        getData2()
        
        /*axios.get(`/api/overview/${post.IotNum}/${post.Date}`,)
            .then((response) => {
                console.log('IotState response :', response)
                console.log('response data :', response.data.data[2].AlarmVoltage)

                // IOT 상태데이터 GET
                if (response.data.data[2].AlarmVoltage === 4
                    || response.data.data[2].AlarmElectric === 2
                    || response.data.data[2].AlarmLeakage === 2
                    || response.data.data[2].AlarmArc === 1
                    || response.data.data[2].AlarmTemperature === 1) {
                    setRadius(-30)

                } else if (response.data.data[2].AlarmVoltage === 1
                    || response.data.data[2].AlarmVoltage === 2
                    || response.data.data[2].AlarmElectric === 1
                    || response.data.data[2].AlarmLeakage === 1) {
                    setRadius(-90)
                } else {
                    setRadius(-150)
                }


                console.log('axios radius :', radius)
            }).catch((error) => {
                console.log('axios catch :', error)
            })*/
        // console.log(chartRef);
        
    
    
    
    // console.log('charts',)
    }, [radius])

    return (
        <CardBasic title="IOT">
            <div className="chart-pie pt-4 pb-4">
                <canvas id="myPieChart" ref={chartRef}></canvas>
                {/*<p className='percent'> Safety </p>*/}
            </div>
        </CardBasic>
    );

}

export default IotStateChart;
