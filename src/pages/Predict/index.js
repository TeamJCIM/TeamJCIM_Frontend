import React, { useState, useEffect } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';
import NextMonth from '../../components/NextMonth';
import PredictInfo from '../../components/Cards/PredictInfo';
import axios from 'axios';

export default function Predict() {
    const [data, setData] = useState({
        fee: '',
        usage: '',
    });

    useEffect(() => {
        async function fetch() {
            const response = await axios.get(
                `api/predict/predictThisMonth_test/1227564000`
            );
            try {
                setData({
                    fee: response['data']['message'][4] + '(원)',
                    usage:
                        response['data']['message'][3]
                            .toFixed()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '(kWh)',
                });
                console.log(data.fee);
            } catch (error) {
                console.log(error + response['data']['message'][4]);
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
                    </div>
                    <div className="container-fluid">
                        <ChartLine title="이번달 전력예측"></ChartLine>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <PredictInfo
                                title="예상요금액"
                                icon="won"
                                color="primary"
                                value={data.fee}
                            />

                            <PredictInfo
                                title="예상전력사용량"
                                icon=""
                                color="primary"
                                value={data.usage}
                            />
                        </div>
                    </div>

                    <div className="container-fluid">
                        <NextMonth title="다음달 전력예측"></NextMonth>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
