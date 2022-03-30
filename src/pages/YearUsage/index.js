import React, { useState, useEffect } from 'react';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import ChartYear from '../../components/Charts/Year';

import axios from 'axios'

const YearUsage = () => {
    const [yearData, setYearData] = useState(Array.from({length:12}, () => 0))
    const newYearData = yearData
    console.log('page component', yearData)

    const post = 1227564000
    
    useEffect(()=> {
        console.log('page component use effect', yearData)
        
        axios.get(`/api/lookup_elec/${post}`,)
            .then((res) => {
                console.log(res.data.data[3])

                for (let i = 0; i < res.data.data[3].length; i++) {
                    const day = res.data.data[3][i].Month - 1
                    newYearData[day] = Number(res.data.data[3][i].IotData)
                    setYearData(newYearData)

                }

                console.log('page year data', yearData)
            })
            .catch((err) => {

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
                                <div className="col-xl col-lg">
                                    <ChartYear 
                                        yearData={yearData}/>
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


export default YearUsage;
