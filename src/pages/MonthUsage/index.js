import React, { useState, useEffect } from 'react';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import ChartMonth from '../../components/Charts/Month'

import axios from 'axios'

const MonthUsage = () => {
    
    const [thisMonthData, setThisMonthData] = useState(Array.from({length: 31}, () => 0))
    const [lastMonthData, setLastMonthData] = useState(Array.from({ length: 31 }, () => 0))
    console.log('this month : ', thisMonthData)
    const post = 1227564000
    
    axios.get(`/api/lookup_elec/${post}`,)
        .then((res) => {
            // res.data.data[1] : 이번 달 사용량
            // res.data.data[2] : 저번 달 사용량
            console.log(res.data.data)
            const newThisMonth = thisMonthData
            const newLastMonth = lastMonthData

            for (let i = 0; i < res.data.data[1].length; i++) {
                const day = Number(res.data.data[1][i].Date.substr(8, 2))
                console.log('day : ', day)

                if (res.data.data[1][i]) {
                    newThisMonth[day] = res.data.data[1][i].IotData
                }
            }

            for (let i = 0; i < res.data.data[2].length; i++) {
                const day = Number(res.data.data[2][i].Date.substr(8, 2))
                console.log('day', day)

                if (res.data.data[2][i]) {
                    newLastMonth[day] = res.data.data[2][i].IotData
                }
            }

            setThisMonthData(newThisMonth)
            setLastMonthData(newLastMonth)
            console.log('this month data ', thisMonthData)
            console.log('last month data ', lastMonthData)

            //
        })
        .catch((err) => {
            console.log(err)
        })

    useEffect(() => {
        
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
