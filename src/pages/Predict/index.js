import React, { Component } from 'react';
import { ResponsivieLine } from '@nivo/line';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartDonut from '../../components/Charts/Donut';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';
import ChartBar from '../../components/Charts/Bar';

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
                            <ChartLine title="이번달 전력예측"></ChartLine>

                            <CardInfo
                                title="예상요금액"
                                icon="won"
                                color="primary"
                                value="15,821(원)"
                            />

                            <CardInfo
                                title="예상전력사용량"
                                icon=""
                                color="primary"
                                value="4,539(kWh)"
                            />
                        </div>

                        <div className="container-fluid">
                            <ChartBar title="다음달 전력예측"></ChartBar>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Predict;
