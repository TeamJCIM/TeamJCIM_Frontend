import React, { useState, useEffect } from 'react';
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
        getCurPassword: 'abc12345',
        changePassword: '',
        confirmPassword: '',
    });

    const [state, setState] = useState({
        curState: '',
        changeState: '',
        confirmState: '',
        checkState: '',
    });

    const checkCurPassword = (e) => {
        const { name, value } = e.target;
        setPassword({
            ...password,
            [name]: value,
        });

        if (password.curPassword === password.getCurPassword) {
            setState({
                curState: 'true',
            });
        } else {
            setState({
                curState: 'false',
            });
        }
    };

    //비밀번호 유효성 체크 함수
    const checkChangePassword = (e) => {
        const { name, value } = e.target;
        setPassword({
            ...password,
            [name]: value,
        });

        // 8 ~15자 영무, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
        // 맞는 형식이면 true를 리턴
        if (regExp.test(e.target.value)) {
            setState({
                changeState: 'true',
            });
        } else {
            setState({
                changeState: 'false',
            });
        }
    };

    //비밀번호 확인 체크함수
    const checkConfirmPassword = (e) => {
        const { value, name } = e.target;
        setPassword({
            ...password,
            [name]: value,
        });

        if (e.target.value === password.changePassword) {
            console.log('비밀번호 일치');
            setState({
                confirmState: 'true',
            });
        } else {
            console.log('비밀번호 불일치');
            setState({
                confirmState: 'false',
            });
        }
    };

    const checkState = (e) => {
        if (state.curState && state.changeState && state.confirmState) {
            axios
                .post(`api/auth/change_pw/3`, password.changePassword)
                .then(function (response) {
                    console.log('success');
                })
                .catch(function (error) {
                    console.log('error');
                });
            alert('비밀번호 변경 완료!');
        } else if (!state.curState) {
            alert('현재비밀번호를 확인해주세요!');
        } else if (!state.changeState) {
            alert('변경 비밀번호를 확인해주세요!');
        } else if (!state.confirmState) {
            alert('변경비밀번호와 변경비밀번호 확인이 일치하지 않습니다!');
        }
    };

    useEffect(() => {
        axios
            .get(`api/auth/change_pw/get_pw/3`)
            .then(function (response) {
                setPassword({
                    getCurPassword: response.data['data'][0]['Password'],
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
                                onChange={checkConfirmPassword}
                            />

                            <div>
                                <Link
                                    className="btn btn-secondary"
                                    onClick={checkState}
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
