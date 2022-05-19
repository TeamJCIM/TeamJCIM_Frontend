import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

import axios from 'axios'

const ForgotPw = ({ history }) => {
    const [info, setInfo] = useState({ email: '', phone: '' })

    const [phoneFirst, setPhoneFirst] = useState()
    const [phoneSecond, setPhoneSecond] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [check, setCheck] = useState();
    const [auth, setAuth] = useState();

    useEffect(() => {
        document.getElementById('body').className = 'bg-gradient-primary'
    })

    return (
        <>
            <div className="container">
                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">전력예측 프로그램</h1>
                                            </div>
                                            {!show && <form className="user">
                                                <div className="form-group">
                                                    <div className="text-left text-primary">
                                                        email
                                                    </div>
                                                    <input type="email" className="form-control form-control-user" placeholder="Enter Email Address..."
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setInfo({ ...info, email: e.target.value })
                                                        }} />

                                                    <div className="text-left text-primary">
                                                        phone number
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            <input type='text' className='form-control form-control-user' placeholder='   010' readOnly>

                                                            </input>
                                                        </div>
                                                        <div className='col-3'>
                                                            <input type='text' className='form-control form-control-user' onChange={
                                                                (e) => {
                                                                    e.preventDefault()
                                                                    setPhoneFirst(e.target.value)
                                                                    setInfo({
                                                                        ...info, phone: `010${e.target.value}${phoneSecond}`
                                                                    })

                                                                }
                                                            }>
                                                            </input>
                                                        </div>
                                                        <div className='col-3'>
                                                            <input type='text' className='form-control form-control-user' onChange={
                                                                (e) => {
                                                                    e.preventDefault()
                                                                    setPhoneSecond(e.target.value)
                                                                    setInfo({
                                                                        ...info, phone: `010${phoneFirst}${e.target.value}`
                                                                    })
                                                                }
                                                            }>
                                                            </input>
                                                        </div>
                                                        <div className='col-3'>
                                                            <Button className="btn btn-primary btn-user btn-block"
                                                                onClick={() => {
                                                                    setInfo({
                                                                        ...info, phone: `010${phoneFirst}${phoneSecond}`
                                                                    })
                                                                    console.log('info >>', info)
                                                                    axios.post(`/api/auth/find_password`, info)
                                                                        .then((response) => {
                                                                            console.log(response.data)
                                                                            if (response.data.message === '인증번호 전송 완료') {
                                                                                setAuth(response.data.data)
                                                                            } else {
                                                                            }
                                                                        })
                                                                }}>
                                                                전송
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="text-left text-primary">
                                                        인증번호 확인
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-9'>
                                                            <input type='text' className='form-control form-control-user' placeholder='' onChange={(e)=>{
                                                                e.preventDefault()

                                                                setCheck(e.target.value)
                                                            }}>

                                                            </input>
                                                        </div>
                                                        <div className='col-3'>
                                                            <Button className="btn btn-primary btn-user btn-block"
                                                                onClick={() => {
                                                                    console.log('auth check >>', auth, check)
                                                                    
                                                                    if (auth === check) {
                                                                        axios.post(`/api/auth/find_password/phone_auth`, info.email)
                                                                            .then((response) => {
                                                                                console.log('find password auth phone')
                                                                                
                                                                            })
                                                                            .catch((error) => {
                                                                                console.log('error >>', error)
                                                                            })
                                                                        
                                                                        handleShow()
                                                                    }
                                                                }}>
                                                                확인
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </form>}
                                            {show &&
                                                <form className="user">
                                                    <div className="form-group">
                                                        <div className="text-left text-primary">
                                                            email
                                                        </div>
                                                        <input type="text" className="form-control form-control-user" placeholder={info.email} readOnly/>

                                                            
                                                    </div>
                                                    <div className='alert alert-warning mt-4 mb-4' role="alert" >
                                                        이메일로 임시 비밀번호를 전송했습니다.
                                                    </div>
                                                </form>}
                                            <hr />
                                            <div className="text-center">
                                                <Link className="small" to="/">Login !</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </>
    )

}

export default withRouter(ForgotPw);