import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import CardBasic from '../../Cards/Basic';



function drawNeedle(needleRadius) {
    const canvas = document.getElementById("myPieChart");
    console.log('my pie chart in draw needle >>', )
    // console.log(canvas)
    var ctx = canvas.getContext('2d');  // drawing context
    console.log('ctx >>', ctx)
    var cw = canvas.offsetWidth;
    var ch = canvas.offsetHeight;
    console.log('cw, ch >>', cw, ch)
    var cx = cw / 2;
    var cy = ch - 10;
    console.log('cx, cy >>', cx, cy)

    ctx.translate(cx, cy);  // cx, cy 만큼 평행이동
    // console.log('needle radius', needleRadius)
    ctx.rotate(needleRadius)
    ctx.beginPath()
    ctx.moveTo(0, -5)
    ctx.lineTo(ch / 2, 0)
    ctx.lineTo(0, 5)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)'
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
    
    ctx.translate(-cx, -cy)
}

const IotStateChart = (props) => {
    const chartRef = useRef()
  
    console.log('state >>', props.radius)

    useEffect(() => {

        const myPieChart = chartRef.current.getContext('2d')
        console.log('chartRef >>', chartRef)
        console.log('my pie chart >>', myPieChart)
        const radius = props.radius
        
        new Chart(myPieChart, {
            type: 'doughnut',
            data: {
                labels: ["Safety", "Caution", "Danger"],
                datasets: [{
                    data: [1, 1, 1],
                    backgroundColor: function () {
                        switch (radius) {
                            case -30:
                                return ['rgba(0, 255, 0, 0.2)',
                                    'rgba(255, 155, 0, 0.2)',
                                    'rgba(255, 0, 0, 1)',]

                            case -90:
                                return ['rgba(0, 255, 0, 0.2)',
                                    'rgba(255, 155, 0, 1)',
                                    'rgba(255, 0, 0, 0.2)',]

                            case -150:
                                return ['rgba(0, 255, 0, 1)',
                                    'rgba(255, 155, 0, 0.2)',
                                    'rgba(255, 0, 0, 0.2)',]
                            default:
                                return;
                        }
                    },
                    borderWidth: 1,
                    // hoverBackgroundColor, hoverBorderColor, hoverBorderWidth
                    borderAlign: 'inner',   // 테두리 정렬 : 'center' 테두리 겹침, 'inner' 테두리 안겹침

                }],
            },
            options: {
                cutoutPercentage: 85,           // 차트의 중앙을 자르는 백분율
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
                    yPadding: 0,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false,
                },

                showMarkers: false,
                events: ['mouseup', 'click'],  // mousemove, mouseout, click, touchstart, touchmove
                /*hover: {
                    onHover: setInterval(() => {
                        // ping === 1 ? setPing(2) : setPing(1)
                    }, 0),
                },*/
                animation: {
                    onComplete: function () {
                        // console.log('1', radius)
                        // console.log('2', Math.PI / 180)
                        // console.log('3', radius * Math.PI / 180)
                        
                        switch (radius) {
                            case -30:   // 위험
                                drawNeedle(-30 * Math.PI / 180)
                                return;
                            case -90:   // 주의
                                drawNeedle(-90 * Math.PI / 180)
                                return;
                            case -150:  // 안전
                                drawNeedle(-150 * Math.PI / 180)
                                return;
                        }
                    },
                    animateRotate: false,
                },
            }
        })

        },)

    return (
        <CardBasic className='pb-4' title="IOT">
            <div className="chart-pie pt-4 pb-4 mb-3">
                <canvas id="myPieChart" ref={chartRef}></canvas>
                {/*<p className='percent'> Safety </p>*/}
            </div>
        </CardBasic>
    );

}

export default IotStateChart;
