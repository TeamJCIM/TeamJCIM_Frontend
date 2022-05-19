import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

import axios from 'axios'
import { useDispatch } from 'react-redux';
import { postIotNum, getCardDataAsync, getUsageDataAsync, getRecordDataAsync } from '../../redux/actions';
import { IotNumReducer } from '../../redux/reducers/IotNumReducer';
import { CardReducer } from '../../redux/reducers/CardReducer';
import { UsageReducer } from '../../redux/reducers/UsageReducer';
import { RecordReducer } from '../../redux/reducers/RecordReducer';


const ForgotId = ({ history }) => {
    const [findIdInfo, setFindIdInfo] = useState({ name: '', phone: '' })

    const [phoneFirst, setPhoneFirst] = useState()
    const [phoneSecond, setPhoneSecond] = useState()

    const [show, setShow] = useState(false);

    const [email, setEmail] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [confirm, setConfirm] = useState(false)

    const confirmFalse = () => setConfirm(false);
    const confirmTrue = () => setConfirm(true);


    useEffect(() => {
        document.getElementById('body').className = 'bg-gradient-primary'
    })

    // const dispatch = useDispatch()

    return (
        <>
            <div className="container">
                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center my-5">

                    <div className="col-xl-10 col-lg-12 col-md-9 justify-content-center align-self-center my-5">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">아이디 찾기</h1>
                                            </div>
                                            
                                            <form className="user">
                                                <div className="form-group"> {/* name, phone number box */}
                                                    
                                                    {/* name box start */}
                                                    <><div className="text-left text-primary">
                                                        name
                                                    </div>
                                                    <input type="text" className="form-control form-control-user" id="inputName" aria-describedby="nameHelp" placeholder="Enter Name..."
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setFindIdInfo({ ...findIdInfo, name:e.target.value })
                                                    }}/></> {/* name box finish */}

                                                    {/* phone number box start */}
                                                    <> <div className="text-left text-primary">
                                                        phone number
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-4'>
                                                            <input type='text' className='form-control form-control-user' placeholder='      010' readOnly>
                                                            </input>
                                                        </div>
                                                        <div className='col-4'>
                                                            <input type='text' className='form-control form-control-user' onChange={
                                                                (e) => {
                                                                    e.preventDefault()
                                                                    setPhoneFirst(e.target.value)
                                                                    setFindIdInfo({
                                                                        ...findIdInfo, phone: `010${e.target.value}${phoneSecond}`
                                                                    })
                                                                }
                                                            }>
                                                            </input>
                                                        </div>
                                                        <div className='col-4'>
                                                            <input type='text' className='form-control form-control-user' onChange={
                                                                (e) => {
                                                                    e.preventDefault()
                                                                    setPhoneSecond(e.target.value)
                                                                    setFindIdInfo({
                                                                        ...findIdInfo, phone: `010${phoneFirst}${e.target.value}`
                                                                    })
                                                                }
                                                            }>
                                                            </input>
                                                        </div>
                                                    </div> </> {/* phone number box finish */}
                                                </div>
                                                
                                                {/* 아이디 찾기 button start */}
                                                <Button className="btn btn-primary btn-user btn-block mt-4"
                                                    onClick={(e) => {
                                                        e.preventDefault()

                                                        setFindIdInfo({
                                                            ...findIdInfo, phone: `010${phoneFirst}${phoneSecond}`
                                                        })

                                                        console.log('find id info', findIdInfo)
                                                        axios.post(`/api/auth/findId`, findIdInfo)
                                                            .then((response) => {
                                                                console.log('find id info in axios', response.data)
                                                                handleShow()
                                                                if (response.data.message === '이메일을 찾았습니다') {
                                                                    console.log('success')
                                                                    setEmail(response.data.email.email)
                                                                    confirmTrue()
                                                                } else {
                                                                    confirmFalse()
                                                                }
                                                            })
                                                    }}>
                                                    아이디 찾기
                                                </Button> {/* 아이디 찾기 button finish */}
                                                
                                                {show && confirm &&
                                                <><hr/>            
                                                <div className='alert alert-info mt-4 mb-4' role="alert" >
                                                    성공, {email}
                                                </div></>}
                                                {show && !confirm &&
                                                <><hr/>
                                                <div className='alert alert-danger mt-4 mb-4' role="alert" >
                                                    실패, 이름과 전화번호를 다시 확인하세요
                                                </div></>}
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <Link className="small" to="/">Login</Link>
                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to="/forgotpw">Forgot Password?</Link>
                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to="/signup">Create an Account!</Link>
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

export default withRouter(ForgotId);