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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        document.getElementById('body').className = 'bg-gradient-primary'
    })

    // const dispatch = useDispatch()

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
                                                <h1 className="h4 text-gray-900 mb-4">아이디 찾기</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <div className="text-left text-primary">
                                                        name
                                                    </div>
                                                    <input type="text" className="form-control form-control-user" id="inputName" aria-describedby="nameHelp" placeholder="Enter Name..."
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setFindIdInfo({ ...findIdInfo, name: e.target.value })
                                                            console.log(findIdInfo)
                                                        }} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="text-left text-primary">
                                                        phone number
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-4'>
                                                            <input type='text' className='form-control form-control-user'>

                                                            </input>
                                                        </div>
                                                        <div className='col-4'>
                                                            <input type='text' className='form-control form-control-user'>

                                                            </input>
                                                        </div>
                                                        <div className='col-4'>
                                                            <input type='text' className='form-control form-control-user'>

                                                            </input>
                                                        </div>
                                                    </div>
                                                    {/*<input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            // setSigninInfo({ ...findIdInfo, phone: e.target.value })
                                                        }} />*/}
                                                </div>
                                                <Button className="btn btn-primary btn-user btn-block"
                                                    onClick={() => {
                                                        axios.post(`/api/auth/signin`, )
                                                            .then((response) => {
                                                                if (response.data.message === '로그인 성공') {

                                                                } else {
                                                                    handleShow()
                                                                }
                                                            })
                                                    }}>
                                                    아이디 찾기
                                                </Button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <Link className="small" to="/forgotid">Forgot ID?</Link>
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>로그인 실패</Modal.Title>
                </Modal.Header>
                <Modal.Body>아이디, 비밀번호를 확인해주세요 ! ! !</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default withRouter(ForgotId);