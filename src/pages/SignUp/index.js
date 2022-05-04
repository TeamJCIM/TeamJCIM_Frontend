import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SignUp() {
    //회원가입 필요한 변수객체
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        cPassword: '',
        name: '',
        birth: '',
        address: '',
        addressDetail: '',
        phone: '',
        gAuthCode: '',
        iAuthCode: '',
        iotNum: '',
    });

    const [states, setStates] = useState({
        emailState: false,
        passwordState: false,
        cPasswordState: false,
        nameState: false,
        birthState: false,
        addressState: false,
        phoneState: false,
        iotNumState: false,
        signupState: false,
    });

    //입력되는 변수들을 최신화 해주는 함수.
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });

        if (name === 'name') {
            checkState('nameState', true);
        } else if (name === 'addressDetail' && inputs.address !== '') {
            checkState('addressState', true);
        } else if (name === 'birth') {
            checkState('birthState', true);
        }
    };

    const checkState = (name, value) => {
        setStates({
            ...states,
            [name]: value,
        });
    };

    //이메일 중복확인 함수
    const checkDuplicateEmail = () => {
        var regExp =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if (regExp.test(inputs.email)) {
            const body = {
                email: inputs.email,
            };
            axios
                .post(`api/auth/check_duplicate_email`, body)
                .then(function (response) {
                    if (response.data['success'] === true) {
                        alert('중복된 이메일이 없습니다!');
                        checkState('emailState', true);
                    } else {
                        // 오류 창 출력
                        alert('이메일이 중복 됩니다!');
                        checkState('emailState', false);
                    }
                });
        } else {
            alert('이메일 형식을 다시 확인해 주세요!');
            checkState('emailState', false);
        }
    };

    //비밀번호 유효성 체크 함수
    const checkPassword = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });

        // 8 ~15자 영무, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
        // 맞는 형식이면 true를 리턴
        if (regExp.test(e.target.value)) {
            console.log('true');
            checkState('passwordState', true);
        } else {
            console.log('false');
            checkState('passwordState', false);
        }
    };

    // 비밀번호 확인 비교 함수.
    const handleConfirmPassword = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });

        if (e.target.value === inputs.password) {
            console.log('비밀번호 일치');
            checkState('cPasswordState', true);
        } else {
            console.log('비밀번호 불일치');
            checkState('cPasswordState', false);
        }
    };

    const selfAuth = () => {
        if (inputs.phone.length !== 11) {
            alert('전화번호 형식을 체크해 주세요!');
        } else {
            axios
                .post('api/auth/signup_phone_auth', inputs.phone)
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    if (response.data['success'] === true) {
                        alert('인증번호를 전송했습니다!');

                        setInputs({
                            ...inputs,
                            gAuthCode: response.data['data'],
                        });
                    } else {
                        // 오류 창 출력
                        alert('핸드폰 번호를 확인해주세요!');
                    }
                });
        }
    };

    //입력받은 인증번호 비교 함수
    const checkAuthCode = () => {
        if (inputs.iAuthCode === inputs.gAuthCode) {
            alert('인증 완료');
            checkState('phoneState', true);
        } else {
            alert('인증번호가 다릅니다!');
            checkState('phoneState', false);
        }
    };

    //IoT 중복확인 함수
    const checkIot = () => {
        const body = {
            Iotnum: inputs.iotNum,
        };
        axios.post('auth' + '/checkIot', body).then(function (response) {
            console.log(response);
            console.log(response.data);
            if (response.data['success'] === true) {
                alert('IoT 기기가 인증 되었습니다! ');
                checkState('iotNumState', true);
            } else {
                // 오류 창 출력
                alert('이미 사용중인 IoT기기 입니다. 번호를 확인해주세요!');
                checkState('iotNumState', false);
            }
        });
    };

    const reqSignUp = () => {
        if (
            states.emailState === true &&
            states.passwordState === true &&
            states.cPasswordState === true &&
            states.birthState === true &&
            states.nameState === true &&
            states.iotNumState === true &&
            states.phoneState === true &&
            states.addressState === true
        ) {
            console.log('asldfjalskdjf;laskdjf;alksjdf;alk');

            console.log(inputs.email);
            console.log(inputs.password);
            console.log(inputs.cPassword);
            console.log(inputs.name);
            console.log(inputs.phone);
            console.log(inputs.birth);
            console.log(inputs.address);
            console.log(inputs.addressDetail);
            console.log(inputs.iotNum);
            console.log('==============');
            console.log('email:' + states.emailState);
            console.log('password:' + states.passwordState);
            console.log('cpass' + states.cPasswordState);
            console.log('name:' + states.nameState);
            console.log('phone:' + states.phoneState);
            console.log('birth:' + states.birthState);
            console.log('add:' + states.addressState);
            console.log('iot:' + states.iotNumState);

            const body = {
                email: inputs.email,
                password: inputs.password,
                phone: inputs.phone,
                name: inputs.name,
                birth: inputs.birth,
                address: inputs.address,
                Iotnum: inputs.iotNum,
            };

            axios.post('auth' + '/signup', body).then(function (response) {
                console.log(response);
                console.log(response.data);
                if (response.data['success'] === true) {
                    alert('회원가입 성공!');
                } else {
                    // 오류 창 출력
                    alert('입력을 다시 확인해 주세요!');
                }
            });
        } else {
            alert('입력칸을 다 채워 주세요!');

            console.log(inputs.email);
            console.log(inputs.password);
            console.log(inputs.cPassword);
            console.log(inputs.name);
            console.log(inputs.phone);
            console.log(inputs.birth);
            console.log(inputs.address);
            console.log(inputs.addressDetail);
            console.log(inputs.iotNum);
            console.log('==============');
            console.log('email:' + states.emailState);
            console.log('password:' + states.passwordState);
            console.log('cpass' + states.cPasswordState);
            console.log('name:' + states.nameState);
            console.log('phone:' + states.phoneState);
            console.log('birth:' + states.birthState);
            console.log('add:' + states.addressState);
            console.log('iot:' + states.iotNumState);
        }
    };

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);

    const loadLayout = (e) => {
        window.daum.postcode.load(() => {
            const postcode = new window.daum.Postcode({
                oncomplete: function (data) {
                    setInputs({
                        ...inputs,
                        address: data.address,
                    });
                    console.log(inputs.address);
                },
            });
            postcode.open();
        });
    };

    useEffect(() => {
        document.getElementById('body').className = 'bg-gradient-primary';
    }, []);

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">
                                        회원가입
                                    </h1>
                                </div>
                                <form className="user">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-user"
                                            id="exampleFirstName"
                                            placeholder="이름"
                                            name="name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="email"
                                                className="form-control form-control-user"
                                                id="exampleInputEmail"
                                                placeholder="이메일"
                                                name="email"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <div
                                                onClick={checkDuplicateEmail}
                                                className="btn btn-primary btn-user btn-block"
                                            >
                                                이메일 중복확인
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                id="exampleInputPassword"
                                                placeholder="비밀번호(8-15자)"
                                                name="password"
                                                onChange={checkPassword}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                id="exampleRepeatPassword"
                                                placeholder="비밀번호 확인"
                                                name="cPassword"
                                                onChange={handleConfirmPassword}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                name="phone"
                                                placeholder="전화번호('-'자 없이)"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <div
                                                onClick={selfAuth}
                                                className="btn btn-primary btn-user btn-block"
                                            >
                                                본인인증
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                placeholder="인증번호"
                                                name="iAuthCode"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <div
                                                onClick={checkAuthCode}
                                                className="btn btn-primary btn-user btn-block"
                                            >
                                                인증확인
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="date"
                                            className="form-control form-control-user"
                                            name="birth"
                                            placeholder="생년월일"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-user"
                                            placeholder="주소"
                                            name="address"
                                            onClick={loadLayout}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-user"
                                            placeholder="상세주소"
                                            name="addressDetail"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                name="iotNum"
                                                placeholder="IoT 넘버"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <div
                                                onClick={checkIot}
                                                className="btn btn-primary btn-user btn-block"
                                            >
                                                IoT중복확인
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        href="login.html"
                                        className="btn btn-primary btn-user btn-block"
                                        onClick={reqSignUp}
                                    >
                                        Register Account
                                    </div>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a
                                        className="small"
                                        href="forgot-password.html"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="text-center">
                                    <Link className="small" to="/">
                                        Already have an account? Login!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
