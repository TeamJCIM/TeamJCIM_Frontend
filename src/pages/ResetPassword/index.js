import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Navigation
import Topbar from '../../components/Navigation/Topbar';
import Sidebar from '../../components/Navigation/Sidebar';
import PageHeading from '../../components/PageHeading';
import CardBasic from '../../components/Cards/Basic';

class ResetPassword extends Component {
    render() {
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
                                <div class="small mb-1">현재 비밀번호</div>
                                <input
                                    class="form-control bg-light border-0 small"
                                    type="password"
                                />

                                <div class="small mb-1">변경 비밀번호</div>
                                <input
                                    class="form-control bg-light border-0 small"
                                    type="password"
                                />

                                <div class="small mb-1">변경 비밀번호확인</div>
                                <input
                                    class="form-control bg-light border-0 small"
                                    type="password"
                                />

                                <div>
                                    <Link
                                        className="btn btn-secondary"
                                        to="ResetProfile"
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
}

export default ResetPassword;
