import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import ChartMonth from '../../components/Charts/Month'

const MonthUsage = () => {

    useEffect(() => {

    })

    const data = useSelector(state=>state)

    const thisMonthData = data.usageState.thisMonthData
    const lastMonthData = data.usageState.lastMonthData

    return (
        <div>
            {/* <!-- Page Wrapper --> */}
            <div id="wrapper" >

                {/* <!-- Sidebar --> */}
                < Sidebar />
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
                                <div className="col-xl col-lg">
                                    <ChartMonth 
                                        thisMonthData = {thisMonthData}
                                        lastMonthData = {lastMonthData}/>
                                </div>
                            </div>

                        </div>
                        {/* <!-- /.container-fluid --> */}
                    </div>
                </div>
            </div>
        </div>

    )
    
}


export default MonthUsage;
