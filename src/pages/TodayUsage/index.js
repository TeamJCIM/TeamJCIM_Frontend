import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import ChartToday from '../../components/Charts/Today';
import CardInfo from '../../components/Cards/Info';

const TodayUsage = () => {
    
    useEffect(()=>{
        
    })
        
    const data = useSelector(state => state)

    const electricData = data.cardState.electricData
    console.log('사용량 ', electricData)
    const total = electricData.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0) / 1000
    console.log(total)
    
    const fee = Math.floor(10 * 6160 / 3 + total * 60.2 + total * 5.3)


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
                            
                            
                            <div className='row'>
                                <div className='col-6'>
                                    <CardInfo title="요금액"
                                        icon="coins"
                                        color="primary"
                                        value={`${fee}` + " (원)"} />
                                </div>

                                <div className='col-6'>
                                    <CardInfo title="전력량"
                                        icon="bolt"
                                        color="primary"
                                        value={`${total}` + " (kWh)"} />
                                </div>
                            </div>
                            
                            <div className="row pt-4">
                                <div className="col">
                                    <ChartToday 
                                        electricData={electricData} />
                                        
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
