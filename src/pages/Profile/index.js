import React, { Component } from 'react';

import { Link } from 'react-router-dom';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    componentWillMount() {
        document.getElementById('body').className = 'page-top';
    }

    render() {
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
                                        <span class="navbar-brand">홍명헌</span>
                                    </nav>

                                    <div class="small mb-1">Phone</div>
                                    <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                        <span class="navbar-brand">
                                            010-0000-0000
                                        </span>
                                    </nav>

                                    <div class="small mb-1">이메일</div>
                                    <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                        <span class="navbar-brand">
                                            yes7076@naver.com
                                        </span>
                                    </nav>

                                    <div class="small mb-1">Location</div>
                                    <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                        <span class="navbar-brand">
                                            동대문구 망우로100-111
                                        </span>
                                    </nav>

                                    <div class="small mb-1">IoT Number</div>
                                    <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                                        <span class="navbar-brand">
                                            90087247182
                                        </span>
                                    </nav>

                                    <div>
                                        <Link
                                            className="btn btn-secondary"
                                            to="ResetProfile"
                                        >
                                            프로필변경
                                        </Link>

                                        <Link
                                            className="btn btn-secondary"
                                            to="/ResetPassword"
                                        >
                                            비밀번호변경
                                        </Link>
                                    </div>
                                </CardBasic>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
