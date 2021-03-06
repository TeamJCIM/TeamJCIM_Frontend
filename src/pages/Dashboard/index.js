import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartNow from '../../components/Charts/Now';
import PageHeading from '../../components/PageHeading';

class Dashboard extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'page-top'
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
                <PageHeading title="Dashboard" />
                <div className="row">
                  <Link className='col-xl-3 col-md-3 mb-4' to='/TodayUsage'>
                    <CardInfo title="전력 조회(요금액)"
                      icon="bolt"
                      color="info"
                      value="100kw" />
                  </Link>

                  <Link className='col-xl-3 col-md-3 mb-4' to='/MonthUsage'>
                    <CardInfo title="전력 예측"
                      icon="chart-bar"
                      color="warning"
                      value="초과 예상" />
                  </Link>

                  <Link className='col-xl-3 col-md-3 mb-4' to='/YearUsage'>
                    <CardInfo title="안전 지수"
                      icon="exclamation-circle"
                      color="danger"
                      value="위 험" />
                  </Link>

                  <Link className='col-xl-3 col-md-3 mb-4' to='/Safety'>
                    <CardInfo title="IOT"
                      icon="mobile-alt"
                      color="info"
                      value="IOT" />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-xl col-lg">
                    <ChartNow />
                  </div>

                </div>

              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2019</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a></div>
    )
  }
}

export default Dashboard;