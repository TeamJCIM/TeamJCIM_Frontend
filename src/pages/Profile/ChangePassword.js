import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';

export default function ChangePassword() {
    const [password, setPassword] = useState({
        curPassword: '',
        changePassword: '',
        confirmPassword: '',
    });

    const checkCurPassword = (e) => {
        const { name, value } = e.target;
        setPassword({
            ...password,
            [name]: value,
        });
    };

    //비밀번호 유효성 체크 함수
    const checkChangePassword = (e) => {
        const { name, value } = e.target;
        setPassword({
            ...password,
            [name]: value,
        });
    };

    //비밀번호 확인 체크함수
    const setConfirmPassword = (e) => {
        const { value, name } = e.target;
        setPassword({
            ...password,
            [name]: value,
        });
    };

    const request = (e) => {
        // 8 ~15자 영문, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
        console.log(password.curPassword);
        console.log(password.changePassword);
        console.log(password.confirmPassword);
        // 맞는 형식이면 true를 리턴
        if (!regExp.test(password.changePassword)) {
            alert('비밀번호 형식을 확인해주세요!');
        } else {
            if (password.changePassword === password.confirmPassword) {
                const body = {
                    OldPassword: password.curPassword,
                    NewPassword: password.changePassword,
                };
                axios
                    .post(`api/auth/change_pw/52`, body)
                    .then(function (response) {
                        alert(response['data']['message']);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                alert('변경 비밀번호가 일치하지 않습니다!');
            }
        }
    };

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
                            <div className="small mb-1">현재 비밀번호</div>
                            <input
                                className="form-control bg-light border-0 small"
                                type="password"
                                name="curPassword"
                                onChange={checkCurPassword}
                            />

                            <div className="small mb-1">변경 비밀번호</div>
                            <input
                                className="form-control bg-light border-0 small"
                                type="password"
                                name="changePassword"
                                onChange={checkChangePassword}
                            />

                            <div className="small mb-1">변경 비밀번호확인</div>
                            <input
                                className="form-control bg-light border-0 small"
                                type="password"
                                name="confirmPassword"
                                onChange={setConfirmPassword}
                            />

                            <div>
                                <Link
                                    className="btn btn-secondary"
                                    onClick={request}
                                    to="/ChangePassword"
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
