import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';

import TextBox from './TextBox';

export default function Profile() {
    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        iotNum: '',
    });

    const [modifiable, setModifiable] = useState({
        state: 'false',
    });

    useEffect(() => {
        axios
            .get(`api/auth/profile/3`)
            .then(function (response) {
                setProfile({
                    name: response.data['data'][0]['Name'],
                    phone: response.data['data'][0]['Phone'],
                    email: response.data['data'][0]['Email'],
                    location: response.data['data'][0]['Location'],
                    iotNum: response.data['data'][0]['Iotnum'],
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
                            <CardBasic title="프로필설정">
                                <div class="small mb-1">Name</div>
                                <TextBox
                                    img="fas fa-user"
                                    text={profile.name}
                                    state={modifiable.state}
                                />

                                <div class="small mb-1">Phone</div>
                                <TextBox
                                    img="fas fa-phone"
                                    text={profile.phone}
                                    state={modifiable.state}
                                />

                                <div class="small mb-1">이메일</div>
                                <TextBox
                                    img="fas fa-envelope"
                                    text={profile.email}
                                    state={modifiable.state}
                                />

                                <div class="small mb-1">Location</div>
                                <TextBox
                                    img="fas fa-location-arrow"
                                    text={profile.location}
                                    state={modifiable.state}
                                />

                                <div class="small mb-1">IoT Number</div>
                                <TextBox
                                    img="fas fa-tablet"
                                    text={profile.iotNum}
                                    state={modifiable.state}
                                />

                                <span>
                                    <Link
                                        onClick={() =>
                                            setModifiable({ state: '' })
                                        }
                                        className="btn btn-secondary"
                                        to="/changeprofile"
                                    >
                                        프로필수정
                                    </Link>
                                </span>
                                <span class="col-auto">
                                    <Link
                                        className="btn btn-secondary"
                                        to="/changepassword"
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
