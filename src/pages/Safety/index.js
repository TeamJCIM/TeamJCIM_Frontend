import React, { Component } from 'react';

import axios from 'axios';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import IotStateChart from '../../components/Charts/IotState';
import ChartDonut from '../../components/Charts/Donut';
import IotRecord from '../../components/Cards/IotRecord';
import ChartMonth from '../../components/Charts/Month';
import AnalizeChart from '../../components/AnalizeChart';
const Safety = () => {
    axios.get()
        return (
            <div>
                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">
                    {/* <!-- Sidebar --> */}
                    <Sidebar />
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/* <!-- Main Content --> */}
                        <div id="content">
                            {/* <!-- Topbar --> */}
                            <Topbar />
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">
                                {/* <!-- Page Heading --> */}

                                <PageHeading title="전력 조회" />

                                {/* <!-- Content Row --> */}

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
                            {/* <!-- /.container-fluid --> */}
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Safety;
