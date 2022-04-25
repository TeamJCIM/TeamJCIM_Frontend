import React, { useState, useEffect } from 'react';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import ChartToday from '../../components/Charts/Today';
import CardInfo from '../../components/Cards/Info';

import axios from 'axios'

const TodayUsage = () => {
    const [electricData, setElectricData] = useState(Array.from({ length: 24 }, () => 0))
    // console.log(todayUsage, setTodayUsage)

    const [iotNum, setIotNum] = useState(1227564000)
    const [date, setDate] = useState('2021-09-09')
    
    // setIotNum(1227564000)
    // setDate('2021-09-09')

    let postIot = {
        IotNum: iotNum,
        Date: date,
    }

    useEffect(()=>{
        axios.get(`/api/overview/${postIot.IotNum}/${postIot.Date}`,)
        .then((response) => {


            const newElectricData = electricData
            for (let i = 0; i < response.data.data[3].length; i++) {
                // console.log((Math.floor(Number(response.data.data[3][i].Date.substr(11, 2)) / 2)))
                // console.log('배열 수 : ', response.data.data[3].length)
                // console.log('실시간 사용량 : ', Number(response.data.data[3][44].Date.substr(11, 2)))
                newElectricData[Math.floor(Number(response.data.data[3][i].Date.substr(11, 2)))] += Math.floor(response.data.data[3][i].VoltageAvg)
                // console.log(Number(response.data.data[3][i].Date.substr(11, 2)))
                
            }
            setElectricData(newElectricData)
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
                                    <ChartToday 
                                        electricData = {electricData}/>
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
