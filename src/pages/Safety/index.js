import React from 'react';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import IotStateChart from '../../components/Charts/IotState';
import IotRecord from '../../components/Cards/IotRecord';
import AnalizeChart from '../../components/AnalizeChart';

import { useSelector } from 'react-redux';

const Safety = () => {
    const data = useSelector((state) => state);
    const stateName = data.cardState.stateName;
    const iotnum = data.iotNumState.iotNum;
    const time = data.recordState.time;

    console.log('iot num', iotnum)
    let radius = 0;
    switch (stateName) {
        case 'Safety':
            radius = -150;
            break;
        case 'Warning':
            radius = -90;
            break;
        case 'Danger':
            radius = -30;
            break;
        default:
            break;
    }

    return (
        <div>
            <div id="wrapper">
                <Sidebar />

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />

                        <div className="container-fluid">
                            <PageHeading title="안전 페이지" />

                            <div className="row">
                                <div className="col-md-6">
                                    <IotStateChart radius={radius} />
                                </div>

                                <div className="col-md-6">
                                    <IotRecord iotnum={iotnum} time={time}/>
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
