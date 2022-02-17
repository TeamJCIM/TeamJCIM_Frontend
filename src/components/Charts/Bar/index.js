import React, { Component } from 'react';
import CardBasic from '../../Cards/Basic';

class ChartBar extends Component {
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
