import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';

export default function ChangePassword() {
    const [data, setData] = useState({
        curPassword: '',
        getCurPassword: '',
        changePassword: '',
        confirmPassword: '',
        curState: '',
        changeState: '',
        confirmState: '',
        checkState: '',
    });

    const checkCurPassword = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });

        if (data.curPassword === data.getCurPassword) {
            setData({
                curState: 'true',
            });
        } else {
            setData({
                curState: 'false',
            });
        }
    };

    //비밀번호 유효성 체크 함수
    const checkChangePassword = (e) => {
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
                changeState: 'true',
            });
        } else {
            setData({
                changeState: 'false',
            });
        }
    };

    //비밀번호 확인 체크함수
    const checkConfirmPassword = (e) => {
        // const { value, name } = e.target;
        // setInputs({
        //     ...data,
        //     [name]: value,
        // });

        if (e.target.value === data.changePassword) {
            console.log('비밀번호 일치');
            setData({
                confirmState: 'true',
            });
        } else {
            console.log('비밀번호 불일치');
            setData({
                confirmState: 'false',
            });
        }
    };

    const checkState = (e) => {
        if (data.curState && data.changeState && data.confirmState) {
            //     axios
            //         .post(`api/auth/ChangePassword`)
            //         .then(function (response) {
            //             console.log('success');
            //         })
            //         .catch(function (error) {
            //             console.log('error');
            //         });
            alert('비밀번호 변경 완료!');
        }

        if (!data.curState) {
            alert('현재비밀번호를 확인해주세요!');
        }

        if (!data.changeState) {
            alert('변경 비밀번호를 확인해주세요!');
        }

        if (!data.confirmState) {
            alert('변경비밀번호와 변경비밀번호 확인이 일치하지 않습니다!');
        }
    };

    useEffect(() => {
        axios
            .post(`api/auth/password`)
            .then(function (response) {
                setData({
                    password: 1,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

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
                                name="curPassword"
                                onChange={checkCurPassword}
                            />

                            <div class="small mb-1">변경 비밀번호</div>
                            <input
                                class="form-control bg-light border-0 small"
                                type="password"
                                name="changePassword"
                                onChange={checkChangePassword}
                            />

                            <div class="small mb-1">변경 비밀번호확인</div>
                            <input
                                class="form-control bg-light border-0 small"
                                type="password"
                                onChage={checkConfirmPassword}
                            />

                            <div>
                                <Link
                                    className="btn btn-secondary"
                                    onClick={checkState}
                                    to="/profile"
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
