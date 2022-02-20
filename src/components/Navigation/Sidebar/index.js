import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickMenuOpen } from '../../../redux/actions';

class Sidebar extends Component {
    // componentDidMount() {
    //   document.getElementById('body').className = 'page-top';
    // }
    // state = {
    //   sidebarToggled: false,
    // }

    // handleSideBarToggle() {
    //   if (this.sidebarToogled === true) {
    //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
    //     document.getElementById('body').className = 'page-top sidebar-toggled';
    //   } else {
    //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
    //     document.getElementById('body').className = 'page-top';
    //   }

    // }

    render() {
        const { clickMenuOpen, toggled } = this.props;
        return (
            <ul
                className={
                    toggled
                        ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
                        : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
                }
                id="accordionSidebar"
            >
                {/* <!-- Sidebar - Brand --> */}
                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="index.html"
                >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        전력예측 프로그램
                    </div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>OverView</span>
                    </Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-controls="collapseTwo"
                    >
                        <i className="fas fa-fw fa-cog"></i>
                        <span>전력조회</span>
                    </a>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white  collapse-inner rounded">
                            <Link className="collapse-item" to="/todayusage">
                                당일 전력 조회
                            </Link>


                            <Link className="collapse-item" to="/monthusage">
                                당월/전월 전력 조회
                            </Link>

                            <Link className="collapse-item" to="/yearusage">
                                연간 전력 조회
                            </Link>
                            {/*
                            <div className="collapse-item" href="month.html">
                                당월/전월 전력 조회
                            </div>
                            <div className="collapse-item" href="year.html">
                                연간 전력 조회
                            </div>
                            */}
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Charts --> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/predict">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>전력예측</span>
                    </Link>
                </li>

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                        <i className="fas fa-fw fa-table"></i>
                        <span>안전기능</span>
                    </a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button
                        onClick={() => {
                            clickMenuOpen();
                        }}
                        className="rounded-circle border-0"
                        id="sidebarToggle"
                    ></button>
                </div>
            </ul>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = (store) => ({
    toggled: store.menuState.menuOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
