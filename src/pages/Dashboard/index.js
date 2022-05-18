import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartNow from '../../components/Charts/Now';
import PageHeading from '../../components/PageHeading';

// axios
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const data = useSelector(state => state)

  const iotData = data.cardState.iotData
  const predictData = data.cardState.predictData
  const iotNum = data.iotNumState.iotNum
  const iotStatus = data.cardState.iotStatus  
  const stateName = data.cardState.stateName
  const electricData = data.cardState.electricData
  
  // 렌더링 될 때마다 실행
  useEffect(() => {
    document.getElementById('body').className = 'page-top';
  })

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
                  <CardInfo title="전력 조회"
                    icon="bolt"
                    color="info"
                    value={Math.floor(iotData)} />
                </Link>

                <Link className='col-xl-3 col-md-3 mb-4' to='/predict'>
                  <CardInfo title="전력 예측"
                    icon="chart-bar"
                    color="warning"
                    value={Math.floor(predictData)} />
                </Link>

                <Link className='col-xl-3 col-md-3 mb-4' to='/Safety'>
                  <CardInfo title="IOT"
                    icon="mobile-alt"
                    color="info"
                    fontsize='6'
                    value={iotNum} />
                </Link>

                <Link className='col-xl-3 col-md-3 mb-4' to='dashboard'>
                  <CardInfo title="안전 지수"
                    icon="exclamation-circle"
                    color={iotStatus}
                    value={stateName} />
                </Link>

                
              </div>
              <div className="row">
                <div className="col-xl col-lg">
                  <ChartNow electricData={electricData} />
                </div>

              </div>

            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
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

export default Dashboard