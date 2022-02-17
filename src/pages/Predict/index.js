import React, { Component } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartDonut from '../../components/Charts/Donut';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';

class Predict extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="=d-flex flex-column">
                        <Topbar />
                        <div className="container-fluid">
                            <PageHeading title="전력예측" />
                        </div>
                        <div className="container-fluid">
                            <CardBasic title="이번달 전력예측"></CardBasic>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Predict;
