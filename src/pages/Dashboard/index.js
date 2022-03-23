import React, { Component, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartNow from '../../components/Charts/Now';
import PageHeading from '../../components/PageHeading';

// axios
import axios from 'axios';

// class Dashboard extend Component
const Dashboard = () => {
  /* componentWillMount() {
    document.getElementById('body').className = 'page-top'
  } */
  // 요금액, 예측액, 안전, IOT
  const [iotData, setIotData] = useState();
  const [predictData, setPredictData] = useState();
  const [iotStatus, setIotStatus] = useState();

  const [_IotNum, setIotNum] = useState('');

  // (String) 오늘 날짜 반환
  let today = new Date();
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  }
  let timestring = `${time.year}-${time.month}-${time.date}`;
  
  let _postIot = {
    IotNum: '1234',
    Date: '2022-02-01',
  }

  let _postPredict = {
    IotNum: 1227564000,
  }

  let _postIotStatus = {
    iotNum: 1227564000,
  }

  // 렌더링 될 때마다 실행
  useEffect(() => {
    document.getElementById('body').className = 'page-top';
    console.log('useEffect');

    axios.get('/api/overview/1227564000/2022-02-01',)
    .then(function (response) {
      console.log(_postIot)
      console.log(response)

      if (response.data["success"] === true) {
        console.log('success', response.message)
        setIotData(response.data["data"].IotData)
      } else {
        console.log('err');
      }
    })

    
    /*axios.get('/api/predict/predictThisMonth/1227564000')
    .then(response => {
      console.log(_postPredict)
      console.log(response)
      
    })
    .catch(error => {
      console.log(error)
    })*/

    /*
    axios.get('/api/overview/IotStatus', _postIotStatus)
    .then(function (response) {
      console.log(response)

      if (response.data["success"] === true) {
        console.log('success', response.message)

        if (response.data["data"]["AlarmVoltage"]    === 4 
        || response.data["data"]["AlarmElectric"]    === 2
        || response.data["data"]["AlarmLeakage"]     === 2
        || response.data["data"]["AlarmArc"]         === 1
        || response.data["data"]["AlarmTemperature"] === 1) {
          setIotStatus(2)
        } elif (response.data["data"]["AlarmVoltage"] === 1
          || response.data["data"]["AlarmVoltage"]    === 2
          || response.data["data"]["AlarmElectric"]   === 1
          || response.data["data"]["AlarmLeakage"]    === 1) {
          setIotStatus(1)
        } else {

        }
      } else {
        console.log(response.message)
        console.log('err');
      }
    })
    */

  });

  // render() {
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
                      value= {iotData} />
                  </Link>

                  <Link className='col-xl-3 col-md-3 mb-4' to='/predict'>
                    <CardInfo title="전력 예측"
                      icon="chart-bar"
                      color="warning"
                      value={predictData} />
                  </Link>

                  <Link className='col-xl-3 col-md-3 mb-4' to='dashboard'>
                    <CardInfo title="안전 지수"
                      icon="exclamation-circle"
                      color="danger"
                      value={iotStatus} />
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
  // }
}

export default Dashboard;