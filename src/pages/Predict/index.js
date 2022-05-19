import React, { useState, useEffect } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';
import NextMonth from '../../components/NextMonth';
import PredictInfo from '../../components/Cards/PredictInfo';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Predict() {
    const data = useSelector((state) => state);
    const iotNum = data.iotNumState.iotNum;

    const [state, setState] = useState({
        fee: '',
        usage: '',
    });

    useEffect(() => {
        // var input = prompt('계약 전력량을 입력하세요');

        async function fetch() {
            const response = await axios.get(
                // `api/predict/predictNextMonth_tmp/${iotNum}`
                `api/predict/predictNextMonth_tmp/1232713263`
            );
            try {
                setState({
                    usage:
                        Math.ceil(
                            response['data']['message'][2][0]['PredictData']
                        ) + '(kWh)',
                    fee: '3000',
                });
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, []);

    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="=d-flex flex-column">
                    <Topbar />
                    <div className="container-fluid">
                        <PageHeading title="전력예측" />
                        <div className="row">
                            <div className="col-9">
                                <ChartLine title="이번달 전력예측"></ChartLine>
                            </div>
                            <div className="col-3">
                                <div className="px-2">
                                    <PredictInfo
                                        title="예상요금액"
                                        icon="coins"
                                        color="primary"
                                        value={state.fee}
                                    />
                                </div>
                                <div className="px-2">
                                    <PredictInfo
                                        title="예상전력사용량"
                                        icon="bolt"
                                        color="primary"
                                        value={state.usage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
