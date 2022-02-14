import React, { Component } from 'react';
import CardBasic from '../../Cards/Basic';
import Chart from 'chart.js';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
        dec = typeof dec_point === 'undefined' ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

class ChartBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
        };
    }

    chartRef = React.createRef();
    componentDidMount() {
        const nextMonthChartLine = this.chartRef.current.getContext('2d');
        console.log(nextMonthChartLine, 'next!');
    }

    render() {
        return (
            <CardBasic title={this.props.title}>
                <div className="chart-bar">
                    <canvas id="myBarChart"></canvas>
                </div>
            </CardBasic>
        );
    }
}

export default ChartBar;
