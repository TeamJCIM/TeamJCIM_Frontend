import React, { useState, useEffect } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';
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
        //전기요금 공식 : (기본요금 + 전력량요금) + 부가가치세 + 전력산업기반기금
        var input = prompt('계약 전력량을 입력하세요');
        const base_fee = 6160;

        async function fetch() {
            const response = await axios.get(
                `api/predict/predictNextMonth_tmp/${iotNum}`
            );
            try {
                var str =
                    Math.ceil(
                        response['data']['message'][2][0]['PredictData']
                    ) + '(kWh)';
                str =
                    str.slice(0, str.length - 8) +
                    '.' +
                    str.slice(str.length - 8, str.length);

                var usage = str.slice(0, str.length - 9);
                var fee = input * base_fee + usage * 60.2 + usage * 5.3;
                fee = Math.ceil(fee);
                fee = fee.toLocaleString() + '(원)';

                setState({
                    usage: str,
                    fee: fee,
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
                            <div className="col-6">
                                <PredictInfo
                                    title="이번달 예상요금액"
                                    icon="coins"
                                    color="primary"
                                    value={state.fee}
                                />
                            </div>

                            <div className="col-6">
                                <PredictInfo
                                    title="이번달 예상전력사용량"
                                    icon="bolt"
                                    color="primary"
                                    value={state.usage}
                                />
                            </div>
                        </div>

                        <div className="row pt-4">
                            <div className="col">
                                <ChartLine title="이번달 전력예측"></ChartLine>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
