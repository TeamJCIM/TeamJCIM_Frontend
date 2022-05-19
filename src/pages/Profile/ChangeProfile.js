import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';
import { useSelector } from 'react-redux';

export default function ResetProfile() {
    const data = useSelector((state) => state);
    const userId = data.iotNumState.userId;

    const [profile, setProfile] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Location: '',
        Iotnum: '',
        UserId: '',
    });

    function handleChange(event) {
        const { value, name } = event.target;
        setProfile({
            ...profile,
            [name]: value,
        });
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
            .get(`api/auth/profile/${userId}`)
            .then(function (response) {
                setProfile({
                    Name: response.data['data'][0]['Name'],
                    Phone: response.data['data'][0]['Phone'],
                    Email: response.data['data'][0]['Email'],
                    Location: response.data['data'][0]['Location'],
                    Iotnum: response.data['data'][0]['IotNum'],
                    UserId: userId,
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
                                        name="Name"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.Name}
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
                                        name="Phone"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.Phone}
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
                                        name="Email"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.Email}
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
                                        name="Location"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.Location}
                                    />
                                </nav>

                                <div class="small mb-1">IoT Number</div>
                                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                    <div class="col-auto">
                                        <i class="fas fa-tablet"></i>
                                    </div>
                                    <input
                                        type="text"
                                        name="Iotnum"
                                        class="form-control bg-light border-0"
                                        placeholder={profile.Iotnum}
                                    />
                                </nav>

                                <span>
                                    <Link
                                        onClick={requestChange}
                                        className="btn btn-secondary"
                                        to="/profile"
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
