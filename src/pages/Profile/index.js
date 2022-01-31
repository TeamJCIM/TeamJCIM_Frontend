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

    componentDidMount() {
        this.setState({
            title: '프로필설정',
        });
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
                            <CardBasic />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
