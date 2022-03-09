import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';

export default function Profile() {
    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        iotNum: '',
        userid: '',
    });

    function getProfile() {
        const userid = {
            userid: '10',
        };
        axios.post('auth/profile', userid).then(function (response) {
            if (response.data['success'] === true) {
                setProfile({
                    name: response.data['data']['Name'],
                    phone: response.data['data']['Phone'],
                    email: response.data['data']['Email'],
                    iotNum: response.data['data']['IotNum'],
                });
            }
        });
    }

    useEffect(() => {
        getProfile();
    });

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
                            <CardBasic title="프로필설정">
                                <div class="small mb-1">Name</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <span class="navbar-brand">
                                        {profile.name}
                                    </span>
                                </nav>

                                <div class="small mb-1">Phone</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <span class="navbar-brand">
                                        {profile.phone}
                                    </span>
                                </nav>

                                <div class="small mb-1">이메일</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <span class="navbar-brand">
                                        {profile.email}
                                    </span>
                                </nav>

                                <div class="small mb-1">Location</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-location-arrow"></i>
                                    </div>
                                    <span class="navbar-brand">
                                        {profile.location}
                                    </span>
                                </nav>

                                <div class="small mb-1">IoT Number</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-tablet"></i>
                                    </div>
                                    <span class="navbar-brand">
                                        {profile.iotNum}
                                    </span>
                                </nav>

                                <span>
                                    <Link
                                        className="btn btn-secondary"
                                        to="ResetProfile"
                                    >
                                        프로필변경
                                    </Link>
                                </span>
                                <span class="col-auto">
                                    <Link
                                        className="btn btn-secondary"
                                        to="/ResetPassword"
                                    >
                                        비밀번호변경
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
