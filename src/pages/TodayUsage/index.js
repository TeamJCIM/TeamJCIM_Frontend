import React, { useState, useEffect } from 'react';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import ChartToday from '../../components/Charts/Today';
import CardInfo from '../../components/Cards/Info';

import axios from 'axios'

const TodayUsage = () => {
    const [todayUsage, setTodayUsage] = useState([])
    // console.log(todayUsage, setTodayUsage)

    const post = 1227564000

    useEffect(()=>{
        axios.get(`/api/lookup_elec/${post}`,)
        .then((res) => {
            console.log(res.data.data)

            //
        })
        .catch((err) => {
            console.log(err)
        })
    })
        
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
                                <div className="col-9">
                                    <ChartToday />
                                </div>
                                <div className='col-3'>
                                    <div className='px-2'>
                                        <CardInfo title="요금액"
                                            icon="coins"
                                            color="primary"
                                            value="W 10,000" />
                                    </div>
                                    
                                    <div className='px-2'>
                                        <CardInfo title="전력량"
                                            icon="bolt"
                                            color="primary"
                                            value="100 Kw" />
                                    </div>
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


export default TodayUsage;
