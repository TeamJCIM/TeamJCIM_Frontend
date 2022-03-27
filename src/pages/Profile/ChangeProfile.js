import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';
import TextBox from './TextBox';

export default function ResetProfile() {
    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        IotNum: '',
        birth: '980926',
        userid: '3',
    });

    const [modifiable, setModifiable] = useState({
        state: '',
    });

    function handleChange(event) {
        const { value, name } = event.target;
        setProfile({
            ...profile,
            [name]: value,
        });
        console.log(value, name);
        console.log(profile.name);
    }

    function requestChange() {
        axios
            .post(`api/auth/ChangeProfile`, profile)
            .then(function (response) {
                console.log('success');
            })
            .catch(function (error) {
                console.log('error');
            });
    }

    useEffect(() => {
        axios
            .get(`api/auth/profile/3`)
            .then(function (response) {
                setProfile({
                    name: response.data['data'][0]['Name'],
                    phone: response.data['data'][0]['Phone'],
                    email: response.data['data'][0]['Email'],
                    address: response.data['data'][0]['Location'],
                    Iotnum: response.data['data'][0]['IotNum'],
                });
            })
            .catch(function (error) {
                console.log('error');
            });
    }, []);

    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            <PageHeading title="Profile" />
                        </div>
                        <div className="container-fluid">
                            <CardBasic title="프로필수정">
                                <div class="small mb-1">Name</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="name"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.name}
                                        disabled={modifiable.state}
                                    />
                                </nav>

                                <div class="small mb-1">Phone</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="phone"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.phone}
                                        disabled={modifiable.state}
                                    />
                                </nav>

                                <div class="small mb-1">이메일</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="email"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.email}
                                        disabled={modifiable.state}
                                    />
                                </nav>

                                <div class="small mb-1">Location</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-location-arrow"></i>
                                    </div>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="address"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.address}
                                        disabled={modifiable.state}
                                    />
                                </nav>

                                <div class="small mb-1">IoT Number</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-tablet"></i>
                                    </div>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="Iotnum"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.Iotnum}
                                        disabled={modifiable.state}
                                    />
                                </nav>

                                <span>
                                    <Link
                                        onClick={
                                            (() =>
                                                setModifiable({
                                                    state: 'false',
                                                }),
                                            requestChange)
                                        }
                                        className="btn btn-secondary"
                                        to="/ResetProfile"
                                    >
                                        수정완료
                                    </Link>
                                </span>

                                <span class="col-auto">
                                    <Link
                                        className="btn btn-secondary"
                                        to="/Profile"
                                    >
                                        취소
                                    </Link>
                                </span>
                            </CardBasic>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
