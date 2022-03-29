import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';

export default function ChangePassword() {
    const [data, setData] = useState({
        password: '',
        state: '',
        confirmState: '',
    });
    //비밀번호 유효성 체크 함수
    const checkPassword = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });

        // 8 ~15자 영무, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
        // 맞는 형식이면 true를 리턴
        if (regExp.test(e.target.value)) {
            setData({
                state: 'true',
            });
        } else {
            setData({
                state: 'false',
            });
        }
        console.log(data.password);
        console.log(data.state);
    };

    // const handleConfirmPassword = (e) => {
    //     const { value, name } = e.target;
    //     setInputs({
    //         ...inputs,
    //         [name]: value,
    //     });

    //     if (e.target.value === inputs.password) {
    //         console.log('비밀번호 일치');
    //         checkState('cPasswordState', true);
    //     } else {
    //         console.log('비밀번호 불일치');
    //         checkState('cPasswordState', false);
    //     }
    // };

    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <Topbar />
                    <div className="container-fluid">
                        <PageHeading title="Reset Password" />
                    </div>
                    <div className="container-fluid">
                        <CardBasic title="비밀번호변경">
                            <div class="small mb-1">현재 비밀번호</div>
                            <input
                                class="form-control bg-light border-0 small"
                                type="password"
                            />

                            <div class="small mb-1">변경 비밀번호</div>
                            <input
                                class="form-control bg-light border-0 small"
                                type="password"
                                name="password"
                                onChange={checkPassword}
                            />

                            <div class="small mb-1">변경 비밀번호확인</div>
                            <input
                                class="form-control bg-light border-0 small"
                                type="password"
                                name="password"
                            />

                            <div>
                                <Link
                                    className="btn btn-secondary"
                                    to="ResetProfile"
                                >
                                    확인
                                </Link>
                            </div>
                        </CardBasic>
                    </div>
                </div>
            </div>
        </div>
    );
}
