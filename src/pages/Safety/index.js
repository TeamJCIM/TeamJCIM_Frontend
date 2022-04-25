import React from 'react';

import axios from 'axios';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import IotStateChart from '../../components/Charts/IotState';

import IotRecord from '../../components/Cards/IotRecord';

import AnalizeChart from '../../components/AnalizeChart';
const Safety = () => {
    axios.get();
    return (
        <div>
            <div id="wrapper">
                <Sidebar />

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />

                        <div className="container-fluid">
                            <PageHeading title="전력 조회" />

                            <div className="row">
                                <div className="col-xl">
                                    <IotStateChart />
                                </div>

                                <div className="col-xl">
                                    <IotRecord />
                                </div>
                            </div>
                            <AnalizeChart title="전력분석" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;
