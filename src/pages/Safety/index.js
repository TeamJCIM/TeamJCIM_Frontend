import React, { Component } from 'react';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import ChartDonut from '../../components/Charts/Donut';
import IotRecord from '../../components/Cards/IotRecord';
import ChartMonth from '../../components/Charts/Month';
import AnalizeChart from '../../components/AnalizeChart';
class Safety extends Component {
    render() {
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
                                        <ChartDonut />
                                    </div>

                                    <div className="col-xl">
                                        <IotRecord />
                                    </div>

                                    <div className="col-xl">
                                        <AnalizeChart title="전력분석" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.container-fluid --> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Safety;
